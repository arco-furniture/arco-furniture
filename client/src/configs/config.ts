export const API_URL = `${process.env.REACT_APP_API}/api`

export const getAuthUrl = (string: string) => `/auth${string}`
export const getAdviceUrl = (string: string) => `/advice${string}`
export const getCategoryUrl = (string: string) => `/category${string}`
export const getProductUrl = (string: string) => `/products${string}`
export const getSearchUrl = (string: string) => `/search${string}`
