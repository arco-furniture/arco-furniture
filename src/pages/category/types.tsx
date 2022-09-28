
export interface IFilterTemplate {
    title: string | JSX.Element,
    children: JSX.Element,
    setOpen: any,
    open: boolean,
    icon: JSX.Element
}

export type searchStyleType = {
    style: string
}

export type searchColorType = {
    nameColor: string
    color: string
}