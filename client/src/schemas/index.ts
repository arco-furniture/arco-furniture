import * as yup from 'yup'

export const SchemaRegister = yup.object().shape({
  firstName: yup
    .string()
    .required('Вы не заполнили')
    .matches(/^[a-zа-яё]+$/i, 'Некорректное имя'),
  email: yup.string().required('Вы не заполнили').email('Некорректная электронная почта'),
  password: yup.string().required('Вы не заполнили').min(6, 'Минимальная длина пароля 6 символов'),
  passwordReplay: yup
    .string()
    .required('Вы не заполнили')
    .min(6, 'Минимальная длина пароля 6 символов')
    .oneOf([yup.ref('password')], 'Пароли не совпадают'),
})

export const SchemaAuth = yup.object().shape({
  email: yup.string().required('Вы не заполнили').email('Некорректная электронная почта'),
  password: yup.string().required('Вы не заполнили').min(6, 'Минимальная длина пароля 6 символов'),
})

export const SchemaOrder = yup.object().shape({
  firstName: yup
    .string()
    .required('Вы не заполнили')
    .matches(/^[a-zа-яё]+$/i, 'Некорректное имя'),
  city: yup
    .string()
    .required('Вы не заполнили')
    .matches(/^[a-zа-яё]+$/i, 'Некорректное имя'),
  phone: yup
    .string()
    .required('Вы не заполнили')
    .matches(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/, 'Некорректный номер телефона'),
  address: yup.string().required('Вы не заполнили'),
  reqDate: yup.date().required('Некорректная дата доставки'),
})

export const SchemaInfo = yup.object().shape({
  firstName: yup
    .string()
    .required('Вы не заполнили')
    .matches(/^[a-zа-яё]+$/i, 'Некорректное имя'),
})

export const SchemaPasswords = yup.object().shape({
  password: yup.string().required('Вы не заполнили').min(6, 'Не менее 6 символов'),
  newPassword: yup.string().required('Вы не заполнили').min(6, 'Не менее 6 символов'),
})
