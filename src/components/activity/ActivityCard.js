import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

const Activitycard = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
    const response = await axios.get("http://localhost:5000/api/listactivity");
    console.log(response.data);
    setData(response.data);
  };

  return (
    <>
      <div className="container  mt-4 mx-auto grid grid-cols-3 gap-6">
        <div className="flex mx-3">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="flex mx-3">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        </div>

        <div className="flex mx-3">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="flex mx-3">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div className="flex mx-3">
          <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
            <a href="#">
              <img
                className="rounded-t-lg"
                src="https://flowbite.com/docs/images/blog/image-1.jpg"
                alt=""
              />
            </a>
            <div className="p-5">
              <a href="#">
                <h5 className="text-gray-900 font-bold text-2xl tracking-tight mb-2">
                  Noteworthy technology acquisitions 2021
                </h5>
              </a>
              <p className="font-normal text-gray-700 mb-3">
                Here are the biggest enterprise technology acquisitions of 2021
                so far, in reverse chronological order.
              </p>
              <a
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
                href="#"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div>
    //   {data.map((uni, index) => {
    //     return (
    //       <div classNameName=" mb-3 w-1/2 flex justify-center">
    //         <div classNameName="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //           <img
    //             classNameName=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
    //             src=" https://picsum.photos/seed/picsum/2020/06"
    //             alt=""
    //           />
    //           <div classNameName="p-6 flex flex-col justify-start">
    //             <h5 classNameName="text-gray-900 text-xl font-medium mb-2">
    //               Activity name
    //             </h5>
    //             <p classNameName="text-gray-700 text-base mb-4">
    //               Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    //               iure at vitae, consequuntur molestiae eum. Culpa tempore sequi
    //               enim soluta obcaecati fugiat explicabo ratione omnis quo,
    //               maiores assumenda accusantium quae ducimus repellat voluptas
    //               quidem temporibus molestiae quam laborum odio dolorem?
    //             </p>
    //             <p classNameName="text-gray-600 text-xs">Uploaded at</p>
    //           </div>
    //         </div>
    //       </div>
    //     );
    //   })}
    //   <div classNameName=" mb-3 flex justify-center">
    //     <div classNameName="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //       <img
    //         classNameName=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
    //         src=" https://picsum.photos/seed/picsum/2020/06"
    //         alt=""
    //       />
    //       <div classNameName="p-6 flex flex-col justify-start">
    //         <h5 classNameName="text-gray-900 text-xl font-medium mb-2">
    //           Activity name
    //         </h5>
    //         <p classNameName="text-gray-700 text-base mb-4">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    //           iure at vitae, consequuntur molestiae eum. Culpa tempore sequi
    //           enim soluta obcaecati fugiat explicabo ratione omnis quo, maiores
    //           assumenda accusantium quae ducimus repellat voluptas quidem
    //           temporibus molestiae quam laborum odio dolorem?
    //         </p>
    //         <p classNameName="text-gray-600 text-xs">Uploaded at</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div classNameName="flex justify-center">
    //     <div classNameName="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //       <img
    //         classNameName=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
    //         src=" https://picsum.photos/seed/picsum/2020/06"
    //         alt=""
    //       />
    //       <div classNameName="p-6 flex flex-col justify-start">
    //         <h5 classNameName="text-gray-900 text-xl font-medium mb-2">
    //           Activity name
    //         </h5>
    //         <p classNameName="text-gray-700 text-base mb-4">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    //           iure at vitae, consequuntur molestiae eum. Culpa tempore sequi
    //           enim soluta obcaecati fugiat explicabo ratione omnis quo, maiores
    //           assumenda accusantium quae ducimus repellat voluptas quidem
    //           temporibus molestiae quam laborum odio dolorem?
    //         </p>
    //         <p classNameName="text-gray-600 text-xs">Uploaded at</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div classNameName="flex justify-center">
    //     <div classNameName="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //       <img
    //         classNameName=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
    //         src=" https://picsum.photos/seed/picsum/2020/06"
    //         alt=""
    //       />
    //       <div classNameName="p-6 flex flex-col justify-start">
    //         <h5 classNameName="text-gray-900 text-xl font-medium mb-2">
    //           Activity name
    //         </h5>
    //         <p classNameName="text-gray-700 text-base mb-4">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    //           iure at vitae, consequuntur molestiae eum. Culpa tempore sequi
    //           enim soluta obcaecati fugiat explicabo ratione omnis quo, maiores
    //           assumenda accusantium quae ducimus repellat voluptas quidem
    //           temporibus molestiae quam laborum odio dolorem?
    //         </p>
    //         <p classNameName="text-gray-600 text-xs">Uploaded at</p>
    //       </div>
    //     </div>
    //   </div>

    //   <div classNameName="flex justify-center">
    //     <div classNameName="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
    //       <img
    //         classNameName=" w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg"
    //         src=" https://picsum.photos/seed/picsum/2020/06"
    //         alt=""
    //       />
    //       <div classNameName="p-6 flex flex-col justify-start">
    //         <h5 classNameName="text-gray-900 text-xl font-medium mb-2">
    //           Activity name
    //         </h5>
    //         <p classNameName="text-gray-700 text-base mb-4">
    //           Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
    //           iure at vitae, consequuntur molestiae eum. Culpa tempore sequi
    //           enim soluta obcaecati fugiat explicabo ratione omnis quo, maiores
    //           assumenda accusantium quae ducimus repellat voluptas quidem
    //           temporibus molestiae quam laborum odio dolorem?
    //         </p>
    //         <p classNameName="text-gray-600 text-xs">Uploaded at</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Activitycard;
