import { API_URL, getSearchUrl } from '../configs/config'
import { axiosClassic } from '../api/interceptors'

export const HomeService = {
  async searchItems(value: string) {
    const { data } = await axiosClassic.get<any>(`${API_URL}${getSearchUrl(`/${value}`)}`)
    return data
  },
}
