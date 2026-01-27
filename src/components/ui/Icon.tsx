import {
  Menu,
  X,
  Mail,
  ArrowRight,
  Linkedin,
  type LucideProps,
} from 'lucide-react';
import type { ComponentType } from 'react';

export type IconName = 'menu' | 'x' | 'mail' | 'arrow-right' | 'linkedin';

const iconMap: Record<IconName, ComponentType<LucideProps>> = {
  'menu': Menu,
  'x': X,
  'mail': Mail,
  'arrow-right': ArrowRight,
  'linkedin': Linkedin,
};

interface IconProps extends LucideProps {
  name: IconName;
}

export function Icon({ name, ...props }: IconProps) {
  const IconComponent = iconMap[name];
  return <IconComponent {...props} />;
}
