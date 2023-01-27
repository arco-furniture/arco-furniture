import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import FormOrder from 'pages/basket/components/FormOrder'
import MenuOrder from 'pages/basket/components/MenuOrder'
import styles from '../../scss/modules/basket/basket-form.module.scss'
import { useQuery } from 'react-query'
import { BasketService } from '../../services/basket.service'

type TypesUseForm = {
  firstName: string
  city: string
  phone: string
  address: string
  comment: string
  reqDate: object
}

const BasketOrder: React.FC = () => {
  const isMounted = useRef<boolean>(false)
  const [dataRequest, setDataRequest] = useState<TypesUseForm | null>(null)

  const Schema = yup.object().shape({
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
    reqDate: yup.date().nullable().typeError('Invalid Date'),
  })

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<TypesUseForm>({
    mode: 'onBlur',
    resolver: yupResolver(Schema),
  })

  const { refetch } = useQuery('post stage order', () => BasketService.postStageOrder(dataRequest), {
    enabled: false,
  })

  const onSubmit = (data) => {
    if (isValid) {
      setDataRequest(data)
    }
  }

  useEffect(() => {
    if (isMounted.current) {
      refetch()
    }
    isMounted.current = true
  }, [dataRequest])

  return (
    <section>
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <FormOrder register={register} errors={errors} />
        <MenuOrder isValid={isValid} control={control} errors={errors} />
      </form>
    </section>
  )
}

export default BasketOrder
