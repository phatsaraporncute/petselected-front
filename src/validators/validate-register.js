import Joi from 'joi'

const registerSchema = Joi.object({
    firstName: Joi.string().trim().required().messages({
        'string.empty': 'First name is required.'
    }),
    lastName: Joi.string().trim().required().messages({
        'string.empty': 'Last name is required.'
    }),
    email: Joi.string().email({ tlds: false }).messages({
        'string.email': 'Invalid email address.'
    }),
    password: Joi.string().pattern(/^[a-zA-z0-9]{6,30}$/).trim().required().messages({
        'string.empty': 'Password is required.',
        'string.pattern.base': 'Password must be at least 6 characters and contain only alphabet and number.'
    }),
    confirmPassword: Joi.string().valid(Joi.ref('password')).messages({
        'any.only': 'Password and confirm password did not match.',
        'string.empty': 'Confirm password is required.'
    }),
})

export default registerSchema
