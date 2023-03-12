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
    .test('fileSize', 'Image size cannot be bigger then 6Mb', (value: any) => {
       return value[0].size <= 6291456;
    })
    .test('fileType', 'Image must be "jpeg, jpg, png, webp" extension', (value: any) => {
      return /^image\/(jpe?g|png|webp)$/i.test(value[0].type);
    })

})