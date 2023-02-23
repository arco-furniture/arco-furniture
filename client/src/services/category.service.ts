import { axiosClassic } from '../api/interceptors'
import { API_URL, getCategoryUrl } from '../configs/config'

export const CategoryService = {
  async filterCategory({ data, filter, page, sort }) {
    console.log({ data, filter, page, sort })
    const response = await axiosClassic.post(
      `${API_URL}${getCategoryUrl(`?value=${filter}&page=${page}&sort=${sort}`)}`,
      data,
    )
    return response.data
  },
}
