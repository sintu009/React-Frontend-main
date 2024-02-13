import React from 'react'

const Table = ({ allOrders, subTotal }) => {
    console.log(allOrders, subTotal)
    return (
        <div className=''>
            <div class="flex flex-col">
                <div class="-m-1.5 overflow-x-auto">
                    <div class="p-1.5 min-w-full inline-block align-middle">
                        <div class="overflow-hidden">
                            <table class="min-w-full divide-y divide-gray-200">
                                <thead>
                                    <tr>
                                        {/* <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th> */}
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Phone Number</th>
                                        <th scope="col" class="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrders?.map((el) => {
                                            return <tr key={el._id} class="odd:bg-white even:bg-gray-100">
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{el.phoneNumber}</td>
                                                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">{el.total}</td>

                                            </tr>
                                        })
                                    }


                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Table