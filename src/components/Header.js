import React from 'react'
// import Link from "react-router-dom"
const Header = () => {
    return (
        <>


            <div className='bg-white h-screen flex flex-col justify-center items-center'>
                <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>NSS MANAGENT SYSTEM</h1>
                <div className="flex flex-row space-x-4 ">
                    <div className='py-6 px-10  bg-indigo-600 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce' to='/menu'>
                        Get Started{' '}
                    </div>
                    {/* <div className='py-6 px-10 bg-gray-300 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce' to='/menu'>
            About
          </div> */}
                </div>
            </div>
        </>
        // <div className="h-screen flex
        // items-center justify-center">
        //   <div className="">
        //     <h1 className=" text-7xl ">NSS MANAGEMENT SYSTEM</h1>
        //     <p className="text-xl text-center	"> a one stop store for all works</p>

        //     <div className="btn mt-7 text-center	">
        //       <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        //         <button
        //           type="submit"
        //           className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //         >
        //           Save
        //         </button>
        //       </div>
        //       <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
        //         <button
        //           type="submit"
        //           className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //         >
        //           Save
        //         </button>
        //       </div>
        //     </div>
        //   </div>
        // </div>
    )
}

export default Header
