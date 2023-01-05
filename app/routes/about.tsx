import React from 'react';

//MUI
import { Button
    , Grid
    , Typography
} from '@mui/material';

// Assets
import aboutHeadshot from '../assets/about-page-headshot.jpg';
import theme from '~/theme/theme';

// Data
import { aboutText } from '~/data/text';

const AboutPage = () => {
    return (
        <Grid 
            container 
            justifyContent='center'
            spacing={ 3 }
            sx={ { 
                padding: '2rem'
                , minHeight: '90vh'
                , gap: '5rem'
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
                    alignItems='flex-start'
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
                    <Grid 
                        item
                        sx={{ width: '40%' }}
                    >
                        <Button 
                            variant='contained'
                            fullWidth
                        >
                            Contact me
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                item
                container
                justifyContent='center'
                alignItems='center'
                xs={ 12 }
                lg={ 4 }
            >
                <img 
                    src={ aboutHeadshot } 
                    alt="Alex Johnson Headshot"
                    style={{ 
                        maxWidth: '100%'
                        //@ts-ignore
                        , boxShadow: theme.shadows[ 25 ]
                        , borderRadius: '.5em'
                    }} 
                />
            </Grid>
        </Grid>
    );
};

export default AboutPage;