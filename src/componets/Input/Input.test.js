import React from 'react';
import { shallow } from 'enzyme';

import { checkProps, findByTestAttr} from '../../../test/testUtils';
import Input from './Input';

const setup = (secretWord ='Party') =>{
    return shallow(<Input  secretWord={secretWord}/>)
}

test('Input renders without error',() =>{
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input');
    expect(inputComponent.length).toBe(1)
})

test('does not throw warning with expected props',() =>{
    checkProps(Input, { secretWord: "Party" });
})

describe("state controlled input field",()=>{
    test("state updates with value of input box upon change",()=>{
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(()=>["",mockSetCurrentGuess])

        const wrapper = setup();
        const inputBox = findByTestAttr(wrapper,'input-box')

        const mockEvent = { target:{value:'train'}};
        inputBox.simulate("change",mockEvent);

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
    })

    test("state updates with value of input box upon change",()=>{
        const mockSetCurrentGuess = jest.fn();
        React.useState = jest.fn(()=>["",mockSetCurrentGuess])

        const wrapper = setup();
        const submitBtn = findByTestAttr(wrapper,'submit-button')

        
        submitBtn.simulate("click",{ preventDefault(){}});

        expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
    })
})