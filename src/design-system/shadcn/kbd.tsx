'use client';
import { twMerge } from 'tailwind-merge';
import { Text } from './text';

/**
 * Represents a keyboard component that displays key bindings.
 */
export type KBDProps = React.ComponentProps<'p'> & {
  /**
   * An array of key bindings to be displayed.
   */
  keyBindings: string[];
  /**
   * The separator to be used between key bindings. Defaults to an empty string.
   */
  separator?: string;
};

/**
 * KBD component displays key bindings.
 */
const KBD = ({ keyBindings, separator = '', className, ref }: KBDProps) => (
  <Text
    size={14}
    ref={ref}
    as="kbd"
    aria-keyshortcuts={keyBindings.join(separator)}
    className={twMerge('w-min text-black/20', className)}
  >
    {keyBindings.join(separator || '')}
  </Text>
);

KBD.displayName = 'KBD';
export { KBD };
