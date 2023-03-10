import * as yup from 'yup'

  export const schema = yup.object().shape({
    title: yup.string()
            .required()
            .min(4, 'Title should be more then 4 letters'),
    text: yup.string()
        .required()
        .min(5,'Desription should be more then 5 letters'),
    image: yup
    .mixed()
    .test("file", "Файл не выбран", (value: any) => {
      return value && value.length > 0;
    }),
  })