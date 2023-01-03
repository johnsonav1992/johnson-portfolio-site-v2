import { createTheme } from '@mui/material';
import type { Theme } from '@mui/material';

const darkGray = '#1F1F27';
const lightGray = '#2f313a';
const johnsonBlue = '#04295e';

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
                    color: 'white'
                    , '& .MuiInput': {
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
    }
} );

export default theme; 