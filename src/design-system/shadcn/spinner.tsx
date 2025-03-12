import { Loader2 } from 'lucide-react';
import { cn } from '@org/utils';

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <Loader2
      className={cn('size-5 mr-2 animate-spin text-inherit', className)}
    />
  );
};
