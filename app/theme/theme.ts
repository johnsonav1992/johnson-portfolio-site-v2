import { createTheme } from '@mui/material';
import type { Theme } from '@mui/material';

const darkGray = '#1F1F27';
const lightGray = '#2f313a';
const johnsonBlue = '#04295e';
const imgShadow = `0px 2px 30px 3px rgb(35, 35, 35),0px 1px 20px 4px rgb(35, 35, 35),0px 1px 20px 5px rgb(35, 35, 35)`;
// This shadow is theme.shadows[25]

export const theme: Theme = createTheme( {
    palette: {
        gray: {
            main: darkGray
            , light: lightGray
        }
        , primary: {
            main: johnsonBlue
        }
        , background: {
            default: lightGray
        }
    }
    , typography: {
        allVariants: {
            fontFamily: 'Ubuntu'
            , color: '#FFF'
        }
        , h2: {
            fontWeight: 500
        }
    }
    , components: {
        MuiTextField: {
            styleOverrides: {
                root: {
                    input: { // TODO: fix input autofill bg color
                        color: 'white'
                    }
                    , textArea: {
                        color: 'white'
                    }
                    , '& label.Mui-focused': {
                        color: 'white'
                    }
                    , '& .Mui-focused': {
                        color: 'white'
                    }
                    , '& .MuiInput-underline:after': {
                        borderBottomColor: 'white'
                    }
                    , '& .MuiOutlinedInput-root': {
                        '& fieldset': {
                            borderColor: 'white'
                        }
                        , '&:hover fieldset': {
                            borderColor: 'white'
                        }
                        , '&.Mui-focused fieldset': {
                            borderColor: 'white'
                        }
                    }
                }
            }
        }
        , MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '.5rem'
                }
            }
        }
    }
} );

theme.shadows.push( imgShadow );

export default theme; 