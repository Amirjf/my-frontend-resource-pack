import React from 'react';
import { Loader2 } from 'lucide-react';
import { cn } from '@qualif/utils';

export const Spinner = ({ className }: { className?: string }) => {
  return (
    <Loader2
      className={cn('size-5 mr-2 animate-spin text-inherit', className)}
    />
  );
};
