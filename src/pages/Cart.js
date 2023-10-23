 import React, { useEffect, useState } from 'react'
import CartItem from '../components/CartItem'
import { ToastContainer, toast } from "react-toastify";
import { useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { payment } from '../assets';
import axios from "axios"


const Cart = () => {
  const productData = useSelector((state)=>state.bazar.productData)
  const userInfo = useSelector((state)=> state.bazar.userInfo)
  const [payNow, setPayNow] = useState(false)

  const[totalAmt, setTotalAmt] = useState("")
  useEffect(()=>{
    let price = 0;
    productData.map((item)=>{
      price += item.price * item.quantity;
      return price
    })
    setTotalAmt(price.toFixed(2))
  },[productData])

  const handleCheckout = ()=>{
    if(userInfo){
      setPayNow(true)
    }else{
      toast.error("Please sign in to Checkout")
    }

    const payment = async(token)=>{
  await axios.post("http://localhost:8000/pay",{
    amount:totalAmt * 100,
    token:  token,
  })
}
  }
  return (
    <div>
      <img className="w-full h-1/3  object-cover" src="https://cdn.magzter.com/1400062889/1657901043/articles/BhwPhhid71660224703120/SIDHU-MOOSE-WALA-A-COMPLEX-CHARACTER-IN-LIFE-DEATH-AND-MUSIC.jpg" alt="" />
      <div className="max-w-screen-xl mx-auto py-20 flex">
    <CartItem />  
    <div className="w-1/3 bg-[#fafafa] py-6 px-4">
      <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
        <h2 className="text-2xl font-midium">cart totals </h2>
        <p className="flex items-center gap-4 text-base">Subtotal{" "}
        <span className="font-bold text-lg">
          ${totalAmt}</span></p>
          <p className="flex items-start gap-4 text-base">
            shiping{" "}
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim itaque cumque aperiam </span>
          </p>

      </div>
      <p className="font-semibold flex justify-between mt-6">
        Total  <span className="text-xl  font-bold ">$ {totalAmt} </span>
      </p>
      <button onClick={handleCheckout} className="bg-black text-base text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300">proceed to checkout</button>
      {
        payNow && <div className="w-full mt-6 flex items-center justify-center">
       <StripeCheckout
       stripeKey="pk_test_51O2ycCSFUGKu9OZLa4ezNV4Ppc9MM7DE8cZeQ9tlvaIbG9RwJ2WMp2O27F5aEzGNPW4pGh92WOSM5CGC9v5Tfyk400hvBiJNrY"
       name="Bazar Online Shoping"
       amount={totalAmt * 100} 
       label="pay to bazar"
       description={`Your payment amount is $${totalAmt}`}
      token={payment}
      email={userInfo.email}

       />
        </div>
      }
    </div>
      </div>
      <ToastContainer
      position="top-left"
      autoClose={3000}
      hideProgressBar={false}
      newsOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  )
}

export default Cart


// 2/17/28