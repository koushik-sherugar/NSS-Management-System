import React from 'react'
// import Link from "react-router-dom"
import logo from "../assets/hero2.png"
const Header = () => {
    return (
        <>
            <div class="container mx-auto px-8 flex flex-col ">

                <main className="container flex flex-col-reverse sm:flex-row jusitfy-between items-center py-12">
                    <div className="sm:w-2/5 flex flex-col items-center sm:items-start text-center sm:text-left">
                        <h1 className="uppercase text-6xl text-indigo-900 font-bold leading-none tracking-wide mb-2">NSS Management</h1>
                        <h2 className="uppercase text-4xl text-orange-500 text-secondary tracking-widest mb-6">system</h2>
                        <p className="text-gray-600 leading-relaxed mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing. Vestibulum rutrum metus at enim congue scelerisque. Sed suscipit metu non iaculis semper consectetur adipiscing elit.</p>
                        <div className="flex flex-row space-x-4 ">
                            <div className='py-6 px-10  bg-indigo-800 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce text-white' to='/menu'>
                                Get Started{' '}
                            </div>
                        </div>
                    </div>
                    <div className="mb-16 sm:mb-0 mt-8 sm:mt-0 sm:w-3/5 sm:pl-12 ">
                        <img className="w-screen px-4 py-2" src={logo} alt="" />
                    </div>
                </main>
            </div>
        </>
        // <>


        //     <div classNameName='bg-white h-screen flex flex-col justify-center items-center'>
        //         <h1 classNameName='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>NSS MANAGENT SYSTEM</h1>
        //         <div classNameName="flex flex-row space-x-4 ">
        //             <div classNameName='py-6 px-10  bg-indigo-600 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce' to='/menu'>
        //                 Get Started{' '}
        //             </div>
        //             {/* <div classNameName='py-6 px-10 bg-gray-300 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce' to='/menu'>
        //     About
        //   </div> */}
        //         </div>
        //     </div>
        // </>
        // <div classNameName="h-screen flex
        // items-center justify-center">
        //   <div classNameName="">
        //     <h1 classNameName=" text-7xl ">NSS MANAGEMENT SYSTEM</h1>
        //     <p classNameName="text-xl text-center	"> a one stop store for all works</p>

        //     <div classNameName="btn mt-7 text-center	">
        //       <div classNameName="px-4 py-3 bg-gray-50 text-right sm:px-6">
        //         <button
        //           type="submit"
        //           classNameName="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        //         >
        //           Save
        //         </button>
        //       </div>
        //       <div classNameName="px-4 py-3 bg-gray-50 text-right sm:px-6">
        //         <button
        //           type="submit"
        //           classNameName="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
