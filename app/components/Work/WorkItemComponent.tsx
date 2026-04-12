'use client';

// Libraries
import Image from 'next/image';
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
            size={{ xs: 12, md: 6 }}
            sx={ {
                gap: '1rem'
                , textDecoration: 'none'
                , transition: 'transform 0.2s ease'
                , '&:hover': {
                    cursor: 'pointer'
                    , transform: 'translateY(-2px)'
                }
            } }
            href={ `/work/${ project.route }` }
        >
            <Grid
                sx={ {
                    width: '100%'
                    , height: isMdScreen ? '50vw' : '20vw'
                    , position: 'relative'
                    , display: 'flex'
                    , alignItems: 'center'
                    , justifyContent: 'center'
                    , overflow: 'hidden'
                    , borderRadius: '0.75rem'
                    , backgroundColor: 'rgba(255, 255, 255, 0.05)'
                    // @ts-ignore
                    , boxShadow: theme.shadows[ 25 ]
                    , transition: 'box-shadow 0.3s ease'
                    , '&:hover': {
                        // @ts-ignore
                        boxShadow: theme.shadows[ 30 ]
                    }
                } }
            >
                <Image
                    src={ project.imgSrc }
                    alt={ project.name }
                    fill
                    sizes={ isMdScreen ? '100vw' : '50vw' }
                    style={ {
                        objectFit: 'cover'
                        , objectPosition: project.objectPosition ?? 'center top'
                        , transition: 'transform 0.3s ease'
                    } }
                />
            </Grid>
            <Grid
                container
                justifyContent='flex-start'
                sx={ {
                    width: '100%'
                    , px: '0.5rem'
                } }
            >
                <Typography
                    variant='h6'
                    sx={ {
                        fontSize: isMdScreen ? '1.25rem' : '1.5rem'
                        , fontWeight: 500
                    } }
                >
                    { project.name }
                </Typography>
            </Grid>
        </Grid>
    );
};

export default WorkItemComponent;
