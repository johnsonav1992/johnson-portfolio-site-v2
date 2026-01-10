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
import headshot from '../assets/headshot-transparent-bg.png';

// Theme
import theme from '~/theme/theme';

export default function Page () {
    const isLgScreen = useMediaQuery( theme.breakpoints.down( 'lg' ) );

    return (
        <Grid
            container
            component='main'
            spacing={ 2 }
            sx={ {
                minHeight: '90vh'
                , paddingX: { xs: '1rem', md: '2rem' }
                , paddingTop: '2rem'
            } }
        >
            <Grid
                container
                justifyContent={ isLgScreen ? 'center' : 'flex-end'}
                alignItems='flex-end'
                flexGrow={ 1 }
                size={{ xs: 12, lg: 7 }}
                sx={ isLgScreen ? { order: 2 } : undefined }
            >
                <Box
                    component='img'
                    src={ typeof headshot === 'string' ? headshot : (headshot as any).src }
                    alt="Alex Johnson Headshot"
                    sx={ {
                        width: '100%'
                        , maxWidth: {
                            xs: '90vw'
                            , sm: '80vw'
                            , md: '60vw'
                            , lg: '50vw'
                            , xl: '800px'
                        }
                        , height: 'auto'
                        , objectFit: 'contain'
                        , filter: 'drop-shadow( 0px 5px 12px rgba(0, 0, 0, 0.7))'
                    } }
                />
            </Grid>
            <Grid
                container
                direction='column'
                justifyContent='center'
                alignItems={ isLgScreen ? 'center' : undefined }
                spacing={{ xs: 0.5, md: 1.5, lg: 2 }}
                size={{ xs: 12, lg: 5 }}
            >
                <Grid>
                    <Typography variant={ isLgScreen ? 'h3' : 'h2'}>
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
