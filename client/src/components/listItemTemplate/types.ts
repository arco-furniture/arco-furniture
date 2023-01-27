export interface IFilterTemplate {
  title: string | JSX.Element
  children: JSX.Element
  setOpen: any
  open: boolean
  fullWidth?: boolean
  icon: JSX.Element
}
