import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker'
import React, { useState, memo } from 'react'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
const DatePickerOrder: React.FC<any> = ({ control, errors }) => {
  const [date, setDate] = useState<Date | null>(new Date())
  const maxDate = Date.now() + 1000000000
  const styleWrapper = { paddingTop: '42px', display: 'flex', justifyContent: 'flex-end', width: '100%' }
  return (
    <div style={styleWrapper}>
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
                  helperText={errors?.errors?.message}
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
