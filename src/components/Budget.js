import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const MAX_BUDGET = 20000; // Define el presupuesto máximo
    const totalExpenses = expenses.reduce((total, item) => total + item.cost, 0); // Suma total de las compras
    
    const handleBudgetChange = (event) => {
        const updatedBudget = parseInt(event.target.value, 10);

        if (updatedBudget > MAX_BUDGET) {
            alert(`The budget cannot exceed £${MAX_BUDGET}`);
            setNewBudget(MAX_BUDGET);
            dispatch({
                type: 'SET_BUDGET',
                payload: MAX_BUDGET,
            });
        } else if (updatedBudget < totalExpenses) {
            alert(`The budget cannot be less than the total expenses of £${totalExpenses}`);
            setNewBudget(totalExpenses);
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses,
            });
        } else {
            setNewBudget(updatedBudget);
            dispatch({
                type: 'SET_BUDGET',
                payload: updatedBudget,
            });
        }
    };

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input
                type="number"
                step="10"
                value={newBudget}
                onChange={handleBudgetChange}
            ></input>
        </div>
    );
};

export default Budget;
