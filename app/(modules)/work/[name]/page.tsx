'use client';

import React from 'react';

// Libraries
import { useParams } from 'next/navigation';
import Link from 'next/link';

// MUI
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ExternalLink from '@mui/material/Link';
import {
    Button
    , Paper
    , Typography
    , useMediaQuery
} from '@mui/material';
import { Grid } from '@mui/material';

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

export default function Page () {
    const params = useParams();
    const projectRoute = params.name as string;
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
            sx={ {
                minHeight: '90vh'
                , padding: isMdScreen ? '1.5rem' : '2rem 3rem'
            } }
        >
            <Grid
                container
                sx={ {
                    marginBottom: '2rem'
                } }
            >
                <Button
                    component={Link}
                    variant='text'
                    color='inherit'
                    href='/work'
                    startIcon={<ArrowBackIcon />}
                    sx={ {
                        fontSize: '1rem'
                        , '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.1)'
                        }
                    } }
                >
                    Back to Work
                </Button>
            </Grid>

            <Grid
                container
                direction={ isMdScreen ? 'column' : 'row' }
                sx={ {
                    gap: isMdScreen ? '2rem' : '4rem'
                    , maxWidth: '1400px'
                    , margin: '0 auto'
                    , width: '100%'
                } }
            >
                <Grid
                    container
                    direction='column'
                    size={{ xs: 12, md: 5 }}
                    sx={ {
                        gap: '2rem'
                    } }
                >
                    <Grid>
                        <Typography
                            variant={ isMdScreen ? 'h3' : 'h2' }
                            sx={ {
                                fontWeight: 600
                                , marginBottom: '1rem'
                            } }
                        >
                            { project.name }
                        </Typography>
                        <Typography
                            variant='body1'
                            sx={ {
                                lineHeight: 1.8
                                , fontSize: '1.05rem'
                                , color: 'rgba(255, 255, 255, 0.9)'
                            } }
                        >
                            { project.description }
                        </Typography>
                    </Grid>

                    <Grid>
                        <Typography
                            variant='h6'
                            sx={ {
                                fontWeight: 500
                                , marginBottom: '1rem'
                            } }
                        >
                            Technologies
                        </Typography>
                        <Grid
                            container
                            sx={ {
                                gap: '0.75rem'
                                , flexWrap: 'wrap'
                            } }
                        >
                            {
                                project.technologies.map( ( tech, index ) => (
                                    <Grid
                                        key={ index }
                                        sx={ {
                                            padding: '0.5rem 1rem'
                                            , backgroundColor: 'rgba(255, 255, 255, 0.1)'
                                            , borderRadius: '0.5rem'
                                            , border: '1px solid rgba(255, 255, 255, 0.2)'
                                        } }
                                    >
                                        <Typography
                                            variant='body2'
                                            sx={ {
                                                fontWeight: 500
                                            } }
                                        >
                                            { tech }
                                        </Typography>
                                    </Grid>
                                ) )
                            }
                        </Grid>
                    </Grid>

                    <Grid
                        container
                        direction={ isMdScreen ? 'column' : 'row' }
                        sx={ {
                            gap: '1rem'
                            , marginTop: '1rem'
                        } }
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
                                    sx={ {
                                        padding: '0.75rem 1.5rem'
                                        , fontSize: '1rem'
                                    } }
                                >
                                    View Live Project
                                </Button>
                            )
                        }
                        {
                            project.repoLink
                            &&
                            (
                                <Button
                                    component={ ExternalLink }
                                    variant='outlined'
                                    color='inherit'
                                    href={ project.repoLink }
                                    target='_blank'
                                    startIcon={<GitHubIcon />}
                                    endIcon={<OpenInNewIcon />}
                                    sx={ {
                                        padding: '0.75rem 1.5rem'
                                        , fontSize: '1rem'
                                        , borderColor: 'rgba(255, 255, 255, 0.3)'
                                        , '&:hover': {
                                            borderColor: 'rgba(255, 255, 255, 0.5)'
                                            , backgroundColor: 'rgba(255, 255, 255, 0.05)'
                                        }
                                    } }
                                >
                                    View Repository
                                </Button>
                            )
                        }
                    </Grid>
                </Grid>

                <Grid
                    size={{ xs: 12, md: 6 }}
                    sx={ {
                        display: 'flex'
                        , alignItems: 'flex-start'
                    } }
                >
                    <Grid
                        sx={ {
                            width: '100%'
                            , borderRadius: '0.75rem'
                            , overflow: 'hidden'
                            // @ts-ignore
                            , boxShadow: theme.shadows[ 25 ]
                        } }
                    >
                        <img
                            src={ typeof project.imgSrc === 'string' ? project.imgSrc : (project.imgSrc as any).src }
                            alt={ project.name }
                            style={ {
                                width: '100%'
                                , height: 'auto'
                                , display: 'block'
                            } }
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}
