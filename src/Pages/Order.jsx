import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { orderPlaceApi } from '../../utils/ApiUrls'
import Cookies from 'js-cookie'
const Order = () => {
    const [total, setTotal] = useState("")
    const [msg, setMsg] = useState("")
    const [isMsg, setIsMsg] = useState(false)
    const navigate = useNavigate()
    const placeOrder = async (e) => {
        e.preventDefault()
        try {
            const doOrder = await fetch(orderPlaceApi, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${JSON.parse(Cookies.get()?.token)}`,
                    "Content-Type": "application/json",

                },
                body: JSON.stringify({ total })
            })
            const response = await doOrder.json()
            console.log(response)
            if (response.status) {
                setIsMsg(true)
                setMsg(response.response)
                setTotal("")
                setTimeout(() => {
                    setIsMsg(false)
                    // navigate("/order")
                }, 3000);

            }
        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
        }
    }
    return (
        <div>
            <div className='h-screen flex justify-center items-center flex-col'>
                <div className="w-80 rounded-2xl bg-slate-100 mb-4">
                    <div className="flex flex-col gap-2 p-8">
                        <p className="text-center text-3xl text-gray-900 mb-4">ORDER NOW</p>
                        <input onChange={(e) => setTotal(e.target.value)} className="bg-slate-100 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-300" type='number' placeholder="Enter Amount" />
                        <button onClick={placeOrder} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Place order</button>

                    </div>
                    {
                        isMsg ? <p className='bg-green-400 px-2 text-white'>{msg}</p> : ""
                    }
                </div>
                <div className="w-80 rounded-2xl bg-slate-100">

                    <Link to="/order-list"><button className=" w-full inline-block cursor-pointer rounded-md bg-gray-500 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">All Orders</button></Link>

                </div>



            </div>
        </div>
    )
}

export default Order