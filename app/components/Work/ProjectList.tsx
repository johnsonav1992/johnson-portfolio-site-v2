'use client';

import React from 'react';

// MUI
import {
    Divider
    , Typography
    , useMediaQuery
} from '@mui/material';
import { Grid } from '@mui/material';
import WorkItemComponent from './WorkItemComponent';

// Data 
import { 
    largeProjects
    , smallProjects
} from '~/data/work';

// Theme
import theme from '~/theme/theme';

interface Props {
    projectType: string;
}

const ProjectList = ( { projectType }: Props ) => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid
            container
            direction='column'
            sx={ {
                maxWidth: '1400px'
                , width: '100%'
                , mb: '5rem'
            } }
        >
            <Grid
                sx={ {
                    mb: '3rem'
                    , pl: isMdScreen ? '1rem' : '2rem'
                } }
            >
                <Typography
                    variant={ isMdScreen ? 'h4' : 'h3' }
                    sx={ {
                        fontWeight: 600
                        , position: 'relative'
                        , display: 'inline-block'
                        , paddingBottom: '12px'
                        , '&::after': {
                            content: '""'
                            , position: 'absolute'
                            , bottom: 0
                            , left: 0
                            , width: '80px'
                            , height: '4px'
                            , backgroundColor: 'primary.main'
                            , borderRadius: '2px'
                        }
                    } }
                >
                    {
                        projectType === 'large'
                            ? 'Featured Projects'
                            : 'More Projects'
                    }
                </Typography>
            </Grid>
            <Grid
                container
                sx={ {
                    width: '100%'
                    , padding: isMdScreen ? '0 0.5rem' : '0 1rem'
                } }
                spacing={ isMdScreen ? 4 : 6 }
            >
                { projectType === 'large'
                    ? largeProjects.map( project =>
                        <WorkItemComponent
                            key={ project.id }
                            project={ project }
                        /> )
                    : smallProjects.map( project =>
                        <WorkItemComponent
                            key={ project.id }
                            project={ project }
                        /> )
                }
            </Grid>
        </Grid>
    );
};

export default ProjectList;