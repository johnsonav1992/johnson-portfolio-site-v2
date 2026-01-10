'use client';

// Libraries
import Link from 'next/link';

// MUI
import {
    Button
    , Typography
    , useMediaQuery
    , Box
} from '@mui/material';
import { Grid } from '@mui/material';

// Assets
import headshot from './assets/headshot-transparent-bg.png';

// Theme
import theme from '~/theme/theme';

export default function Page () {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid
            container
            component='main'
            spacing={ 4 }
            sx={ {
                minHeight: '90vh'
                , marginTop: '1rem'
            } }
        >
            <Grid
                container
                justifyContent={ isMdScreen ? 'center' : 'flex-end'}
                alignItems='flex-end'
                flexGrow={ 1 }
                size={{ xs: 12, md: 7 }}
                sx={ isMdScreen ? { order: 2 } : undefined }
            >
                <Box
                    component='img'
                    src={ typeof headshot === 'string' ? headshot : (headshot as any).src }
                    alt="Alex Johnson Headshot"
                    sx={ {
                        maxWidth: 500
                        , [ theme.breakpoints.down( 'md' ) ]: {
                            transform: 'translateX(-5%)'
                        }
                        , filter: 'drop-shadow( 0px 5px 12px rgba(0, 0, 0, 0.7))'
                    } }
                />
            </Grid>
            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems={ isMdScreen ? 'center' : undefined }
                spacing={ 2 }
                size={{ xs: 12, md: 5 }}
            >
                <Grid>
                    <Typography variant={ isMdScreen ? 'h3' : 'h2'}>
                        Alex Johnson
                    </Typography>
                </Grid>
                <Grid>
                    <Typography variant='h5'>
                        full-stack web developer
                    </Typography>
                </Grid>
                <Grid>
                    <Button
                        variant='contained'
                        color='primary'
                        component={Link}
                        href='/work'
                        sx={ {
                            textDecoration: 'none'
                            , color: 'inherit'
                        } }
                    >
                        View My Work
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
