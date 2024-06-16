
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const {currency, dispatch } = useContext(AppContext);

    const changeLocation = (val)=>{
            dispatch({
                type: 'CHG_CURRENCY',
                payload: val,
            })
    }
    

  return (
        <div className='alert alert-success'> Currency {
      <select className='' name="currency" id="currency" value={currency} onChange={event=>changeLocation(event.target.value)}>
        <option value="$">($ Dollar)</option>
        <option value="£">(£ Pound)</option>
        <option value="€">(€ Euro)</option>
        <option value="₹">(₹ Ruppie)</option>
        
        
      </select>	
      }	
    </div>
    );
};

export default Currency;