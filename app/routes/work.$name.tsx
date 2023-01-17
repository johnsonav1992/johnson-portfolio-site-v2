import React from 'react';

// Libraries
import { useParams } from '@remix-run/react';

// MUI


// Data
import { 
    smallProjects
    , largeProjects
} from '~/data/work';
import { Box, Grid, Paper, Typography } from '@mui/material';

const ProjectDetail = () => {
    const { name: projectRoute } = useParams();

    const project = [ ...smallProjects, ...largeProjects ]
        .find( 
            project => project.route === projectRoute 
        );

    if ( !project ) {
        return <Box>
            This project does not exist, please go back and try again
        </Box>;
    }

    console.log( project.technologies );

    return (
        <Grid 
            container
            direction='column'
            justifyContent='center'
            alignItems='center'
            sx={ { 
                padding: '2rem'
                , minHeight: '90vh'
            } }
        >
            <Grid item>
                <Grid 
                    component={Paper}
                    container
                    direction='column'
                    sx={ {
                        padding: '2rem'
                        , gap: '2rem'
                    } }
                >
                    <Grid item>
                        <Typography variant='h3'>
                            { project.name }
                        </Typography>
                    </Grid>
                    <Grid 
                        item
                        container
                        justifyContent='center'
                    >
                        <img 
                            src={ project.imgSrc } 
                            alt={ project.name } 
                            style={ { 
                                width: '60%'
                                , borderRadius: '.5em' 
                            } }
                        />    
                    </Grid> 
                    <Grid 
                        item
                        container
                        justifyContent='center'
                    >
                        <Grid 
                            item
                            container
                            direction='column'
                            component='article'
                            sx={ {
                                width: '80%'
                                , gap: '1rem'
                            } }
                        >
                            <Grid item>
                                <Typography variant='body1'>
                                    { project.description }
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant='h6'>
                                    Tech Stack:     
                                </Typography>                                    
                                <Typography variant='body2'>
                                    { `${ project.technologies.map( techItem =>
                                        ` ${ techItem }`
                                    ) }`
                                    }
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProjectDetail;