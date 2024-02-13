import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Table from '../components/Table'
import { orderListApi } from '../../utils/ApiUrls'
import Cookies from 'js-cookie'

const OrderList = () => {
    const [total, setTotal] = useState("")
    const [orders, setOrders] = useState([])
    const [msg, setMsg] = useState("")
    const [isMsg, setIsMsg] = useState(false)
    const getAllOrder = async () => {

        try {
            const orderList = await fetch(orderListApi, {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${JSON.parse(Cookies.get()?.token)}`,
                    "Content-Type": "application/json",

                },
            })
            const response = await orderList.json()
            if (response.status) {
                setIsMsg(true)
                setMsg(response.response)
                setTotal(response.orders[0].sub_total)
                setOrders(response.orders[0].orders)

            }
        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
        }
    }

    useEffect(() => {
        getAllOrder()
    }, [])
    return (
        <div >
            <div className='w-3/5 m-auto bg-slate-200 p-2 rounded-md my-4'>
                <Table allOrders={orders} subTotal={total} />
            </div>
            <div className='fixed bottom-2 left-1/2 bg-slate-200 rounded-md -translate-x-1/2 '>
                <h1 className='text-2xl px-4 py-2'>SUB-TOTAL = <span className='font-semibold'>{total}</span></h1>
            </div>
        </div>
    )
}

export default OrderList