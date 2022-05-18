// Login Nav
// /* This example requires Tailwind CSS v2.0+ */
// import { Fragment } from 'react'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }
// const navigation = [
//   { name: 'Dashboard', href: '#', current: true },
//   { name: 'Team', href: '#', current: false },
//   { name: 'Projects', href: '#', current: false },
//   { name: 'Calendar', href: '#', current: false },
//   { name: 'Reports', href: '#', current: false },
// ]
// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

// function classNames(...classes) {
//   return classes.filter(Boolean).join(' ')
// }

// export default function Example() {
//   return (
//     <>
//       {/*
//         This example requires updating your template:

//         ```
//         <html class="h-full bg-gray-100">
//         <body class="h-full">
//         ```
//       */}
//       <div className="min-h-full">
//         <Disclosure as="nav" className="bg-gray-800">
//           {({ open }) => (
//             <>
//               <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex items-center justify-between h-16">
//                   <div className="flex items-center">
//                     <div className="flex-shrink-0">
//                       <img
//                         className="h-8 w-8"
//                         src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
//                         alt="Workflow"
//                       />
//                     </div>
//                     <div className="hidden md:block">
//                       <div className="ml-10 flex items-baseline space-x-4">
//                         {navigation.map((item) => (
//                           <a
//                             key={item.name}
//                             href={item.href}
//                             className={classNames(
//                               item.current
//                                 ? 'bg-gray-900 text-white'
//                                 : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                               'px-3 py-2 rounded-md text-sm font-medium'
//                             )}
//                             aria-current={item.current ? 'page' : undefined}
//                           >
//                             {item.name}
//                           </a>
//                         ))}
//                       </div>
//                     </div>
//                   </div>
//                   <div className="hidden md:block">
//                     <div className="ml-4 flex items-center md:ml-6">
//                       <button
//                         type="button"
//                         className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                       >
//                         <span className="sr-only">View notifications</span>
//                         <BellIcon className="h-6 w-6" aria-hidden="true" />
//                       </button>

//                       {/* Profile dropdown */}
//                       <Menu as="div" className="ml-3 relative">
//                         <div>
//                           <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                             <span className="sr-only">Open user menu</span>
//                             <img className="h-8 w-8 rounded-full" src={user.imageUrl} alt="" />
//                           </Menu.Button>
//                         </div>
//                         <Transition
//                           as={Fragment}
//                           enter="transition ease-out duration-100"
//                           enterFrom="transform opacity-0 scale-95"
//                           enterTo="transform opacity-100 scale-100"
//                           leave="transition ease-in duration-75"
//                           leaveFrom="transform opacity-100 scale-100"
//                           leaveTo="transform opacity-0 scale-95"
//                         >
//                           <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
//                             {userNavigation.map((item) => (
//                               <Menu.Item key={item.name}>
//                                 {({ active }) => (
//                                   <a
//                                     href={item.href}
//                                     className={classNames(
//                                       active ? 'bg-gray-100' : '',
//                                       'block px-4 py-2 text-sm text-gray-700'
//                                     )}
//                                   >
//                                     {item.name}
//                                   </a>
//                                 )}
//                               </Menu.Item>
//                             ))}
//                           </Menu.Items>
//                         </Transition>
//                       </Menu>
//                     </div>
//                   </div>
//                   <div className="-mr-2 flex md:hidden">
//                     {/* Mobile menu button */}
//                     <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
//                       <span className="sr-only">Open main menu</span>
//                       {open ? (
//                         <XIcon className="block h-6 w-6" aria-hidden="true" />
//                       ) : (
//                         <MenuIcon className="block h-6 w-6" aria-hidden="true" />
//                       )}
//                     </Disclosure.Button>
//                   </div>
//                 </div>
//               </div>

//               <Disclosure.Panel className="md:hidden">
//                 <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//                   {navigation.map((item) => (
//                     <Disclosure.Button
//                       key={item.name}
//                       as="a"
//                       href={item.href}
//                       className={classNames(
//                         item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
//                         'block px-3 py-2 rounded-md text-base font-medium'
//                       )}
//                       aria-current={item.current ? 'page' : undefined}
//                     >
//                       {item.name}
//                     </Disclosure.Button>
//                   ))}
//                 </div>
//                 <div className="pt-4 pb-3 border-t border-gray-700">
//                   <div className="flex items-center px-5">
//                     <div className="flex-shrink-0">
//                       <img className="h-10 w-10 rounded-full" src={user.imageUrl} alt="" />
//                     </div>
//                     <div className="ml-3">
//                       <div className="text-base font-medium leading-none text-white">{user.name}</div>
//                       <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
//                     </div>
//                     <button
//                       type="button"
//                       className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
//                     >
//                       <span className="sr-only">View notifications</span>
//                       <BellIcon className="h-6 w-6" aria-hidden="true" />
//                     </button>
//                   </div>
//                   <div className="mt-3 px-2 space-y-1">
//                     {userNavigation.map((item) => (
//                       <Disclosure.Button
//                         key={item.name}
//                         as="a"
//                         href={item.href}
//                         className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
//                       >
//                         {item.name}
//                       </Disclosure.Button>
//                     ))}
//                   </div>
//                 </div>
//               </Disclosure.Panel>
//             </>
//           )}
//         </Disclosure>

//         <header className="bg-white shadow">
//           <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
//             <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
//           </div>
//         </header>
//         <main>
//           <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
//             {/* Replace with your content */}
//             <div className="px-4 py-6 sm:px-0">
//               <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
//             </div>
//             {/* /End replace */}
//           </div>
//         </main>
//       </div>
//     </>
//   )
// }

//form
/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// export default function Example() {
//     return (
//       <>
//         <div>
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <div className="px-4 sm:px-0">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
//                 <p className="mt-1 text-sm text-gray-600">
//                   This information will be displayed publicly so be careful what you share.
//                 </p>
//               </div>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//               <form action="#" method="POST">
//                 <div className="shadow sm:rounded-md sm:overflow-hidden">
//                   <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                     <div className="grid grid-cols-3 gap-6">
//                       <div className="col-span-3 sm:col-span-2">
//                         <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
//                           Website
//                         </label>
//                         <div className="mt-1 flex rounded-md shadow-sm">
//                           <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
//                             http://
//                           </span>
//                           <input
//                             type="text"
//                             name="company-website"
//                             id="company-website"
//                             className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
//                             placeholder="www.example.com"
//                           />
//                         </div>
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="about" className="block text-sm font-medium text-gray-700">
//                         About
//                       </label>
//                       <div className="mt-1">
//                         <textarea
//                           id="about"
//                           name="about"
//                           rows={3}
//                           className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
//                           placeholder="you@example.com"
//                           defaultValue={''}
//                         />
//                       </div>
//                       <p className="mt-2 text-sm text-gray-500">
//                         Brief description for your profile. URLs are hyperlinked.
//                       </p>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Photo</label>
//                       <div className="mt-1 flex items-center">
//                         <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
//                           <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
//                             <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
//                           </svg>
//                         </span>
//                         <button
//                           type="button"
//                           className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                         >
//                           Change
//                         </button>
//                       </div>
//                     </div>

//                     <div>
//                       <label className="block text-sm font-medium text-gray-700">Cover photo</label>
//                       <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
//                         <div className="space-y-1 text-center">
//                           <svg
//                             className="mx-auto h-12 w-12 text-gray-400"
//                             stroke="currentColor"
//                             fill="none"
//                             viewBox="0 0 48 48"
//                             aria-hidden="true"
//                           >
//                             <path
//                               d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
//                               strokeWidth={2}
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                             />
//                           </svg>
//                           <div className="flex text-sm text-gray-600">
//                             <label
//                               htmlFor="file-upload"
//                               className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
//                             >
//                               <span>Upload a file</span>
//                               <input id="file-upload" name="file-upload" type="file" className="sr-only" />
//                             </label>
//                             <p className="pl-1">or drag and drop</p>
//                           </div>
//                           <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="hidden sm:block" aria-hidden="true">
//           <div className="py-5">
//             <div className="border-t border-gray-200" />
//           </div>
//         </div>

//         <div className="mt-10 sm:mt-0">
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <div className="px-4 sm:px-0">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
//                 <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
//               </div>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//               <form action="#" method="POST">
//                 <div className="shadow overflow-hidden sm:rounded-md">
//                   <div className="px-4 py-5 bg-white sm:p-6">
//                     <div className="grid grid-cols-6 gap-6">
//                       <div className="col-span-6 sm:col-span-3">
//                         <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
//                           First name
//                         </label>
//                         <input
//                           type="text"
//                           name="first-name"
//                           id="first-name"
//                           autoComplete="given-name"
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>

//                       <div className="col-span-6 sm:col-span-3">
//                         <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
//                           Last name
//                         </label>
//                         <input
//                           type="text"
//                           name="last-name"
//                           id="last-name"
//                           autoComplete="family-name"
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>

//                       <div className="col-span-6 sm:col-span-4">
//                         <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
//                           Email address
//                         </label>
//                         <input
//                           type="text"
//                           name="email-address"
//                           id="email-address"
//                           autoComplete="email"
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>

//                       <div className="col-span-6 sm:col-span-3">
//                         <label htmlFor="country" className="block text-sm font-medium text-gray-700">
//                           Country
//                         </label>
//                         <select
//                           id="country"
//                           name="country"
//                           autoComplete="country-name"
//                           className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//                         >
//                           <option>United States</option>
//                           <option>Canada</option>
//                           <option>Mexico</option>
//                         </select>
//                       </div>

//                       <div className="col-span-6">
//                         <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">
//                           Street address
//                         </label>
//                         <input
//                           type="text"
//                           name="street-address"
//                           id="street-address"
//                           autoComplete="street-address"
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>

//                       <div className="col-span-6 sm:col-span-6 lg:col-span-2">
//                         <label htmlFor="city" className="block text-sm font-medium text-gray-700">
//                           City
//                         </label>
//                         <input
//                           type="text"
//                           name="city"
//                           id="city"
//                           autoComplete="address-level2"
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>

//                       <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                         <label htmlFor="region" className="block text-sm font-medium text-gray-700">
//                           State / Province
//                         </label>
//                         <input
//                           type="text"
//                           name="region"
//                           id="region"
//                           autoComplete="address-level1"
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>

//                       <div className="col-span-6 sm:col-span-3 lg:col-span-2">
//                         <label htmlFor="postal-code" className="block text-sm font-medium text-gray-700">
//                           ZIP / Postal code
//                         </label>
//                         <input
//                           type="text"
//                           name="postal-code"
//                           id="postal-code"
//                           autoComplete="postal-code"
//                           className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
//                         />
//                       </div>
//                     </div>
//                   </div>
//                   <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>

//         <div className="hidden sm:block" aria-hidden="true">
//           <div className="py-5">
//             <div className="border-t border-gray-200" />
//           </div>
//         </div>

//         <div className="mt-10 sm:mt-0">
//           <div className="md:grid md:grid-cols-3 md:gap-6">
//             <div className="md:col-span-1">
//               <div className="px-4 sm:px-0">
//                 <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
//                 <p className="mt-1 text-sm text-gray-600">Decide which communications you'd like to receive and how.</p>
//               </div>
//             </div>
//             <div className="mt-5 md:mt-0 md:col-span-2">
//               <form action="#" method="POST">
//                 <div className="shadow overflow-hidden sm:rounded-md">
//                   <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
//                     <fieldset>
//                       <legend className="sr-only">By Email</legend>
//                       <div className="text-base font-medium text-gray-900" aria-hidden="true">
//                         By Email
//                       </div>
//                       <div className="mt-4 space-y-4">
//                         <div className="flex items-start">
//                           <div className="flex items-center h-5">
//                             <input
//                               id="comments"
//                               name="comments"
//                               type="checkbox"
//                               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                             />
//                           </div>
//                           <div className="ml-3 text-sm">
//                             <label htmlFor="comments" className="font-medium text-gray-700">
//                               Comments
//                             </label>
//                             <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
//                           </div>
//                         </div>
//                         <div className="flex items-start">
//                           <div className="flex items-center h-5">
//                             <input
//                               id="candidates"
//                               name="candidates"
//                               type="checkbox"
//                               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                             />
//                           </div>
//                           <div className="ml-3 text-sm">
//                             <label htmlFor="candidates" className="font-medium text-gray-700">
//                               Candidates
//                             </label>
//                             <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
//                           </div>
//                         </div>
//                         <div className="flex items-start">
//                           <div className="flex items-center h-5">
//                             <input
//                               id="offers"
//                               name="offers"
//                               type="checkbox"
//                               className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
//                             />
//                           </div>
//                           <div className="ml-3 text-sm">
//                             <label htmlFor="offers" className="font-medium text-gray-700">
//                               Offers
//                             </label>
//                             <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
//                           </div>
//                         </div>
//                       </div>
//                     </fieldset>
//                     <fieldset>
//                       <legend className="contents text-base font-medium text-gray-900">Push Notifications</legend>
//                       <p className="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
//                       <div className="mt-4 space-y-4">
//                         <div className="flex items-center">
//                           <input
//                             id="push-everything"
//                             name="push-notifications"
//                             type="radio"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                           />
//                           <label htmlFor="push-everything" className="ml-3 block text-sm font-medium text-gray-700">
//                             Everything
//                           </label>
//                         </div>
//                         <div className="flex items-center">
//                           <input
//                             id="push-email"
//                             name="push-notifications"
//                             type="radio"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                           />
//                           <label htmlFor="push-email" className="ml-3 block text-sm font-medium text-gray-700">
//                             Same as email
//                           </label>
//                         </div>
//                         <div className="flex items-center">
//                           <input
//                             id="push-nothing"
//                             name="push-notifications"
//                             type="radio"
//                             className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                           />
//                           <label htmlFor="push-nothing" className="ml-3 block text-sm font-medium text-gray-700">
//                             No push notifications
//                           </label>
//                         </div>
//                       </div>
//                     </fieldset>
//                   </div>
//                   <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
//                     <button
//                       type="submit"
//                       className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                     >
//                       Save
//                     </button>
//                   </div>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </>
//     )
//   }
