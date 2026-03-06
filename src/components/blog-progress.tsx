"use client"

import { useEffect, useState } from "react"

export default function BlogProgress() {

const [progress,setProgress] = useState(0)

useEffect(()=>{

const handleScroll = () => {

const scrollTop = window.scrollY
const height =
document.documentElement.scrollHeight -
document.documentElement.clientHeight

const scrolled = (scrollTop / height) * 100

setProgress(scrolled)

}

window.addEventListener("scroll",handleScroll)

return () => window.removeEventListener("scroll",handleScroll)

},[])

return (

<div className="fixed top-0 left-0 w-full h-[3px] bg-transparent z-50">

<div
className="h-[3px] bg-gradient-to-r from-blue-500 to-purple-600"
style={{width:`${progress}%`}}
/>

</div>

)

}