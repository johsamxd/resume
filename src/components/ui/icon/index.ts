import sunSvg from "/icons/sun.svg?raw";
import moonSvg from "/icons/moon.svg?raw";
export const IconTypes = ["sun", "moon"] as const;

export type IconType = (typeof IconTypes)[number];
export type IconColor = "default" | "primary";
export type IconSize = "sm" | "md" | "lg" | "xl" | "2xl";

export interface IconProps {
  type: IconType;
  size?: IconSize;
  color?: IconColor;
  noHover?: boolean;
}

interface ColorWithHover {
  color: string;
  text?: string;
  hoverColor?: string;
  hoverTextColor?: string;
}

const colorToClassName = new Map<IconColor, ColorWithHover>([
  [
    "default",
    {
      color: "fill-element",
      hoverColor: "group-hover/icon:fill-element/80",
    },
  ],
  [
    "primary",
    {
      color: "fill-main",
      hoverColor: "group-hover/icon:fill-main/80",
    },
  ],
]);

const sizeToClassName = new Map<IconSize, string>([
  ["sm", "w-[12px] h-[12px]"],
  ["md", "w-[16px] h-[16px]"],
  ["lg", "w-[24px] h-[24px]"],
  ["xl", "w-[32px] h-[32px]"],
  ["2xl", "w-[80px] h-[80px]"],
]);

function cn(...classes: (string | undefined)[]): string {
  return classes.filter(Boolean).join(" ");
}

const iconSvgs = {
  sun: sunSvg,
  moon: moonSvg,
} as const;

const iconCache = new Map<IconType, string>();

function getIcon(type: IconType): string {
  if (iconCache.has(type)) {
    return iconCache.get(type)!;
  }
  const svgText = iconSvgs[type];
  if (!svgText) {
    throw new Error(`Icon not found: ${type}`);
  }
  iconCache.set(type, svgText);
  return svgText;
}

export function createIcon(props: IconProps): HTMLElement {
  const { type, size = "md", color = "default", noHover } = props;

  const container = document.createElement("span");
  container.className = cn(
    "flex flex-shrink-0 items-center justify-center",
    sizeToClassName.get(size),
    colorToClassName.get(color)?.text,
    noHover ? undefined : colorToClassName.get(color)?.hoverTextColor
  );

  const iconStr = getIcon(type);

  const pathClassNames = [
    "transition-all duration-300",
    colorToClassName.get(color)?.color,
    noHover ? undefined : colorToClassName.get(color)?.hoverColor,
  ]
    .filter(Boolean)
    .join(" ")
    .split(" ");

  const svgClassNames = [
    "transition-all duration-300",
    sizeToClassName.get(size),
  ]
    .filter(Boolean)
    .join(" ")
    .split(" ");

  const parser = new DOMParser();
  const parsed = parser.parseFromString(
    iconStr
      .replace(/<defs>[\s\S]*<\/defs>/, "")
      .replace(/stroke="[\w]*"/g, "stroke='currentColor'")
      .replace(/\s+/g, " "),
    "image/svg+xml"
  );
  const svg = parsed.children[0] as SVGElement;

  svgClassNames.forEach((cl) => svg.classList.add(cl));

  inspectSvgChildren(svg, pathClassNames);

  container.appendChild(svg);

  return container;
}

function inspectSvgChildren(svg: SVGElement, pathClassNames: string[]) {
  for (const child of svg.children) {
    if (child instanceof SVGPathElement || child instanceof SVGRectElement) {
      if (child.hasAttribute("fill")) {
        child.removeAttribute("fill");
        pathClassNames.forEach((cl) => child.classList.add(cl));
      }
    } else if (child instanceof SVGElement) {
      inspectSvgChildren(child, pathClassNames);
    }
  }
}
