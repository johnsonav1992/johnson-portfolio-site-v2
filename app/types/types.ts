// Theme
import type React from 'react';
import type { StaticImageData } from 'next/image';

declare module '@mui/material/styles' {
    export interface Palette {
        gray: {
            main: React.CSSProperties['color']
            , light: React.CSSProperties['color']
        }
    }
    export interface PaletteOptions {
        gray: {
            main: React.CSSProperties['color']
            , light: React.CSSProperties['color']
        }
    }

}
export interface Skill {
    id: string;
    name: string;
    iconSrc: string | StaticImageData;
}

export interface WorkItem {
    id: string;
    name: string;
    route: string;
    imgSrc: string | StaticImageData;
    prodLink?: string;
    repoLink?: string;
    videoLink?: string;
    technologies: string[];
    description: string;
    objectPosition?: string;
}