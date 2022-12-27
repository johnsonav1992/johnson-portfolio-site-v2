import React from 'react';

// MUI
import theme from '~/theme/theme';
import { 
    IconButton
    , Typography
    , Link
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
        , justifyContent: 'flex-end'
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
} );

const Footer = () => {
    const { classes } = useStyles();

    return (
        <footer className={ classes.footer }>
            <IconButton 
                className={ classes.iconBtn } 
                LinkComponent={Link}
                href='https://www.linkedin.com/in/johnsonav/'
                target='_blank'
            >
                <LinkedinIcon />
                <Typography variant='h6'>LinkedIn</Typography>
            </IconButton>
            <IconButton 
                className={ classes.iconBtn } 
                LinkComponent={Link}
                href='https://github.com/johnsonav1992'
                target='_blank'
            >
                <GitHubIcon />
                <Typography variant='h6'>GitHub</Typography>
            </IconButton>
        </footer>
    );
};

export default Footer;