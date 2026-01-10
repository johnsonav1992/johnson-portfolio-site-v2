'use client';

// Libraries
import Link from 'next/link';

// MUI
import { 
    Grid
    , Typography
    , useMediaQuery
} from '@mui/material';

// Types
import type { WorkItem } from '~/types/types';

// Theme
import theme from '~/theme/theme';

interface Props {
    project: WorkItem;
}

const WorkItemComponent = ( { project }: Props ) => {
    const isMdScreen = useMediaQuery( theme.breakpoints.down( 'md' ) );

    return (
        <Grid
            container
            component={Link}
            direction='column'
            alignItems='center'
            size={{ xs: 12, md: 6 }}
            sx={ {
                gap: '1rem'
                , '&:hover': {
                    cursor: 'pointer'
                }
                , textDecoration: 'none'
            } }
            href={ `/work/${ project.route }` }
        >
            <Grid
                container
                justifyContent='flex-start'
                sx={ {
                    width: isMdScreen ? '90%' : '30vw'
                } }
            >
                <Typography
                    variant='h6'
                    sx={ {
                        fontSize: 'clamp(1rem, -0.2857rem + 3.0476vw, 2rem)'
                    } }
                >
                    { project.name }
                </Typography>
            </Grid>
            <img
                src={ typeof project.imgSrc === 'string' ? project.imgSrc : (project.imgSrc as any).src }
                alt={ project.name }
                style={ {
                    width: isMdScreen ? '75vw' : '30vw'
                    , height: isMdScreen ? '50vw' : '20vw'
                    , objectFit: 'cover'
                    , objectPosition: project.objectPosition || 'center top'
                    , borderRadius: '0.5em'
                    // @ts-ignore
                    , boxShadow: theme.shadows[ 25 ]
                } }
            />
        </Grid>
    );
};

export default WorkItemComponent;