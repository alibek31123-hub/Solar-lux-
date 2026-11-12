import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const SolarLogo: React.FC<LogoProps> = ({ className = '', size = 'md' }) => {
  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Sun Icon from user design */}
      <div className="relative w-10 h-10 flex items-center justify-center shrink-0">
        <svg
          viewBox="0 0 60 60"
          width="40"
          height="40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* 8 Sun Rays */}
          <rect x="27" y="2" width="6" height="8" rx="2" fill="#FBBF24" />
          <rect x="27" y="50" width="6" height="8" rx="2" fill="#FBBF24" />
          <rect x="2" y="27" width="8" height="6" rx="2" fill="#FBBF24" />
          <rect x="50" y="27" width="8" height="6" rx="2" fill="#FBBF24" />
          <rect x="42" y="10" width="6" height="8" rx="2" transform="rotate(45 45 14)" fill="#FBBF24" />
          <rect x="42" y="42" width="6" height="8" rx="2" transform="rotate(-45 45 46)" fill="#FBBF24" />
          <rect x="10" y="10" width="6" height="8" rx="2" transform="rotate(-45 13 14)" fill="#FBBF24" />
          <rect x="10" y="42" width="6" height="8" rx="2" transform="rotate(45 13 46)" fill="#FBBF24" />
          {/* Center Sun */}
          <circle cx="30" cy="30" r="17" fill="#F59E0B" />
          <circle cx="30" cy="30" r="13" fill="#FBBF24" />
          <circle cx="30" cy="30" r="17" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        </svg>
      </div>

      <div>
        <div className="font-heading text-lg sm:text-xl font-extrabold tracking-tight text-white leading-none flex items-center gap-1.5">
          <span>ИП</span>
          <span className="text-amber-400">АШЕНОВ</span>
        </div>
        <div className="text-[11px] font-medium text-slate-400 tracking-wide mt-1">
          Солнечная энергетика • г. Атырау
        </div>
      </div>
    </div>
  );
};
