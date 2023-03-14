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
      if (value.length === 0 && typeof value !== 'string') return false
      return true
    })
    .test('fileSize', 'Image size cannot be bigger then 6Mb', (value: any) => {
      if (typeof value === 'string') return true
      if (value.length > 0) return value[0].size <= 6291456;
      return false
    })
    .test('fileType', 'Image must be "jpeg, jpg, png, webp" extension', (value: any) => {
      if (typeof value === 'string') return true
      if (value.length > 0) return /^image\/(jpe?g|png|webp)$/i.test(value[0].type);
      return false
    }),
  mode: yup.string().required('Choose visibility mode')
})