"use client";

import { useState } from "react";

const product = {
  name: "Diamond Pearl Earrings",
  price: 29.99,
  description:
    "Elegant pearl earrings with a luxury design, perfect for daily wear and special occasions.",

  images: [
    "/products/earring1.jpg",
    "/products/earring1-side.jpg",
    "/products/earring1-detail.jpg",
  ],

  materials: "925 Sterling Silver + Crystal Pearl",
  sizes: [
    "Small (10mm)",
    "Medium (15mm)",
    "Large (20mm)",
  ],
};

export default function ProductDetail() {

  const [mainImage, setMainImage] = useState(product.images[0]);
  const [size, setSize] = useState(product.sizes[1]);
  const [quantity, setQuantity] = useState(1);


  return (
    <main className="bg-white min-h-screen px-6 py-12">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">


        {/* Photo Gallery */}

        <section>

          <div className="rounded-3xl overflow-hidden border">

            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-[500px] object-cover"
            />

          </div>


          <div className="flex gap-4 mt-5">

            {product.images.map((image)=>(
              <button
                key={image}
                onClick={()=>setMainImage(image)}
                className="border rounded-xl overflow-hidden"
              >

                <img
                  src={image}
                  className="w-24 h-24 object-cover"
                />

              </button>
            ))}

          </div>

        </section>



        {/* Product Information */}

        <section>


          <h1 className="text-4xl font-serif font-bold">
            {product.name}
          </h1>


          <p className="text-3xl text-yellow-700 font-bold mt-5">
            ${product.price}
          </p>


          <p className="text-gray-600 mt-6">
            {product.description}
          </p>



          {/* Material */}

          <div className="mt-8">

            <h3 className="font-semibold">
              Material
            </h3>

            <p className="text-gray-600">
              {product.materials}
            </p>

          </div>



          {/* Size */}

          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Size
            </h3>


            <div className="flex gap-3 flex-wrap">

              {product.sizes.map((item)=>(

                <button
                  key={item}
                  onClick={()=>setSize(item)}
                  className={`px-5 py-2 rounded-full border ${
                    size === item
                    ? "bg-black text-white"
                    : ""
                  }`}
                >

                  {item}

                </button>

              ))}

            </div>

          </div>




          {/* Quantity */}

          <div className="mt-8">

            <h3 className="font-semibold mb-3">
              Quantity
            </h3>


            <div className="flex items-center gap-5">

              <button
                onClick={()=>setQuantity(Math.max(1,quantity-1))}
                className="border px-4 py-2 rounded"
              >
                -
              </button>


              <span>
                {quantity}
              </span>


              <button
                onClick={()=>setQuantity(quantity+1)}
                className="border px-4 py-2 rounded"
              >
                +
              </button>

            </div>

          </div>



          {/* Buttons */}

          <div className="mt-10 flex gap-4">

            <button
              className="flex-1 bg-black text-white py-4 rounded-full hover:bg-gray-800"
            >
              Add To Cart
            </button>


            <button
              className="flex-1 border border-black py-4 rounded-full hover:bg-black hover:text-white"
            >
              Buy Now
            </button>

          </div>



        </section>


      </div>


    </main>
  );
}