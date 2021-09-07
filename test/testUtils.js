import React from 'react'
import checkPropTypes from 'check-prop-types';
/**
 * Return ShallowWrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper to search within.
 * @param {string} val - Value of data-test c1scoL0ve!
 *
 */
 export const findByTestAttr = (wrapper,val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

   /**
 * Throw error if conformingProps do not pass propTypes validation.
 * @param {React.Component} component - Component to check props against.
 * @param {object} conformingProps - Props we expect to conform to defined propTypes.
 */
export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        confirmingProps,
        'prop',
        component.name);
        expect(propError).toBeUndefined();
    }


  