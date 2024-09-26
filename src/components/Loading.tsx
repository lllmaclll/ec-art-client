import { Backdrop, CircularProgress } from '@mui/material'

interface LoadingBackdropProps {
    loading: boolean;
}

function LoadingBackdrop(props: LoadingBackdropProps) {
    const { loading } = props
    return (
        <Backdrop open={loading} style={{ zIndex: 1300 }}>
            <CircularProgress color="primary" />
        </Backdrop>
    )
}

export default LoadingBackdrop