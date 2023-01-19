import axios from 'axios'
// eslint-disable-next-line import/named
import { API_URL, getProfileUrl } from '../configs/config'
import Cookies from 'js-cookie'

export const ProfileService = {
  async getProfileInfo() {
    const refreshToken = Cookies.get('refreshToken')
    const { data } = await axios.post(`${API_URL}${getProfileUrl('/info')}`, {
      refreshToken,
    })
    return data
  },
}
