import React from 'react'
import Navbar from './component/navbar'
import IndexForm from './component/indexForm'

export default function App(props)
{
  return(
    <Navbar>
       <IndexForm formclass="mb-3" />
    </Navbar>
  )
}
