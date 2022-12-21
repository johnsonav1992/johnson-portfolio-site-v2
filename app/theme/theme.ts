import { createTheme } from "@mui/material";
import type { Theme } from "@mui/material";

const darkGray = '#1f1f27'
const lightGray = '#2f313a'
const johnsonBlue = '#04295e'

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