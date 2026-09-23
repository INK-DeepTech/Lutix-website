import React from 'react';
import { PageRoute } from '../types';

interface SolutionsMatrixPageProps {
  onRouteChange: (route: PageRoute) => void;
}

export const SolutionsMatrixPage: React.FC<SolutionsMatrixPageProps> = ({ onRouteChange }) => {
  return (
    <div className="flex flex-col w-full bg-brand-mint text-brand-navy min-h-screen">
      <div id="academic-os-content"></div>
    </div>
  );
};
