import React, { useContext, useState} from 'react';
import { AppContext } from '../context/AppContext';
const Currency = (props) => {
    const [ currency,setCurrency ] = useState('');
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (val) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: val,
        });
        setCurrency(val);
        return;
    };

    return (
	<div className='alert alert-success'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#D1E7DD', color:'black'}} >Currency
            <select name='hover_color'
                id="currency" 
                onChange={(event)=>changeCurrency(event.target.value)}
                style={{ marginLeft: '1rem' , backgroundColor:'#D1E7DD', color:'black'}}>
                <option style={{color:'black'}} defaultValue={currency} value="£">£ Pound</option>
                <option style={{color:'black'}} value="$">$ Dollar</option>
                <option style={{color:'black'}} value="€">€ Euro</option>
                <option style={{color:'black'}} value="₹">₹ Rupee</option>
            </select>	
        </label>
    </div>
	);
};

export default Currency;