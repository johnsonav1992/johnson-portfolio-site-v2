// Theme
import type React from 'react';

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
    iconSrc: string;
}