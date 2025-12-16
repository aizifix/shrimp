import React from 'react';

export interface NavLink {
    label: string;
    href: string;
}

export interface SocialLink {
    platform: string;
    url: string;
    icon: React.ElementType;
}

export interface TokenomicStat {
    label: string;
    value: string;
}