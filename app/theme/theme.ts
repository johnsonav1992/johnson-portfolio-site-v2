import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

const darkGray = '#1f1f27'
const lightGray = '#2f313a'
const johnsonBlue = '#04295e'

declare module '@mui/material/styles' {
    interface Palette {
        gray: {
            main: React.CSSProperties['color']
            , light: React.CSSProperties['color']
        }
    }
    interface PaletteOptions {
        gray: {
            main: React.CSSProperties['color']
            , light: React.CSSProperties['color']
        }
    }

}

export const theme: Theme = createTheme({
    palette: {
        gray: {
            main: darkGray
            , light: lightGray
        }
        , primary: {
            main: johnsonBlue
        }
    }

})

export default theme 