import React from 'react'

const BaseComponent = WrappedComponent => props => {
    const extendedProps = {
        ...props,
    }
    return <WrappedComponent {...extendedProps} />
}

export default BaseComponent