"use client";

import {
  createContext,
  useContext,
  useState
} from "react";


const CartContext = createContext<any>(null);


export function CartProvider({
  children
}:{
  children: React.ReactNode
}){

  const [cart,setCart] = useState<any[]>([]);



  function addToCart(product:any){

    setCart((current)=>{

      const existing = current.find(
        item=>item.name===product.name
      );


      if(existing){

        return current.map(item=>
          item.name===product.name
          ? {
              ...item,
              quantity:item.quantity+1
            }
          : item
        );

      }


      return [
        ...current,
        {
          ...product,
          quantity:1
        }
      ];

    });

  }



  function removeFromCart(name:string){

    setCart(
      cart.filter(item=>item.name!==name)
    );

  }



  function updateQuantity(
    name:string,
    amount:number
  ){

    setCart(
      cart.map(item=>
        item.name===name
        ? {
          ...item,
          quantity:Math.max(
            1,
            item.quantity+amount
          )
        }
        :item
      )
    );

  }



  const total = cart.reduce(
    (sum,item)=>
    sum+(item.price*item.quantity),
    0
  );



  return (

    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total
      }}
    >

      {children}

    </CartContext.Provider>

  );

}



export function useCart(){

  return useContext(CartContext);

}