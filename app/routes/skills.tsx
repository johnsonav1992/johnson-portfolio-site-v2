import React from 'react';

// MUI
import { 
    Grid
    , Typography
    , useMediaQuery 
} from '@mui/material';

// Components
import SkillItem from '~/components/Skills/SkillItem';

// Data
import { skills } from '~/data/skills';

// Types
import type { Skill } from '~/types/types';

// Styles
import theme from '~/theme/theme';

const SkillsPage = () => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid 
            container
            direction='column'
            alignItems='center'
            component='main'
            sx={{ paddingTop: '1rem' }}
        >
            <Grid item>
                <Typography variant='h3'>
                    Skills
                </Typography>
            </Grid>
            <Grid
                item 
                container
                sx={ { padding: isMdScreen ? 0 : '0 5rem 0 5rem' } }
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
};

export default SkillsPage;