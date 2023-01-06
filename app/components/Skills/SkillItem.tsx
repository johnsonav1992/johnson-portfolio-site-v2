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
            item

        >
            <Grid item>
                <img 
                    src={ skill.iconSrc } 
                    alt={ skill.name }
                    style={{ height: '5rem' }}
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