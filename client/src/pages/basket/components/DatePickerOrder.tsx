import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import React, { useState } from 'react'
import { Controller } from 'react-hook-form'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TextField } from '@mui/material'
import { IDatePickerOrder } from '../types'
import styles from '../../../scss/modules/basket/basket-form.module.scss'

const DatePickerOrder: React.FC<IDatePickerOrder> = ({ control, errors }): JSX.Element => {
  const [date, setDate] = useState<Date | null>(new Date())
  const maxDate = Date.now() + 1000000000

  return (
    <div className={styles.datePicker}>
      <Controller
        defaultValue={date}
        name='reqDate'
        control={control}
        render={({ field: { onChange, ...restField } }) => (
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              label='Дата доставки'
              minDate={new Date()}
              maxDate={new Date(maxDate)}
              value={date}
              onChange={(event) => {
                onChange(event)
                setDate(event)
              }}
              renderInput={(params) => (
                <TextField
                  defaultValue={date}
                  size='small'
                  sx={{ maxWidth: '180px' }}
                  {...params}
                  color='primary'
                  error={!!errors?.reqDate}
                  helperText={errors?.reqDate?.message}
                />
              )}
              {...restField}
            />
          </LocalizationProvider>
        )}
      />
    </div>
  )
}

export default DatePickerOrder
