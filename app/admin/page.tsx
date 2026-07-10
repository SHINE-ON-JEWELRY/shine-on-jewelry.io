"use client";

import { useState } from "react";


export default function AdminDashboard(){

const [products,setProducts]=useState<any[]>([]);


const [product,setProduct]=useState({

name:"",
price:"",
stock:"",
material:""

});



function addProduct(){

setProducts([
...products,
product
]);


setProduct({
name:"",
price:"",
stock:"",
material:""
});

}



return (

<main className="min-h-screen bg-gray-50 p-8">


<h1 className="text-4xl font-serif font-bold mb-10">
SHINE ON JEWELRY ADMIN 💎
</h1>



<div className="grid md:grid-cols-2 gap-10">



{/* Add Product */}

<section className="bg-white p-6 rounded-2xl shadow">


<h2 className="text-2xl font-bold mb-6">
Add New Product
</h2>



<input

placeholder="Product Name"

value={product.name}

className="border w-full p-3 rounded mb-4"

onChange={(e)=>
setProduct({
...product,
name:e.target.value
})
}

/>



<input

placeholder="Price"

value={product.price}

className="border w-full p-3 rounded mb-4"

onChange={(e)=>
setProduct({
...product,
price:e.target.value
})
}

/>




<input

placeholder="Material"

value={product.material}

className="border w-full p-3 rounded mb-4"

onChange={(e)=>
setProduct({
...product,
material:e.target.value
})
}

/>




<input

placeholder="Stock Quantity"

value={product.stock}

className="border w-full p-3 rounded mb-4"

onChange={(e)=>
setProduct({
...product,
stock:e.target.value
})
}

/>




<button

onClick={addProduct}

className="bg-black text-white px-8 py-3 rounded-full"

>

Add Product

</button>



</section>





{/* Product List */}

<section className="bg-white p-6 rounded-2xl shadow">


<h2 className="text-2xl font-bold mb-6">
Products
</h2>



{
products.length===0

?

<p>
No products yet
</p>


:


products.map((item,index)=>(


<div
key={index}
className="border-b py-4"
>

<h3 className="font-bold">
{item.name}
</h3>


<p>
Price: ${item.price}
</p>


<p>
Material: {item.material}
</p>


<p>
Stock: {item.stock}
</p>


</div>


))

}



</section>




</div>



</main>

)

}