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

export const checkProps = (component, confirmingProps) => {
    const propError = checkPropTypes(
        component.proptypes,
        confirmingProps,
        'prop',
        component.name);
        expect(propError).toBeUndefined();
    }

