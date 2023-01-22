import { API_URL, getAuthUrl, getProductUrl } from '../configs/config'
import { axiosClassic } from '../api/interceptors'

export const ProductService = {
  async getProduct(id: string) {
    const { data } = await axiosClassic.get(`${API_URL}${getProductUrl(`/${id}`)}`)
    return data
  },
}
