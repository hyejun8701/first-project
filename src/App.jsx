import Child from './Child'
import { ClassComp, FuncComp, ArrowFuncComp } from './Components'

function Hello() {
  return <h1>Hello</h1>
}

function App() {

  return (
    <>
    <Hello/>
    <h2>World</h2>
    <Child/>
    <ClassComp/>
    <FuncComp/>
    <ArrowFuncComp/>
    </>
  )
}

export default App
