'use client';

import React from 'react';

// MUI
import {
    Typography
    , useMediaQuery
} from '@mui/material';
import { Grid } from '@mui/material';

// Components
import SkillItem from '~/components/Skills/SkillItem';

// Data
import { skills } from '~/data/skills';

// Types
import type { Skill } from '~/types/types';

// Theme
import theme from '~/theme/theme';

export default function Page () {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid
            container
            direction='column'
            alignItems='center'
            component='main'
            sx={ { padding: '2rem' } }
        >
            <Grid>
                <Typography variant='h3'>
                    Skills
                </Typography>
            </Grid>
            <Grid
                container
                sx={ {
                    width: isMdScreen ? '100%' : '75%'
                    , marginTop: '1rem'
                } }
            >
                { skills.map( ( skill: Skill ) => {
                    return <SkillItem
                        key={ skill.id }
                        skill={ skill }
                    />;
                } )}
            </Grid>
        </Grid>
    );
}
