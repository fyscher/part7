import { useState } from "react";

export const useField = (type) =>
{
    const [value, setValue] = useState('')

    const onChange = (e) =>
    {
        setValue(e.target.value)
        console.log(`${type}: `, e.target.value)
    }

    const input =
    {
        type,
        value,
        onChange
    }

    const reset = () =>
    {
        setValue('')
    }
    
    return{
        input,
        reset
    }
}
