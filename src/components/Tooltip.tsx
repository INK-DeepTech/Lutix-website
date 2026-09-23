import React, { useState, useRef, useEffect } from 'react';

interface TooltipProps {
  /** The user-friendly text displayed inline */
  children: React.ReactNode;
  /** The technical explanation shown on hover/focus */
  label: string;
}

/**
 * Progressive-disclosure tooltip for technical jargon.
 * Renders inline text with a dotted underline; on hover or keyboard focus,
 * a small tooltip appears with the technical explanation.
 */
export const Tooltip: React.FC<TooltipProps> = ({ children, label }) => {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLSpanElement>(null);
  const triggerRef = useRef<HTMLSpanElement>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setVisible(false);
    };
    if (visible) {
      document.addEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [visible]);

  return (
    <span className="relative inline-block">
      <span
        ref={triggerRef}
        className="border-b border-dotted border-[#777587] cursor-help"
        onMouseEnter={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
        onFocus={() => setVisible(true)}
        onBlur={() => setVisible(false)}
        tabIndex={0}
        role="button"
        aria-describedby={visible ? 'tooltip-popup' : undefined}
      >
        {children}
      </span>
      {visible && (
        <span
          ref={tooltipRef}
          id="tooltip-popup"
          role="tooltip"
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 rounded-lg bg-brand-mint text-brand-navy text-[11px] border border-slate-200 leading-relaxed font-normal whitespace-nowrap shadow-lg z-50 pointer-events-none animate-in fade-in duration-150"
        >
          {label}
          <span className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-4 border-x-transparent border-t-4 border-t-[#131b2e]" />
        </span>
      )}
    </span>
  );
};
