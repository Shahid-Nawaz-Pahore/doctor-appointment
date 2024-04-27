import React , {ReactNode} from 'react'
import NavBar from '@/components/frontend/NavBar'
export default function Layout({children}:{children:ReactNode}){
  return (
<div>
     <NavBar/> 
    {children}
</div>
  )
}

