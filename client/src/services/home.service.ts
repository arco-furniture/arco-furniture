import { API_URL, getAdviceUrl, getOrderUrl, getSearchUrl } from '../configs/config'
import { axiosClassic } from '../api/interceptors'

export const HomeService = {
  async searchItems(value: string) {
    const { data } = await axiosClassic.get<any>(`${API_URL}${getSearchUrl(`/${value}`)}`)
    return data
  },

  async getTopProduct() {
    const { data } = await axiosClassic.get(`${API_URL}${getAdviceUrl('/top')}`)
    return data
  },

  async getHomeStats() {
    const { data } = await axiosClassic.get(`${API_URL}${getOrderUrl('/home/stats')}`)
    return data
  },
}
