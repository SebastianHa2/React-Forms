import useInput from '../hooks/use-input'

const BasicForm = (props) => {
  // Name input validation
  const {
    value: nameInputValue,
    hasError: nameInputValueHasError,
    isValid: nameInputIsValid,
    inputBlurHandler: nameInputBlurHandler,
    inputChangeHandler: nameInputChangeHandler,
    reset: nameInputReset
  } = useInput(value => value.trim() !== '')

  const nameInputClasses = nameInputValueHasError ? 'form-control invalid' : 'form-control'

  // Last name input validation
  const {
    value: lastNameInputValue,
    hasError: lastNameInputValueHasError,
    isValid: lastNameInputIsValid,
    inputBlurHandler: lastNameInputBlurHandler,
    inputChangeHandler: lastNameInputChangeHandler,
    reset: lastNameInputReset
  } = useInput(value => value.trim() !== '')

  const lastNameInputClasses = lastNameInputValueHasError ? 'form-control invalid' : 'form-control'

  // Email input validation
  const {
    value: emailInputValue,
    hasError: emailInputValueHasError,
    isValid: emailInputIsValid,
    inputBlurHandler: emailInputBlurHandler,
    inputChangeHandler: emailInputChangeHandler,
    reset: emailInputReset
  } = useInput(value => value.includes('@'))

  const emailInputClasses = emailInputValueHasError ? 'form-control invalid' : 'form-control'

  // Form is valid if
  const formIsValid = nameInputIsValid && lastNameInputIsValid && emailInputIsValid

  const formSubmitHandler = event => {
    event.preventDefault()

    nameInputReset()
    lastNameInputReset()
    emailInputReset()
  }





  return (
    <form onSubmit={formSubmitHandler}>
      <div className='control-group'>
        <div className={nameInputClasses}>
          <label htmlFor='name'>First Name</label>
          <input onBlur={nameInputBlurHandler} value={nameInputValue} onChange={nameInputChangeHandler} type='text' id='name' />
        </div>
        <div className={lastNameInputClasses}>
          <label htmlFor='name'>Last Name</label>
          <input  onBlur={lastNameInputBlurHandler} value={lastNameInputValue} onChange={lastNameInputChangeHandler} type='text' id='name' />
        </div>
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input  onBlur={emailInputBlurHandler} onChange={emailInputChangeHandler} value={emailInputValue} type='text' id='name' />
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
