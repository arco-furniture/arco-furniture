import { API_URL, getAuthUrl } from 'configs/config'
import Cookies from 'js-cookie'
import { removeTokensStorage, saveToStorage } from './helpers'
import { getContentType } from '../api/api.helpers'
import { axiosClassic } from '../api/interceptors'
import { IAuthUser, IRegisterUser } from '../redux/auth/types'

export const AuthService = {
  async register(dataRegister: IRegisterUser) {
    const response = await axiosClassic.post(`${API_URL}${getAuthUrl('/register')}`, dataRegister)

    if (response.data.accessToken) {
      saveToStorage(response.data)
    }

    return response
  },

  async login(dataAuth: IAuthUser) {
    const response = await axiosClassic.post(`${API_URL}${getAuthUrl('/login')}`, dataAuth)

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
    const response = await axiosClassic.post(
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
