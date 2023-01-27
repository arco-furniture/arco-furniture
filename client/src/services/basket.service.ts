import { API_URL, getBasketUrl } from '../configs/config'
import axios from '../api/interceptors'

export const BasketService = {
  async postStageInfo(request) {
    const { data } = await axios.post(`${API_URL}${getBasketUrl('/stage/info')}`, request)
    return data
  },

  async postStageOrder(request) {
    const { data } = await axios.post(`${API_URL}${getBasketUrl('/stage/order')}`, request)
    return data
  },

  async getPricePreliminary() {
    const { data } = await axios.get(`${API_URL}${getBasketUrl('/price/preliminary')}`)
    return data
  },

  async getBasketApproval() {
    const { data } = await axios.get(`${API_URL}${getBasketUrl('/cards')}`)
    return data
  },

  async getPriceApproval() {
    const { data } = await axios.get(`${API_URL}${getBasketUrl('/price/approval')}`)
    return data
  },
}
