"use client"
import { Button } from "@mui/material"
import { useRouter } from "next/navigation"

export default function Error() {
    const router = useRouter();

    // const handleErrorRedirect

    return (
        <>
            <Button onClick={() => router.push('/home')}>
                Tente novamente
            </Button>
        </>
    )
}