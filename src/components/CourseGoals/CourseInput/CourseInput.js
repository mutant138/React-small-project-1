import React, { useState } from 'react';
import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    // Reset validity when the user starts typing
    const isValidInput = event.target.value.trim().length !== 0;
    console.log("isValidInput:", isValidInput);
    setIsValid(isValidInput);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return
    }
    // Pass the entered value to the parent component
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input type="text" style={{ backgroundColor : !isValid ? 'lightpink' : 'transparent',
      borderColor : !isValid ? "red":"black"}} onChange={goalInputChangeHandler} />
      </div>
      <Button 
        type="submit"
      >
        Add Goal
      </Button>
    </form>
  );
};

export default CourseInput;
