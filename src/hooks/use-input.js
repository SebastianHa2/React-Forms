import { useState } from 'react'

const useInput = (validateInput) => {
    const [inputValue, setInputValue] = useState('')
    const [isTouched, setIsTouched] = useState(false)

    const valueIsValid = validateInput(inputValue)
    const hasError = !valueIsValid && isTouched

    const inputChangeHandler = event => {
        setInputValue(event.target.value)
    }

    const inputBlurHandler = () => {
        setIsTouched(true)
    }

    const reset = () => {
        setInputValue('')
        setIsTouched(false)
    }

    return {
        value: inputValue,
        hasError,
        isValid: valueIsValid,
        inputBlurHandler,
        inputChangeHandler,
        reset
    }
}

export default useInput