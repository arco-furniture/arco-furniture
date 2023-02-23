export interface IOtherState {
  statusAlert: boolean
  alert: IAlert
  itemIsLiked: boolean
  statusAuthorsPopup: boolean
  statusPaymentPopup: boolean
  statusPopupProject: boolean
  statusPopupLocation: boolean
  paymentValue: null | number
  locations: any
  currentLocation: string
  statusLocations: 'initial' | 'success' | 'error' | 'loading'
}

export interface IAlert {
  message: string
  type: string
}
