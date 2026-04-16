import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-[linear-gradient(135deg,_#f4e8cf_0%,_#d8ba89_100%)] text-slate-700 shadow-[0_14px_34px_rgba(216,186,137,0.34)] hover:brightness-[1.03]',
        secondary: 'bg-[linear-gradient(135deg,_rgba(244,232,207,0.62)_0%,_rgba(216,186,137,0.42)_100%)] text-slate-700 hover:bg-[linear-gradient(135deg,_rgba(244,232,207,0.82)_0%,_rgba(216,186,137,0.58)_100%)]',
        outline: 'border border-[#dcc8a1] bg-white text-slate-700 hover:bg-[#faf4ea] hover:border-[#d4be95]',
        ghost: 'text-slate-700 hover:bg-[#faf4ea] hover:text-slate-800',
        destructive: 'bg-red-600 text-white hover:bg-red-700'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 px-3',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, type = 'button', ...props }, ref) => {
    return <button ref={ref} type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
  }
);

Button.displayName = 'Button';
