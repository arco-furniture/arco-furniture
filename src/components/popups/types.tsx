
export type authorsNameTypes = {
    name: string
    link: string
}

export interface IPopupTemplate {
    children: JSX.Element,
    status: boolean,
    handleClose: any
}