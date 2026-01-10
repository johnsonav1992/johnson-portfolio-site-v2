'use client';

// MUI
import {
    IconButton
    , Typography
    , Link
    , useMediaQuery
    , Box
} from '@mui/material';

// Components
import LinkedinIcon from './LinkedinIcon';
import GitHubIcon from './GitHubIcon';

// Theme
import theme from '~/theme/theme';

const Footer = () => {
    const isSmScreen = useMediaQuery( theme.breakpoints.down( 'sm' ) );
    const currentYear = new Date().getFullYear();

    const iconBtnSx = {
        color: theme.palette.common.white
        , '&:hover': {
            color: theme.palette.grey[ 400 ]
        }
        , '.MuiTypography-root': {
            '&:hover': {
                color: theme.palette.grey[ 400 ]
            }
        }
        , gap: '.5rem'
    };

    return (
        <Box
            component='footer'
            sx={ {
                backgroundColor: theme.palette.gray.main
                , height: 50
                , display: 'flex'
                , alignItems: 'center'
                , justifyContent: 'space-between'
                , paddingLeft: '1rem'
                , paddingRight: '1rem'
            } }
        >
            <Box
                sx={ {
                    display: 'flex'
                    , alignItems: 'center'
                } }
            >
                <Typography variant='body2'>
                    {`© ${ currentYear } - AJ Web Development`}
                </Typography>
            </Box>
            <Box
                sx={ {
                    display: 'flex'
                    , alignItems: 'center'
                } }
            >
                <IconButton
                    sx={ iconBtnSx }
                    LinkComponent={Link}
                    href='https://www.linkedin.com/in/johnsonav/'
                    target='_blank'
                >
                    <LinkedinIcon />
                    { !isSmScreen &&
                        <Typography variant='h6'>
                            LinkedIn
                        </Typography>
                    }
                </IconButton>
                <IconButton
                    sx={ iconBtnSx }
                    LinkComponent={Link}
                    href='https://github.com/johnsonav1992'
                    target='_blank'
                >
                    <GitHubIcon />
                    { !isSmScreen &&
                        <Typography variant='h6'>
                            GitHub
                        </Typography>
                    }
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;