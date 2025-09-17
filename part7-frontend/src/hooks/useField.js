import { useState } from "react";

const useField = (type) => {
    const [value, setValue] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const field = {
        type,
        value,
        onChange,
    };
    return { field, value, setValue };
};

export default useField;
