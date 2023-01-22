import React from 'react';

// Libraries
import { useParams } from '@remix-run/react';
import { Link } from '@remix-run/react';

// MUI
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExternalLink from '@mui/material/Link';
import { 
    Button
    , Container
    , Grid
    , Paper
    , Typography
    , useMediaQuery 
} from '@mui/material';

// Data
import { 
    smallProjects
    , largeProjects
} from '~/data/work';

// Theme
import theme from '~/theme/theme';

const ProjectDetail = () => {
    const { name: projectRoute } = useParams();
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    const project = [ ...smallProjects, ...largeProjects ]
        .find( 
            project => project.route === projectRoute 
        );

    if ( !project ) {
        return <Container>
            <Grid 
                container 
                justifyContent='center' 
                sx={ { 
                    height: '90vh'
                    , marginTop: '2rem' 
                } }>
            This project does not exist, please go back and try again
            </Grid>;
        </Container>;
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
            <Grid 
                item 
                container 
                justifyContent='center'
            >
                <Grid 
                    component={Paper}
                    item
                    container
                    direction='column'
                    md={ 6 }
                    sm={ 12 }
                    elevation={ 5 }
                    sx={ {
                        padding: '2rem'
                        , gap: '2rem'
                    } }
                >
                    <Grid item>
                        <Typography variant='h3' textAlign='center'>
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
                                width: isMdScreen ? '100%' : '80%'
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
                    <Grid 
                        item
                        container
                        justifyContent='space-between'
                    >
                        <Grid item>
                            <Button 
                                component={Link} 
                                variant='contained' 
                                color='inherit'
                                to='/work'
                                startIcon={<ArrowBackIcon />}
                            >
                                Back
                            </Button>
                        </Grid>
                        <Grid item>
                            <Button
                                component={ ExternalLink }
                                variant='contained' 
                                color='primary'
                                href={ project.prodLink }
                                target='_blank'
                                endIcon={<OpenInNewIcon />}
                            >
                                Hosted Project
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProjectDetail;