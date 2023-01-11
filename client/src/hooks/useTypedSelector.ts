// eslint-disable-next-line import/named
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { TypeRootState } from '../redux/store'

export const useTypedSelector: TypedUseSelectorHook<TypeRootState> = useSelector
