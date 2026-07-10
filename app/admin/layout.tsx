export default function AdminLayout({
children
}:{
children:React.ReactNode
}){

return (

<div>

<nav className="bg-black text-white p-5">

SHINE ON JEWELRY ADMIN

</nav>


{children}

</div>

)

}