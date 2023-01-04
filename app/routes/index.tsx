// Libraries
import { Link } from '@remix-run/react';

// MUI
import { 
    Button
    , Grid
    , Typography
    , useMediaQuery 
} from '@mui/material';

// Assets
import headshot from '../assets/headshot-transparent-bg.png';

// Styles
import { makeStyles } from 'tss-react/mui';
import theme from '~/theme/theme';

const useStyles = makeStyles()( ( theme ) => {
    return  {
        outerContainer: {
            minHeight: '100vh'
        }
        , link: { 
            textDecoration: 'none'
            , color:'inherit' 
        }
        , headshot: {
            maxWidth: '45vw'
            , [ theme.breakpoints.down( 'md' ) ]: {
                minWidth: '100%'
                , transform: 'translateX(-5%)'
            }
        }
    } ;
} );

export default function Index () {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );
    const { classes } = useStyles();
    
    return (
        <Grid 
            container
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
                    src={ headshot } 
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
                    <Typography variant={ isMdScreen ? 'h3' : 'h2'}>Alex Johnson</Typography>
                </Grid>
                <Grid item>
                    <Typography variant='h5'>full-stack web developer</Typography>
                </Grid>
                <Grid item>
                    <Button 
                        variant='contained' 
                        color='primary'
                    >
                        <Link 
                            to='/work' 
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
