import React from 'react'
// import Link from "react-router-dom"
const Home = () => {
  return (
    <>


      <div className='bg-white h-screen flex flex-col justify-center items-center'>
        <h1 className='lg:text-9xl md:text-7xl sm:text-5xl text-3xl font-black mb-14'>NSS MANAGENT SYSTEM</h1>
        <div className='py-6 px-10  bg-indigo-600 rounded-full text-3xl hover:bg-indigo-300 transition duration-300 ease-in-out flex items-center animate-bounce' to='/menu'>
          Get Started{' '}

          {/* <svg xmlns="http://www.w3.org/2000/svg" class=" h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg> */}
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

export default Home

// /* This example requires Tailwind CSS v2.0+ */
// import { AnnotationIcon, GlobeAltIcon, LightningBoltIcon, ScaleIcon } from '@heroicons/react/outline'

// const features = [
//   {
//     name: 'Competitive exchange rates',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: GlobeAltIcon,
//   },
//   {
//     name: 'No hidden fees',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: ScaleIcon,
//   },
//   {
//     name: 'Transfers are instant',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: LightningBoltIcon,
//   },
//   {
//     name: 'Mobile notifications',
//     description:
//       'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
//     icon: AnnotationIcon,
//   },
// ]

// export default function Example() {
//   return (
//     <div className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="lg:text-center">
//           <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Transactions</h2>
//           <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             A better way to send money
//           </p>
//           <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
//             Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
//             accusamus quisquam.
//           </p>
//         </div>

//         <div className="mt-10">
//           <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
//             {features.map((feature) => (
//               <div key={feature.name} className="relative">
//                 <dt>
//                   <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
//                     <feature.icon className="h-6 w-6" aria-hidden="true" />
//                   </div>
//                   <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
//                 </dt>
//                 <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
//               </div>
//             ))}
//           </dl>
//         </div>
//       </div>
//     </div>
//   )
// }

//newsletter
/* This example requires Tailwind CSS v2.0+ */
// export default function Example() {
//     return (
//       <div className="bg-gray-50">
//         <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
//           <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
//             <span className="block">Ready to dive in?</span>
//             <span className="block text-indigo-600">Start your free trial today.</span>
//           </h2>
//           <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
//             <div className="inline-flex rounded-md shadow">
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
//               >
//                 Get started
//               </a>
//             </div>
//             <div className="ml-3 inline-flex rounded-md shadow">
//               <a
//                 href="#"
//                 className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50"
//               >
//                 Learn more
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
