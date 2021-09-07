import React from 'react'
import PropTypes from 'prop-types'

const Input = ({success,secretWord}) => {

    if (success) 
    { return <div data-test='component-input' /> }

    const [guess, setGuess] = React.useState("");

    return (
        <div data-test='component-input'>
            <form className="form-inline">
                <input data-test="input-box" className='mb-2 mx-sm-3' 
                type="text" placeholder="enter guess" value={guess} 
                 onChange={(event) => setGuess(event.target.value)}   
                />
                <button data-test='submit-button' className='btn btn-primary mb-2' 
                onClick={ (event)=> 
                 { event.preventDefault();
                setGuess("")} }
                >Submit</button>
            </form> 
                
          
        </div>
    )
}

Input.propTypes = {
    secretWord: PropTypes.string.isRequired,
}

export default Input
