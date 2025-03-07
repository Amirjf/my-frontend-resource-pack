import { type VariantProps, cva } from 'class-variance-authority';
import { cn } from '@qualif/utils';
import { SearchIcon } from 'lucide-react';
import { KBD } from './kbd';

const searchClassnames = cva(
  'peer text-black/100 rounded-lg ps-7 pe-1 py-2 min-w-40 w-40 text-sm transition-all focus:ring-4 focus:ring-black-5 focus:outline-none',
  {
    variants: {
      variant: {
        gray: 'bg-black/5 placeholder:text-black/20 hover:bg-black-10',
        outline: 'bg-white/40 border border-black-10 hover:border-black-40',
      },
    },
    defaultVariants: {
      variant: 'outline',
    },
  }
);

/**
 * Props for the Search component.
 */
type SearchProps = React.ComponentProps<'input'> &
  VariantProps<typeof searchClassnames> & {
    /**
     * An array of key bindings for the search input.
     */
    keyBindings?: string[];

    /**
     * The size of the search icon.
     */
    iconSize?: number;
  };

/**
 * Search component displays a search input field.
 */
const Search = ({
  id,
  variant,
  className,
  keyBindings,
  iconSize = 16,
  ref,
  ...props
}: SearchProps) => (
  <div className="relative">
    <input
      {...props}
      ref={ref}
      className={cn(searchClassnames({ variant, className }), 'peer')}
      type="search"
      id={id}
    />
    <SearchIcon
      className="absolute left-2 top-1/2 -translate-y-1/2 stroke-black/20 peer-hover:stroke-black/40 peer-focus:stroke-primary"
      size={iconSize}
    />
    {keyBindings && keyBindings.length > 0 && !props.value && (
      <KBD
        className="absolute right-2 top-1/2 -translate-y-1/2 "
        keyBindings={keyBindings}
      />
    )}
  </div>
);

Search.displayName = 'Search';
export { Search };
