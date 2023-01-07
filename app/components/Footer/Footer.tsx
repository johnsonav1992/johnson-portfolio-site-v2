import React from 'react';

// MUI
import theme from '~/theme/theme';
import { 
    IconButton
    , Grid
    , Typography
    , Link
    , useMediaQuery
} from '@mui/material';

// Components
import LinkedinIcon from './LinkedinIcon';
import GitHubIcon from './GitHubIcon';

// Styles
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()( {
    footer: {
        backgroundColor: theme.palette.gray.main
        , height: 50
        , display: 'flex'
        , alignItems: 'center'
        , justifyContent: 'space-between'
        , paddingLeft: '1rem'
        , paddingRight: '1rem'
    }
    , iconBtn: {
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
    }
    , copyrightTextContainer: {
        display: 'flex'
        , alignItems: 'center'
    }
} );

const Footer = () => {
    const { classes } = useStyles();
    const isSmScreen = useMediaQuery( theme.breakpoints.down( 'sm' ) );
    const currentYear = new Date().getFullYear();

    return (
        <footer className={ classes.footer }>
            <Grid container justifyContent='space-between'>
                <Grid className={ classes.copyrightTextContainer }>
                    <Typography variant='body2'>
                        {`© ${ currentYear } - AJ Web Development`}
                    </Typography>
                </Grid>
                <Grid>
                    <IconButton 
                        className={ classes.iconBtn } 
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
                        className={ classes.iconBtn } 
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
                </Grid>
            </Grid>
        </footer>
    );
};

export default Footer;