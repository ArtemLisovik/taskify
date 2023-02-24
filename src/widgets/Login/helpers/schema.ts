import * as yup from 'yup'

export const schema = yup.object().shape({
    email: yup.string().email().required('Incorrect email!'),
    password: yup.string().required('Incorrect password').min(6, 'Password cannot be less then 6 elements!')
})
