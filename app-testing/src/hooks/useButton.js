import React, { useState } from 'react';

export const useButton = () => {
    const [value, setValue] = useState(0);

    const handleChanges = e => {
        e.preventDefault();
        setValue(value + 1)
    }

    return [value, handleChanges, setValue];
};