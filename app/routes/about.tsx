import React from 'react';

//MUI
import { Grid, Typography } from '@mui/material';

// Assets
import aboutHeadshot from '../assets/about-page-headshot.jpg';

const AboutPage = () => {
    return (
        <Grid 
            container 
            spacing={ 3 }
        >
            <Grid item container justifyContent='center' xs={ 12 }
                lg={ 6 } sx={{ marginLeft: '3rem' }}>
                <Grid 
                    item 
                    container
                    direction='column'
                    alignItems='flex-start'
                    spacing={ 2 }
                >
                    <Grid item>
                        <Typography variant='h2'>
                        About Me
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='body1'>
                    I am a full-stack software developer and web application developer in the Dallas-Fort Worth Metroplex. I have a passion for creating software, web applications, and design work that give users the best, most streamlined and functional experience. My background and skills as a former teacher have given me the ability to work closely with clients and fully understand their needs while educating them on the design process in order to create for them the highest quality products. I have experience in many languages and development tools, including but not limited to: HTML, CSS, Javascript, Express, Node.js, React, MongoDB, PostgreSQL and more. If you would like to know more, please click on the button below to contact me:
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid 
                item
                xs={ 12 }
                lg={ 6 }
            >
                <img 
                    src={ aboutHeadshot } 
                    alt="Alex Johnson Headshot"
                    style={{ maxWidth: 100 }} 
                />
            </Grid>
        </Grid>
    );
};

export default AboutPage;