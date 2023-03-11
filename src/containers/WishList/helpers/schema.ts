import * as yup from 'yup'

export const schema = yup.object().shape({
  title: yup.string()
    .required()
    .min(4, 'Title should be more then 4 letters'),
  text: yup.string()
    .required()
    .min(5, 'Desription should be more then 5 letters'),
  image: yup.mixed()
    .test('noFile', 'Need to upload visualization', (value: any) => {
      if (!value) return false
      return true
    })
    .test('fileSize', 'Image size cannot be bigger then 10Mb', (value: any) => {
      return /^image\/(jpe?g|png|gif)$/i.test(value[0].type);
    })

})