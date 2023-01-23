import React from 'react';

// Libraries
import { Link } from '@remix-run/react';

//MUI
import { 
    Button
    , Grid
    , Typography
    , useMediaQuery
} from '@mui/material';

// Assets
import aboutHeadshot from '../assets/about-page-headshot.jpg';

// Data
import { aboutText } from '~/data/text';

// Styles
import theme from '~/theme/theme';

const AboutPage = () => {
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
                item 
                container 
                justifyContent='center' 
                xs={ 12 }
                lg={ 5 } 
            >
                <Grid 
                    item 
                    container
                    direction='column'
                    alignItems={ isMdScreen ? 'center' : 'flex-start' }
                    justifyContent='center'
                    spacing={ 2 }
                >
                    <Grid item>
                        <Typography variant='h3'>
                        About Me
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>
                            { aboutText }
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Button 
                            variant='contained'
                            component={Link}
                            to='/contact'
                            sx={ { width: '9rem' } }
                        >
                            Contact Me
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                item
                container
                justifyContent='center'
                alignItems='center'
                xs={ 10 }
                lg={ 5 }
            >
                <img 
                    src={ aboutHeadshot } 
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
};

export default AboutPage;