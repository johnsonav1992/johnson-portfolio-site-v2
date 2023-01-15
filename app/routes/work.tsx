import React from 'react';

// Libraries
// MUI
import { Grid, Typography } from '@mui/material';
import ProjectList from '~/components/Work/ProjectList';
// Components
// Types
// Ducks
// Utils
// Contexts
// Services
// Styles

const WorkPage = () => {
    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            component='main'
            sx={ { 
                padding: '2rem'
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
            <ProjectList projectType='large' />
            <ProjectList projectType='small' />
        </Grid>
    );
};

export default WorkPage;