import * as Yup from 'yup';
const newUserSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  surname: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  phoneNumber: Yup.string()
    .required('Required')
    .min(11, 'Min 11')
    .max(20, 'Max 20'),
  gender: Yup.string().required('Required'),
  age: Yup.number().min(18, 'Min 18').max(90, 'Max 90'),
});

export default newUserSchema;
