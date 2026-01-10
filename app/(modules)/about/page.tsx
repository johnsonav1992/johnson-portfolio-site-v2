'use client';

import React from 'react';

// Libraries
import Link from 'next/link';

// MUI
import {
    Button
    , Typography
    , useMediaQuery
} from '@mui/material';
import { Grid } from '@mui/material';

// Assets
import aboutHeadshot from '../../assets/about-page-headshot.jpg';

// Data
import { aboutText } from '~/data/text';

// Theme
import theme from '~/theme/theme';

export default function Page () {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid
            container
            justifyContent='center'
            direction={ isMdScreen ? 'column' : 'row' }
            spacing={ 3 }
            sx={ {
                padding: '2rem'
                , minHeight: '90vh'
                , gap: isMdScreen ? '1rem' : '2rem'
            } }
        >
            <Grid
                container
                justifyContent='center'
                size={{ xs: 12, lg: 5 }}
            >
                <Grid
                    container
                    direction='column'
                    alignItems={ isMdScreen ? 'center' : 'flex-start' }
                    justifyContent='center'
                    spacing={ 2 }
                >
                    <Grid>
                        <Typography variant='h3'>
                        About Me
                        </Typography>
                    </Grid>
                    <Grid>
                        <Typography variant='body1'>
                            { aboutText }
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button
                            variant='contained'
                            component={Link}
                            href='/contact'
                            sx={ { width: '9rem' } }
                        >
                            Contact Me
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                justifyContent='center'
                alignItems='center'
                size={{ xs: 10, lg: 5 }}
            >
                <img
                    src={ typeof aboutHeadshot === 'string' ? aboutHeadshot : (aboutHeadshot as any).src }
                    alt="Alex Johnson Headshot"
                    style={ {
                        maxWidth: '70%'
                        //@ts-ignore
                        , boxShadow: theme.shadows[ 25 ]
                        , borderRadius: '.5em'
                    } }
                />
            </Grid>
        </Grid>
    );
}
