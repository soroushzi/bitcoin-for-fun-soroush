import React from 'react';

type IconProps = {
  className?: string;
};

export const BitcoinIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M11.768 15.11a2.75 2.75 0 0 1-3.92.176l.176-.176a2.75 2.75 0 0 1 3.568 3.744l-2.02 2.02a1.5 1.5 0 0 1-2.122-2.122l2.02-2.02a2.751 2.751 0 0 1 .176-3.921Z" />
    <path d="M15.11 11.768a2.75 2.75 0 0 1 .176-3.92l-.176-.176a2.75 2.75 0 0 1 3.744 3.568l2.02-2.02a1.5 1.5 0 0 1-2.122-2.122l-2.02 2.02a2.751 2.751 0 0 1-3.921.176Z" />
    <path d="M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Z" />
    <path d="M7.5 10.25h1.938a2.187 2.187 0 0 1 2.062 2.5c0 .63-.25 1.176-.676 1.563-.44.4-1.01.624-1.636.624H7.5v-4.688Z" />
    <path d="M10.5 7.562H7.5v2.688h3a1.563 1.563 0 0 0 1.5-1.437c0-.6-.312-1.063-.844-1.25H10.5Z" />
    <path d="M14.562 14.25c.334 0 .65-.062.938-.187v-1.813c-.287.125-.6.188-.937.188a2.125 2.125 0 0 1-1.813-2.125c0-.938.625-1.75 1.813-1.75.338 0 .65.062.938.188V6.75c-.288-.125-.6-.188-.938-.188a3.937 3.937 0 0 0-3.937 3.938c0 2.25 1.688 3.75 3.938 3.75Z" />
    <path d="M12.5 12.312V14.5" />
    <path d="M12.5 7.5v2.188" />
  </svg>
);

export const KeyIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m21.73 18.27-1.73-1.73" />
        <path d="m17 22-1.73-1.73" />
        <path d="M12 18H2v-2h10" />
        <path d="M4.27 10.73 2 13" />
        <path d="M12 6H2v2h10" />
        <path d="m4.27 3.27 2.13 2.13" />
        <path d="M19 6h-2" />
        <path d="m22 12-2.13-2.13" />
        <circle cx="16.5" cy="8.5" r="2.5" />
        <circle cx="16.5" cy="15.5" r="2.5" />
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
);

export const AlertTriangleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="m21.73 18-8-14a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
);

export const CheckCircleIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

export const CpuIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        <rect x="9" y="9" width="6" height="6" />
        <line x1="9" y1="1" x2="9" y2="4" />
        <line x1="15" y1="1" x2="15" y2="4" />
        <line x1="9" y1="20" x2="9" y2="23" />
        <line x1="15" y1="20" x2="15" y2="23" />
        <line x1="20" y1="9" x2="23" y2="9" />
        <line x1="20" y1="14" x2="23" y2="14" />
        <line x1="1" y1="9" x2="4" y2="9" />
        <line x1="1" y1="14" x2="4" y2="14" />
    </svg>
);

export const GithubIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
    </svg>
);