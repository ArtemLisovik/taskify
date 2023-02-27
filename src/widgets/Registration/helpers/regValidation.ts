import * as yup from 'yup'

export const schema = yup.object().shape({
    name: yup.string().required().min(3, "Name shouldn't be shorter then 3 symbols"),
    profession: yup.string().required().min(2, "Profession shouldn't be shorter then 2 symbols "),
    email: yup.string().required().email(),
    password: yup.string().required().min(5, "Password should't be shorter then 5 symbols")
})