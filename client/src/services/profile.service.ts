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

  async uploadAvatar(file) {
    const { data } = await axios.post(`${API_URL}${getProfileUrl('/avatar/upload')}`, file)
    return data
  },

  async deleteAvatar() {
    const { data } = await axios.delete(`${API_URL}${getProfileUrl('/avatar/delete')}`)
    return data
  },

  async changePassword(password) {
    const { data } = await axios.patch(`${API_URL}${getProfileUrl('/password/change')}`, password)
    return data
  },
}
