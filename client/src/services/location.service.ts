import { axiosClassic, axiosLocation } from '../api/interceptors'

export const LocationService = {
  async getIpAddress() {
    const { data } = await axiosClassic.get('https://api.ipify.org')
    return data
  },
  async getLocation(ip) {
    const { data } = await axiosLocation.get(
      `https://suggestions.dadata.ru/suggestions/api/4_1/rs/iplocate/address?ip=${ip}`,
    )
    return data.location.value
  },

  async searchLocation(value) {
    const { data } = await axiosClassic.get(
      `http://geohelper.info/api/v1/cities?apiKey=${process.env.REACT_APP_GEOHELPER_KEY}&locale%5Blang%5D=ru&locale%5BfallbackLang%5D=uk&filter%5Bname%5D=${value}&%5BcountryIso%5D=RU&locale%5Bpagination%5D=100`,
    )
    return data?.result
  },
}
