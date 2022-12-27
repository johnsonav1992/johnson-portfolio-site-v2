import { Button, Grid, Typography, useMediaQuery } from '@mui/material';
import { Link } from '@remix-run/react';

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
    } ;
} );



export default function Index () {
    const { classes } = useStyles();
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );
    
    return (
        <Grid 
            container
            className={ classes.outerContainer }
        >
            <Grid 
                item
                xs={ 12 }
                md={ 6 }
                sx={ isMdScreen ? { order: 2 } : undefined }
            >
                Hey
            </Grid>
            <Grid
                container 
                item
                direction='column'
                justifyContent='center'
                alignItems={ isMdScreen ? 'center' : undefined }
                spacing={ 2 }
                xs={ 12 }
                md={ 6 }
            >
                <Grid item>
                    <Typography variant='h2'>Alex Johnson</Typography>
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
