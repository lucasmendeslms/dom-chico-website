import Skeleton from "@mui/material/Skeleton"

export default function Loading() {
    return <Skeleton variant="rectangular" className="w-full h-full max-w-screen-md max-h-screen-md"  sx={{ bgcolor: 'red'}} />
}