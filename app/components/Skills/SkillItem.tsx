import React from 'react';

// MUI
import { 
    Grid
    , Typography 
} from '@mui/material';

// Types
import type { Skill } from '../../types/types';

// Styles

interface Props {
    skill: Skill
}

const SkillItem = ( { skill }: Props ) => {
    return (
        <Grid 
            container
            direction='column'
            alignItems='center'
            justifyContent='center'
            item
            xs={ 6 }
            sm={ 4 }
            md={ 3 }
            sx={ { padding: '1rem 0 1rem' } }
        >
            <Grid item>
                <img
                    src={ skill.iconSrc } 
                    alt={ skill.name }
                    style={ { 
                        height: '5rem'
                        , filter: 'drop-shadow( 0px 5px 12px rgba(0, 0, 0, 0.7))'
                    } }
                />
            </Grid>
            <Grid item>
                <Typography variant='body2'>
                    { skill.name }
                </Typography>
            </Grid>
        </Grid>

    );
};

export default SkillItem;