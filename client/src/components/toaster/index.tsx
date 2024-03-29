import React from 'react'
import ReduxToastrLib from 'react-redux-toastr'

const Toaster: React.FC = (): JSX.Element => (
  <ReduxToastrLib
    newestOnTop={false}
    preventDuplicates
    progressBar
    closeOnToastrClick
    timeOut={4000}
    transitionIn='fadeIn'
    transitionOut='fadeOut'
  />
)

export default Toaster
