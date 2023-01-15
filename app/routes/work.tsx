import React from 'react';

// MUI
import { Grid, Typography } from '@mui/material';

// Components
import ProjectList from '~/components/Work/ProjectList';

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
                <Typography 
                    variant='h3' 
                    gutterBottom
                >
                    My Work
                </Typography>
            </Grid>
            <ProjectList projectType='large' />
            <ProjectList projectType='small' />
        </Grid>
    );
};

export default WorkPage;