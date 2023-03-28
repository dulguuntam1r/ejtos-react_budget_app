import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {




    const { budget } = useContext(AppContext);
    return (
        <div className='alert alert-secondary'>
            <span>Budget: £</span>
            <input type='number' 
            value={budget}
            min={}
            max='20000'
            />
        </div>
    );
};
export default Budget;