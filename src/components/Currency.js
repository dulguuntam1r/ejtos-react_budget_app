import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Currency = () => {
    const { currency } = useContext(AppContext);
    return (
	<div className='alert alert-success'>
        <label style={{marginLeft: '1rem' , backgroundColor:'#D1E7DD', color:'black'}} >Currency
            <select name='hover_color'id="currency" onChange={(event)=>changeCurrency(event.target.value)} style={{ marginLeft: '1rem' , backgroundColor:'#D1E7DD', color:'black'}}>
                <option style={{color:'black'}} value="£">£ Pound</option>
                <option style={{color:'black'}} value="$">$ Dollar</option>
                <option style={{color:'black'}} value="€">€ Euro</option>
                <option style={{color:'black'}} value="₹">₹ Rupee</option>
            </select>	
        </label>
    </div>
	);
};

export default Currency;