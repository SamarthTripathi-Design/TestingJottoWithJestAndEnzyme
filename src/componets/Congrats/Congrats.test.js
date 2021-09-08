import Congrats from './Congrats'
import {checkProps, findByTestAttr} from '../../../test/testUtils';
import  { shallow } from 'enzyme';

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @returns {ShallowWrapper}
 */
const defaultProps = { success:false }
const setup = (props) => {
    const setupProps = {...defaultProps,...props}
    return shallow(<Congrats {...setupProps} />)
}

test('test renders without error',() =>{
const wrapper = setup({success:false});
const component =  findByTestAttr(wrapper, 'component-congrats')
expect(component.length).toBe(1);
});

test('renders no text when success prop is false',()=>{
    const wrapper = setup({success:false});
    const component = findByTestAttr(wrapper,'component-congrats')
    expect(component.text()).toBe("")

})

test('renders non-empty congrats message when success prop is true',()=>{
    const wrapper = setup({success:true});
    const messgae = findByTestAttr(wrapper,'congrats-message');
    expect(messgae.text().length).not.toBe(0);
})

test('does not throw warning with expected props',() =>{
    const expectedProps = {success: true};
    // const propError = checkPropTypes(Congrats.protoTypes,expectedProps,'prop', Congrats.name);
    // expect(propError).toBeUndefined();
    checkProps(Congrats,expectedProps);

})