import { useReducer } from 'react'

const initialInputState = {
    inputValue: '',
    isTouched: false
}

const inputStateReducer = (state, action) => {
    if(action.type === 'SET_VALUE') {
        return {
            ...state,
            inputValue: action.value
        }
    }
    if(action.type === 'WAS_TOUCHED'){
        return {
            ...state,
            isTouched: true
        }
    }
    if(action.type === 'RESET'){
        return initialInputState
    }
    return initialInputState
}

const useInput = (validateInput) => {
    const [inputState, dispatch] = useReducer(inputStateReducer, initialInputState)

    const valueIsValid = validateInput(inputState.inputValue)
    const hasError = !valueIsValid && inputState.isTouched

    const inputChangeHandler = event => {
        dispatch({
            type: 'SET_VALUE',
            value: event.target.value
        })
    }

    const inputBlurHandler = () => {
        dispatch({
            type: 'WAS_TOUCHED',
        })
    }

    const reset = () => {
        dispatch({
            type: 'RESET'
        })
    }

    return {
        value: inputState.inputValue,
        hasError,
        isValid: valueIsValid,
        inputBlurHandler,
        inputChangeHandler,
        reset
    }
}

export default useInput