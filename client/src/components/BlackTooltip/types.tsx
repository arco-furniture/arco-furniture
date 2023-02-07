export interface IBlackTooltip {
  children: JSX.Element
  title: string | JSX.Element
  placement:
    | 'bottom-end'
    | 'bottom-start'
    | 'bottom'
    | 'left-end'
    | 'left-start'
    | 'left'
    | 'right-end'
    | 'right-start'
    | 'right'
    | 'top-end'
    | 'top-start'
    | 'top'
}

export interface ITitleTooltip {
  title: string
}
