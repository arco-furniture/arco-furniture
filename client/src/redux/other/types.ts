export interface IOtherState {
  statusAlert: boolean
  alert: IAlert
  itemIsLiked: boolean
  statusAuthorsPopup: boolean
  statusPaymentPopup: boolean
  statusPopupProject: boolean
  paymentValue: null | number
}

export interface IAlert {
  message: string
  type: string
}
