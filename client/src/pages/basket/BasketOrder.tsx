import React, { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup/dist/yup'
import FormOrder from 'pages/basket/components/FormOrder'
import MenuOrder from 'pages/basket/components/MenuOrder'
import styles from '../../scss/modules/basket/basket-form.module.scss'
import { useQuery } from 'react-query'
import { BasketService } from '../../services/basket.service'
import { useActions } from '../../hooks/useActions'
import { SchemaOrder } from '../../schemas'
import { TypesUseForm } from 'pages/basket/types'

const BasketOrder: React.FC = (): JSX.Element => {
  const isMounted = useRef<boolean>(false)
  const [dataRequest, setDataRequest] = useState<TypesUseForm | null>(null)
  const { setUser } = useActions()

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid, errors },
  } = useForm<TypesUseForm>({
    mode: 'onBlur',
    resolver: yupResolver(SchemaOrder),
  })

  const { refetch } = useQuery(
    'post stage order',
    () => BasketService.postStageOrder(dataRequest).then((userInfo) => setUser(userInfo)),
    {
      enabled: false,
    },
  )

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
    <section className={styles.section}>
      <form className={styles.wrapper} onSubmit={handleSubmit(onSubmit)}>
        <FormOrder register={register} errors={errors} />
        <MenuOrder isValid={isValid} control={control} errors={errors} />
      </form>
    </section>
  )
}

export default BasketOrder
