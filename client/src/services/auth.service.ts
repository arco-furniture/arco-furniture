import { API_URL, getAuthUrl } from 'configs/config'
import axios from 'axios'
import Cookies from 'js-cookie'
import { removeTokensStorage, saveToStorage } from './helpers'
import { getContentType } from 'app/api.helpers'

export const AuthService = {
  async register(email: string, password: string, firstName: string) {
    const response = await axios.post<any>(`${API_URL}${getAuthUrl('/register')}`, {
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
    const response = await axios.post<any>(`${API_URL}${getAuthUrl('/login')}`, {
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
  },

  async getNewTokens() {
    const refreshToken = Cookies.get('refreshToken')
    const response = await axios.post<any>(
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
