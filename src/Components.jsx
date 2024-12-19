import React, { Component } from 'react'

class ClassComp extends Component {
    render() {
        return <p>Class Comp</p>
    }
}

function FuncComp() {
    return <p>Func Comp</p>
}

const ArrowFuncComp = () => {
    return <p>Arrow Func Comp</p>
}

export { ClassComp, FuncComp, ArrowFuncComp }