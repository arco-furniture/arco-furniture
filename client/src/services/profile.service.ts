import axios from '../api/interceptors'
import { API_URL, getProfileUrl } from '../configs/config'

export const ProfileService = {
  async getProfileInfo() {
    const { data } = await axios.get(`${API_URL}${getProfileUrl('/info')}`)
    return data
  },

  async changeFirstName(firstName) {
    const { data } = await axios.patch(`${API_URL}${getProfileUrl('/firstname/change')}`, firstName)
    return data
  },
}
