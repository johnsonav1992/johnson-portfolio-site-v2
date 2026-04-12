'use client';

// Libraries
import Image from 'next/image';
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
                , gap: isMdScreen ? '3rem' : '2rem'
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
                size={{ xs: 12, lg: 5 }}
            >
                <Image
                    src={ aboutHeadshot }
                    alt='Alex Johnson Headshot'
                    style={ {
                        maxWidth: '70%'
                        , height: 'auto'
                        , boxShadow: theme.shadows[ 24 ]
                        , borderRadius: '.5em'
                    } }
                />
            </Grid>
        </Grid>
    );
}
