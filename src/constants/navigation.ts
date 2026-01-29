export const ROUTES = {
  HOME: "/",
  CV: "/cv",
} as const;

export const SECTIONS = {
  ABOUT: "om",
  EXPERIENCE: "erfaring",
  CONTACT: "kontakt",
} as const;

export interface NavLink {
  label: string;
  href: string;
  isHash?: boolean;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Om meg", href: `/#${SECTIONS.ABOUT}`, isHash: true },
  { label: "Erfaring", href: `/#${SECTIONS.EXPERIENCE}`, isHash: true },
  { label: "Kontakt", href: `/#${SECTIONS.CONTACT}`, isHash: true },
];

export const SOCIAL_LINKS = {
  EMAIL: "magnhild.lm@hotmail.com",
  LINKEDIN: "https://linkedin.com/in/mmyskja",
} as const;
