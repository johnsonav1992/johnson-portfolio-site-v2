import React from 'react';

// Libraries
import { 
    useParams
    , Link 
} from '@remix-run/react';

// MUI
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExternalLink from '@mui/material/Link';
import { 
    Button
    , Grid
    , Paper
    , Typography
    , useMediaQuery 
} from '@mui/material';

// Components
import ProjectError from '~/components/Work/ProjectError';

// Data
import { 
    smallProjects
    , largeProjects
} from '~/data/work';

// Theme
import theme from '~/theme/theme';
import GitHubIcon from '~/components/Footer/GitHubIcon';

const ProjectDetail = () => {
    const { name: projectRoute } = useParams();
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    const project = [ ...smallProjects, ...largeProjects ]
        .find( 
            project => project.route === projectRoute 
        );

    if ( !project ) {
        return <ProjectError />;
    }

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
                        <Typography 
                            variant={ isMdScreen ? 'h4' : 'h3' } 
                            textAlign='center'
                        >
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
                                width: isMdScreen ? '100%' : '80%'
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
                                    { `${ project.technologies.map( 
                                        techItem => ` ${ techItem }`
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
                        gap={'1rem'}
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
                        <Grid 
                            container 
                            wrap={isMdScreen ? 'wrap' : 'nowrap'}
                            width={isMdScreen ? '100%' : 'unset'}
                            gap='1rem'
                        >
                            {
                                project.prodLink
                                &&
                                (
                                    <Button
                                        component={ ExternalLink }
                                        variant='contained' 
                                        color='primary'
                                        href={ project.prodLink }
                                        target='_blank'
                                        endIcon={<OpenInNewIcon />}
                                        sx={{ width: isMdScreen ? '100%' : undefined }}
                                    >
                                        Hosted Project
                                    </Button>
                                )
                            }
                            {
                                project.repoLink
                                &&
                                (
                                    <Button
                                        component={ ExternalLink }
                                        variant='contained'
                                        color='inherit'
                                        href={ project.repoLink }
                                        target='_blank'
                                        startIcon={<GitHubIcon />}
                                        endIcon={<OpenInNewIcon />}
                                        sx={{ width: isMdScreen ? '100%' : undefined }}
                                    >
                                        Repo
                                    </Button>
                                )
                            }
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default ProjectDetail;