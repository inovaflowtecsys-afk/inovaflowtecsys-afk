import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const badgeVariants = cva('inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold', {
  variants: {
    variant: {
      default: 'bg-[linear-gradient(135deg,_#f4e8cf_0%,_#d8ba89_100%)] text-slate-700',
      secondary: 'bg-[#f4e8cf] text-[#6f5d3d]',
      destructive: 'bg-red-600 text-white',
      outline: 'border border-[#dcc8a1] text-[#6f5d3d]'
    }
  },
  defaultVariants: {
    variant: 'default'
  }
});

export type BadgeProps = React.ComponentPropsWithoutRef<'div'> & VariantProps<typeof badgeVariants>;

export function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}
