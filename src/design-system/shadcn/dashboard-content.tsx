import { FC, ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const DashboardContent: FC<Props> = ({ children }) => {
  return (
    <div className="flex-1 overflow-y-auto overflow-x-hidden bg-secondary/10 pb-1">
      {children}
    </div>
  );
};
