import React from 'react';

// MUI
import theme from '~/theme/theme';
import Link from '@mui/material/Link';

// Styles
import { makeStyles } from 'tss-react/mui';
import { IconButton, Typography } from '@mui/material';
import LinkedinIcon from './LinkedinIcon';
import GitHubIcon from './GitHubIcon';

const useStyles = makeStyles()( {
    footer: {
        backgroundColor: theme.palette.gray.main
        , height: 50
        , display: 'flex'
        , alignItems: 'center'
        , justifyContent: 'flex-end'
        , paddingLeft: '1rem'
        , paddingRight: '1rem'
    }
    , icon: {
        color: theme.palette.common.white
    }
} );

const Footer = () => {
    const { classes } = useStyles();

    return (
        <footer className={ classes.footer }>
            <IconButton 
                sx={{ gap: '.5rem' }} 
                LinkComponent={Link}
                href='https://www.linkedin.com/in/johnsonav/'
                target='_blank'
            >
                <LinkedinIcon className={ classes.icon } />
                <Typography variant='h6'>LinkedIn</Typography>
            </IconButton>
            <IconButton 
                sx={{ gap: '.5rem' }} 
                LinkComponent={Link}
                href='https://github.com/johnsonav1992'
                target='_blank'
            >
                <GitHubIcon className={ classes.icon } />
                <Typography variant='h6'>GitHub</Typography>
            </IconButton>
        </footer>
    );
};

export default Footer;