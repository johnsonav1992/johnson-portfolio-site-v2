'use client';

// Libraries
import Link from 'next/link';

// MUI
import { 
    Button
    , Grid
    , Typography
    , useMediaQuery 
} from '@mui/material';

// Assets
import headshot from './assets/headshot-transparent-bg.png';

// Theme
import theme from '~/theme/theme';

// Styles
import { makeStyles } from 'tss-react/mui';
import Image from 'next/image';

const useStyles = makeStyles()( ( theme ) => {
    return  {
        outerContainer: {
            minHeight: '90vh'
            , marginTop: '1rem'
        }
        , link: { 
            textDecoration: 'none'
            , color:'inherit' 
        }
        , headshot: {
            maxWidth: 500
            , [ theme.breakpoints.down( 'xs' ) ]: {
                maxWidth: 300
            }
            , [ theme.breakpoints.down( 'md' ) ]: {
                transform: 'translateX(-5%)'
            }
            , filter: 'drop-shadow( 0px 5px 12px rgba(0, 0, 0, 0.7))'
        }
    } ;
} );

export default function Page () {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );
    const { classes } = useStyles();
    
    return (
        <Grid 
            container
            component='main'
            spacing={ 4 }
            className={ classes.outerContainer }
        >
            <Grid
                container 
                item
                justifyContent={ isMdScreen ? 'center' : 'flex-end'}
                alignItems='flex-end'
                flexGrow={ 1 }
                xs={ 12 }
                md={ 7 }
                sx={ isMdScreen ? { order: 2 } : undefined }
            >
                <img 
                    src={ typeof headshot === 'string' ? headshot : (headshot as any).src } 
                    alt="Alex Johnson Headshot"
                    className={ classes.headshot } 
                />
            </Grid>
            <Grid
                container 
                item
                direction='column'
                justifyContent='center'
                alignItems={ isMdScreen ? 'center' : undefined }
                spacing={ 2 }
                xs={ 12 }
                md={ 5 }
            >
                <Grid item>
                    <Typography variant={ isMdScreen ? 'h3' : 'h2'}>
                        Alex Johnson
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5'>
                        full-stack web developer
                    </Typography>
                </Grid>
                <Grid item>
                    <Button 
                        variant='contained' 
                        color='primary'
                    >
                        <Link 
                            href='/work' 
                            className={ classes.link }
                        >
                            View My Work
                        </Link>    
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    );
}
