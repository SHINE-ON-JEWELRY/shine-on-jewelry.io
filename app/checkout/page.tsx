"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";


export default function Checkout(){

const {
 cart,
 total
}=useCart();


const [customer,setCustomer]=useState({
name:"",
phone:"",
address:""
});


function submitOrder(){

const message = `
💎 SHINE ON JEWELRY ORDER

Name:
${customer.name}

Phone:
${customer.phone}

Address:
${customer.address}


Products:

${cart.map(item=>
`${item.name} x${item.quantity} = $${item.price*item.quantity}`
).join("\n")}


Total:
$${total.toFixed(2)}
`;


const telegramURL =
`https://t.me/share/url?text=${encodeURIComponent(message)}`;


window.open(
telegramURL,
"_blank"
);

}



return (

<main className="max-w-5xl mx-auto p-6">


<h1 className="text-4xl font-serif mb-10">
Checkout 💎
</h1>



<div className="grid md:grid-cols-2 gap-10">



{/* Customer Information */}

<section>

<h2 className="text-xl font-bold mb-5">
Customer Information
</h2>


<input
placeholder="Full Name"
className="border w-full p-3 rounded mb-4"
onChange={(e)=>
setCustomer({
...customer,
name:e.target.value
})
}
/>


<input
placeholder="Phone Number"
className="border w-full p-3 rounded mb-4"
onChange={(e)=>
setCustomer({
...customer,
phone:e.target.value
})
}
/>



<textarea

placeholder="Delivery Address"

className="border w-full p-3 rounded"

onChange={(e)=>
setCustomer({
...customer,
address:e.target.value
})
}

/>



</section>




{/* Order Summary */}

<section>


<h2 className="text-xl font-bold mb-5">
Your Order
</h2>


{
cart.map(item=>(

<div
key={item.name}
className="flex justify-between border-b py-3"
>

<span>
{item.name} x{item.quantity}
</span>


<span>
${(item.price*item.quantity).toFixed(2)}
</span>


</div>

))
}



<div className="text-2xl font-bold mt-6">

Total:
${total.toFixed(2)}

</div>




<button

onClick={submitOrder}

className="mt-8 w-full bg-black text-white py-4 rounded-full"

>

Order via Telegram 📲

</button>



</section>



</div>



</main>

)

}