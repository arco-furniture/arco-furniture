import { API_URL, getAdviceUrl } from '../configs/config'
import { axiosClassic } from '../api/interceptors'

export const AdviceService = {
  async getTopProduct() {
    const { data } = await axiosClassic.get(`${API_URL}${getAdviceUrl('/top')}`)
    return data
  },
}
