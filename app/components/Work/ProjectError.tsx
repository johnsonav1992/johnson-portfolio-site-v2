// Libraries
import { Link } from '@remix-run/react';

// MUI
import { 
    Grid
    , Typography
    , Button
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ProjectError = () => {
    return (
        <Grid 
            container 
            direction='column'
            alignItems='center' 
            sx={ { 
                height: '90vh'
                , mt: '2rem' 
                , gap: '1rem'
            } }>
            <Typography variant='body1'>
                This project does not exist, please go back and try again
            </Typography>
            <Button 
                component={Link} 
                variant='contained' 
                color='error'
                to='/work'
                startIcon={<ArrowBackIcon />}
            >
                Back
            </Button>
        </Grid>
    );
};

export default ProjectError;