import React , {ReactNode} from 'react'

export default function Layout({children}:{children:ReactNode}){
  return (
<div>
<h2>I am backend only pages Layout</h2>
    {children}
</div>
  )
}

