// MUI
import { 
    IconButton
    , Snackbar 
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Contexts
import { useSiteContext } from '~/context/context';

const SnackAlert = () => {
    const {
        snackbarOpen
        , setSnackbarOpen
        , alert
    } = useSiteContext();

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
                    <CloseIcon fontSize="small" />
                </IconButton> 
            }
            autoHideDuration={ 3000 }
            ContentProps={ 
                { 
                    sx: { 
                        backgroundColor: ( theme ) =>
                            alert?.type === 'success' 
                                ? theme.palette.success.main 
                                : theme.palette.error.main
                        , color: ( theme ) => theme.palette.common.white 
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