import React, { useState, } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { signupApi } from '../../utils/ApiUrls'

const Signup = () => {
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const [password, setPassword] = useState("")
    const [msg, setMsg] = useState("")
    const [isMsg, setIsMsg] = useState(false)
    const navigate = useNavigate()

    const signup = async (e) => {
        console.log(name, phone, password)
        e.preventDefault()
        try {
            const signUser = await fetch(signupApi, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, phone_number: phone, password })
            })
            const response = await signUser.json()
            console.log(response)
            if (response.status) {
                setIsMsg(true)
                setMsg(response.response)
                setTimeout(() => {
                    setIsMsg(false)
                    navigate("/login")
                }, 3000);

            }
        } catch (error) {
            setMsg(error.message)
            setIsMsg(true)
        }
    }
    return (
        <div>
            <div className='h-screen flex justify-center items-center'>
                <div className="w-80 rounded-2xl bg-slate-100 m-auto">
                    <div className="flex flex-col gap-2 p-8">
                        <p className="text-center text-3xl text-gray-900 mb-4">Register</p>
                        <input onChange={(e) => setName(e.target.value)} className="bg-slate-100 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-300" type='text' placeholder="Name" />
                        <input onChange={(e) => setPhone(e.target.value)} className="bg-slate-100 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-300" type='number' placeholder="Phone Number" />
                        <input onChange={(e) => setPassword(e.target.value)} className="bg-slate-100 w-full rounded-lg border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-200 focus:ring-offset-2 focus:ring-offset-gray-300" type='text' placeholder="Confirm password" />
                        <button onClick={signup} className="inline-block cursor-pointer rounded-md bg-gray-700 px-4 py-3.5 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-700 focus-visible:ring-offset-2 active:scale-95">Register</button>
                        <Link to="/login">Login here</Link>
                    </div>
                    {
                        isMsg ? <p className='bg-green-400 px-2 text-white'>{msg}</p> : ""
                    }
                </div>

            </div>
        </div>
    )
}

export default Signup