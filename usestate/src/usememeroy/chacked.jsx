import React, { useState } from 'react';

function CheckboxExample() {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
            {isChecked ? (
                <p>You have clicked!</p>
            ) : (
                <p>You haven't clicked yet.</p>
            )}
        </div>
    );
}

export default CheckboxExample;
