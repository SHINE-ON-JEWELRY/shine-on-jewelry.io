"use client";

import {useCart} from "../context/CartContext";


export default function Cart(){

const {
cart,
removeFromCart,
updateQuantity,
total
}=useCart();



return (

<main className="p-8">

<h1 className="text-4xl font-serif mb-8">
Shopping Cart 🛒
</h1>


{
cart.length===0
?
<p>Your cart is empty</p>

:

cart.map(item=>(

<div
key={item.name}
className="flex items-center gap-5 border-b py-5"
>


<img
src={item.image}
className="w-24 h-24 object-cover rounded"
/>


<div className="flex-1">

<h2>
{item.name}
</h2>

<p>
${item.price}
</p>


<div>

<button
onClick={()=>updateQuantity(item.name,-1)}
>
-
</button>

<span className="mx-4">
{item.quantity}
</span>

<button
onClick={()=>updateQuantity(item.name,1)}
>
+
</button>

</div>


</div>


<button
onClick={()=>removeFromCart(item.name)}
className="text-red-500"
>
Remove
</button>


</div>

))

}


<h2 className="text-2xl mt-8">
Total: ${total.toFixed(2)}
</h2>


<button
className="mt-6 bg-black text-white px-8 py-3 rounded-full"
>
Checkout
</button>


</main>

)

}