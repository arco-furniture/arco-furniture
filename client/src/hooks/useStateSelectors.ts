import { useTypedSelector } from './useTypedSelector'

export const useAuth = () => useTypedSelector((state) => state.auth)
export const useBasket = () => useTypedSelector((state) => state.basket)
export const useHome = () => useTypedSelector((state) => state.home)
export const useCategory = () => useTypedSelector((state) => state.category)
export const useOther = () => useTypedSelector((state) => state.other)
export const useProduct = () => useTypedSelector((state) => state.product)
