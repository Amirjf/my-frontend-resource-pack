import { type VariantProps, cva } from 'class-variance-authority';
import type { ElementType, ReactNode } from 'react';
import { cn } from '@qualif/utils';

export type TextSize = 12 | 14 | 16 | 18 | 20 | 24 | 32 | 48 | 64;

const textStyles = cva(['font-normal transition-all'], {
  variants: {
    size: {
      64: 'text-[4rem] leading-[4.875rem]',
      48: 'text-[3rem] leading-[3.625rem]',
      32: 'text-[2rem] leading-[2.5rem]',
      24: 'text-2xl',
      20: 'text-xl',
      18: 'text-lg',
      16: 'text-base',
      14: 'text-sm',
      12: 'text-xs',
      default: 'text-inherit',
    },
    semibold: {
      true: 'font-semibold',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
    italic: {
      true: 'italic',
    },
    underline: {
      true: 'underline',
    },
  },
  defaultVariants: {
    align: 'left',
  },
});

/**
 * Props for the Text component.
 *
 * @template C - The element type for the Text component.
 * @example <Text as="h1" size={TEXT_SIZES[24]} semibold align="center" italic underline>Example</Text>
 */
export type TextProps<C extends ElementType> = React.ComponentProps<C> &
  VariantProps<typeof textStyles> & {
    /**
     * The element type for the Text component.
     */
    as?: C;

    /**
     * The size of the text.
     */
    size?: TextSize;
  };

/**
 * Text component displays text with various styles.
 */
export const Text = <C extends ElementType = 'span'>({
  as: Component = 'p',
  size,
  semibold,
  align,
  italic,
  underline,
  className,
  children,
  ref,
  ...props
}: TextProps<C>): ReactNode => (
  <Component
    ref={ref}
    className={cn(
      textStyles({ size, semibold, align, italic, underline, className })
    )}
    {...props}
  >
    {children}
  </Component>
);
