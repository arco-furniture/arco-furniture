export interface IFilterTemplate {
  title: string | JSX.Element
  children: JSX.Element
  setOpen: (open: boolean) => void
  open: boolean
  fullWidth?: boolean
  icon: JSX.Element
}
