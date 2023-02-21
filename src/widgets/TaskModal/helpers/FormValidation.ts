import * as yup from 'yup'

export interface INewTask {
    title: string,
    text: string,
    timeCreation: Object,
    endPointDate: string,
    endPointTime: string,
    status: string,
    users: string
  }

  export const schema = yup.object().shape({
    title: yup.string()
            .required()
            .min(4, 'Title should be more then 4 letters'),
    text: yup.string()
        .required()
        .min(5,'Desription should be more then 5 letters'),
    endPointDate: yup.string().required(),
    endPointTime: yup.string().required()
  })