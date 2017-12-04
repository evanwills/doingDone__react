import {Model} from 'redux-orm';
import getEnv from 'get-env';



export const TimePropType = function(props, propName, componentName) {
	var notString = false
		receivedMsg = '';
	if (typeof props[propName] !== 'string') {
		notString = true;
		receivedMsg = typeof props[propName];
	} else {
		receivedMsg = props[propName];
	}
	if (notString || !/^([01][0-9]|2[0-3]):[0-5][0-9]$/.test(props[propName])) {
		return new Error(
			'Invalid prop `' + propName + '` supplied to' +
			' `' + componentName + '`. Validation failed. Expected a time of day string (HH:MM, e.g. "09:45"). Receied "' +
			receivedMsg + '" instead!'
		);
	}
}
export const TimePropTypeNotRequired = function(props, propName, componentName) {
	var typeOfProp = typeof props[propName];
	if (typeOfProp !== 'undefined' && typeOfProp !== null) {
		if (typeOfProp !== 'string' || props[propName] !== '') {
			return TimePropType(props, propName, componentName);
		}
	}
}

// ========================================================
// The following code is taken from 
// https://gist.github.com/tommikaikkonen/45d0d2ff2a5a383bb14d

const env = getEnv();

export class ValidatingModel extends Model {
    static _validateProps(props) {
        if (typeof this.propTypes === 'object') {
            forOwn(this.propTypes, (validator, key) => {
                const result = validator(props, key, this.modelName);
                if (result instanceof Error) {
                    throw result;
                }
            });
        }
    }

    static create(props) {
        const defaults = this.hasOwnProperty('defaultProps')
            ? this.defaultProps
            : {};
        const propsWithDefaults = Object.assign({}, defaults, props);

        if (env !== 'prod') {
            this._validateProps(propsWithDefaults);
        }

        return super.create(propsWithDefaults);
    }
};
