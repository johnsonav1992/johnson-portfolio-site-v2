import React, { useContext } from 'react';

// MUI
import { 
    IconButton
    , Snackbar 
} from '@mui/material';
import { Close } from '@mui/icons-material';

// Theme
import theme from '~/theme/theme';
import { siteContext } from '~/context/context';

const SnackAlert = () => {
    const {
        snackbarOpen
        , setSnackbarOpen
        , alert
    } = useContext( siteContext );

    const handleSnackClose = () => {
        setSnackbarOpen( false );
    };

    return (
        <Snackbar 
            open={ snackbarOpen }
            onClose={ handleSnackClose }
            message={ alert?.message }
            action={ 
                <IconButton
                    size="small"
                    color="inherit"
                    onClick={ handleSnackClose }
                >
                    <Close fontSize="small" />
                </IconButton> 
            }
            autoHideDuration={ 3000 }
            ContentProps={ 
                { 
                    sx: { 
                        backgroundColor: 
                        alert?.type === 'success' 
                            ? theme.palette.success.main 
                            : theme.palette.error.main
                        , color: theme.palette.common.white 
                    } 
                } 
            }
            anchorOrigin={ {
                vertical: 'top'
                , horizontal: 'center'
            } }
        />
    );
};

export default SnackAlert;