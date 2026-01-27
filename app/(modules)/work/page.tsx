'use client';

import React from 'react';

// MUI
import { Grid
    , Typography 
} from '@mui/material';

// Components
import ProjectList from '~/components/Work/ProjectList';

export default function Page () {

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            component='main'
            sx={ {
                padding: '3rem 2rem'
                , minHeight: '90vh'
            } }
        >
            <Grid
                sx={ {
                    marginBottom: '4rem'
                    , textAlign: 'center'
                } }
            >
                <Typography
                    variant='h2'
                    sx={ {
                        fontWeight: 600
                        , marginBottom: '0.5rem'
                    } }
                >
                    My Work
                </Typography>
                <Typography
                    variant='body1'
                    sx={ {
                        color: 'rgba(255, 255, 255, 0.7)'
                        , fontSize: '1.1rem'
                    } }
                >
                    Recent projects and applications
                </Typography>
            </Grid>
            <ProjectList projectType='large' />
            <ProjectList projectType='small' />
        </Grid>
    );
}
