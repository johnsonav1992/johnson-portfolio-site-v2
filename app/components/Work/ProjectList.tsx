import React from 'react';

// MUI
import { 
    Grid
    , Typography
    , useMediaQuery
} from '@mui/material';
import WorkItem from './WorkItemComponent';

// Data 
import { 
    largeProjects
    , smallProjects
} from '~/data/work';

// Styles
import theme from '~/theme/theme';

interface Props {
    projectType: string;
}

const ProjectList = ( { projectType }: Props ) => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid 
            item
            container
            direction='column'
            alignItems='center'
            sx={ {
                gap: '2rem'
                , marginBottom: '4rem'
            } }
        >
            <Grid item>
                <Typography 
                    variant={ isMdScreen ? 'h5' : 'h4' }
                >
                    { 
                        projectType === 'large' 
                            ? 'Large Projects/Websites' 
                            : 'Small Projects' 
                    }
                </Typography>
            </Grid>
            <Grid
                item
                container
                sx={ { 
                    width: isMdScreen 
                        ? '100%' 
                        : '90%'
                } }
                spacing={ 4 }
            >
                { projectType === 'large' 
                    ? largeProjects.map( project => 
                        <WorkItem 
                            key={ project.id }
                            project={ project }
                        /> )
                    : smallProjects.map( project => 
                        <WorkItem 
                            key={ project.id }
                            project={ project }
                        /> )
                }
            </Grid>
        </Grid>
    );
};

export default ProjectList;