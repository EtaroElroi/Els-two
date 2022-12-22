
import { useEffect } from 'react'

export function Message({ textprops }) {

    useEffect(() => {

    }, [{ textprops }])
    return (
        <>
            <h1> Message Component</h1>
            <h1>Props message: {textprops}</h1>
        </>
    )
}