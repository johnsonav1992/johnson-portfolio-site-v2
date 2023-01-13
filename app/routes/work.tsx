import React from 'react';

// Libraries
// MUI
import { Grid, Typography } from '@mui/material';
import LargeProjects from '~/components/Work/LargeProjects';
// Components
// Types
// Ducks
// Utils
// Contexts
// Services
// Styles

const work = () => {
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            component='main'
            sx={ { 
                padding: '2rem'
                , gap: '2rem'
            } }
        >
            <Grid 
                item
                sx={ { marginBottom: '2rem' } }
            >
                <Typography variant='h3'>
                    My Work
                </Typography>
            </Grid>
            <LargeProjects />
        </Grid>
    );
};

export default work;