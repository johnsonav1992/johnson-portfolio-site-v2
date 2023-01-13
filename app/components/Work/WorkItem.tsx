import React from 'react';

// MUI
import { 
    Grid
    , Typography
    , Avatar
} from '@mui/material';

const WorkItem = () => {
    return (
        <Grid 
            item
            container
            direction='column'
            spacing={ 2 }
            xs={ 12 }
        >
            <Grid item>
                <Typography variant='h5'>
                    TEST ITEM
                </Typography>
            </Grid>
            <Avatar src='https://www.alexvjohnson.com/images/cocktail-central-screenshot.png'/>
        </Grid>
    );
};

export default WorkItem;