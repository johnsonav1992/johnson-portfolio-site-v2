import Image from 'next/image';

// MUI
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';

// Types
import type { Skill } from '../../types/types';

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
            spacing={ 2 }
            size={{ xs: 6, sm: 4, md: 3 }}
            sx={ { p: '1rem 0 1rem' } }
        >
            <Grid>
                <Image
                    src={ skill.iconSrc }
                    alt={ skill.name }
                    width={ 80 }
                    height={ 80 }
                    style={ {
                        height: '5rem'
                        , width: 'auto'
                        , filter: 'drop-shadow( 0px 5px 12px rgba(0, 0, 0, 0.7))'
                    } }
                />
            </Grid>
            <Grid>
                <Typography variant='body2'>
                    { skill.name }
                </Typography>
            </Grid>
        </Grid>

    );
};

export default SkillItem;
