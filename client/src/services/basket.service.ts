import { API_URL, getBasketUrl } from '../configs/config'
import axios from '../api/interceptors'

export const BasketService = {
  async postStageInfo(info) {
    const { data } = await axios.post(`${API_URL}${getBasketUrl('/stage/info')}`, { info })
    return data
  },

  async postBasketItems(items) {
    const { data } = await axios.post(`${API_URL}${getBasketUrl('/items')}`, { items })
    return data
  },

  async postStageOrder(form) {
    const { data } = await axios.post(`${API_URL}${getBasketUrl('/stage/order')}`, { form })
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

  async clearBasketItems() {
    const { data } = await axios.post(`${API_URL}${getBasketUrl('/clear')}`)
    return data
  },

  async paymentBasketItems() {
    const { data } = await axios.post(`${API_URL}${getBasketUrl('/payment')}`)
    return data
  },

  async changeStage(stage) {
    const { data } = await axios.post(`${API_URL}${getBasketUrl(`/stage/change/${stage}`)}`)
    return data
  },
}
