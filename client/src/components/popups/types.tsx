export type authorsNameTypes = {
  name: string
  link: string
}

export interface IPopupTemplate {
  children: JSX.Element
  status: boolean
  handleClose: () => void
}

export type authPopupDataTypes = {
  email: string
  password: string
}

export interface IConfettiTemplate {
  children: JSX.Element
  statusPopup: boolean
  handleClose: () => void
}

export type dataRegisterTypes = {
  firstName: string
  email: string
  password: string
}

export interface registerPopupDataTypes extends dataRegisterTypes {
  passwordReplay: string
}