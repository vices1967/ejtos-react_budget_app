import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);

    const changeCurrency = (selectedCurrency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedCurrency,
        });
    };

    const getCurrencyLabel = (currencyCode) => {
        switch (currencyCode) {
            case '$':
                return 'Currency ($ Dollar)';
            case '£':
                return 'Currency (£ Pound)';
            case '€':
                return 'Currency (€ Euro)';
            case '₹':
                return 'Currency (₹ Ruppie)';
            default:
                return 'Currency';
        }
    };

    return (
        <DropdownButton
    id="currency-dropdown"
    title={getCurrencyLabel(currency)}
    variant="success"
    style={{
        background: '#39ff14',
        color: 'black',
        fontWeight: 'bold',
        border: '1px solid #39ff14',
        width: '50%',
    }}
>
            <Dropdown.Item
                onClick={() => changeCurrency('$')}
                active={currency === '$'}
                style={{ backgroundColor: currency === '$' ? 'white' : '#39ff14', color: 'black' }} // Fondo y texto para el menú desplegable
            >
                $ Dollar
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => changeCurrency('£')}
                active={currency === '£'}
                style={{ backgroundColor: currency === '£' ? 'white' : '#39ff14', color: 'black' }} // Fondo y texto para el menú desplegable
            >
                £ Pound
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => changeCurrency('€')}
                active={currency === '€'}
                style={{ backgroundColor: currency === '€' ? 'white' : '#39ff14', color: 'black' }} // Fondo y texto para el menú desplegable
            >
                € Euro
            </Dropdown.Item>
            <Dropdown.Item
                onClick={() => changeCurrency('₹')}
                active={currency === '₹'}
                style={{ backgroundColor: currency === '₹' ? 'white' : '#39ff14', color: 'black' }} // Fondo y texto para el menú desplegable
            >
                ₹ Ruppie
            </Dropdown.Item>
        </DropdownButton>
    );
};

export default Currency;
