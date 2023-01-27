import { API_URL, getAuthUrl } from 'configs/config'
import Cookies from 'js-cookie'
import { removeTokensStorage, saveToStorage } from './helpers'
import { getContentType } from '../api/api.helpers'
import { axiosClassic } from '../api/interceptors'

export const AuthService = {
  async register(email: string, password: string, firstName: string) {
    const response = await axiosClassic.post(`${API_URL}${getAuthUrl('/register')}`, {
      email,
      password,
      firstName,
    })

    if (response.data.accessToken) {
      saveToStorage(response.data)
    }

    return response
  },

  async login(email: string, password: string) {
    const response = await axiosClassic.post(`${API_URL}${getAuthUrl('/login')}`, {
      email,
      password,
    })

    if (response.data.accessToken) {
      saveToStorage(response.data)
    }
    return response
  },

  logout() {
    removeTokensStorage()
    localStorage.removeItem('user')
    window.location.reload()
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')
    const response = await axiosClassic.post<any>(
      `${API_URL}${getAuthUrl('/login/access-token')}`,
      {
        refreshToken,
      },
      {
        headers: getContentType(),
      },
    )

    if (response.data.accessToken) {
      saveToStorage(response.data)
    }

    return response
  },
}
