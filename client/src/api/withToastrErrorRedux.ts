import { errorCatch } from './api.helpers'
import { toastr } from 'react-redux-toastr'

export const toastError = (error, title?: string) => {
  const message = errorCatch(error)
  toastr.error(title || 'Ошибка', message)
  throw message
}
