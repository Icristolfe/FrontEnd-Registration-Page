import React from 'react'

import {Button as PrincipalButton} from './styles'

function Button ({children, ...props}) {

    return <PrincipalButton {...props} >{children}</PrincipalButton>
}

export default Button