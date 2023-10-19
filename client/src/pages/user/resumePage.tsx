import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Navbar from "../../componet/navBar/nav-bar";
import { useNavigate } from "react-router-dom";
import stripePaymentButton from '../../componet/stripe-Payment-Button/StripePaymentButton'
import {axiosInstance,userRoutes} from '../../api/api'

export default function ResumePage() {
  const Navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const cancelButtonRef = useRef(null);
  const handleStripeCheckOut = ( )=>{
    const price = 500
   axiosInstance.post(`${userRoutes}/create-checkout-session`,{price}).then((res)=>{
    if(res.data.url){
      window.location.href = res.data.url
    }
  }).catch((err)=>{
    console.log(err)
  })
 
  }
  const navBarIndex = 2
  return (
    <>
      <Navbar navBarIndex={navBarIndex} />
      <div className="xl:mx-auto xl:container 2xl:px-20 px-6 py-20">
        <h1
          tabIndex={0}
          role="heading"
          aria-label="profile information"
          className="focus:outline-none text-3xl font-bold text-gray-800 "
        >
          Create your Resume
        </h1>
        <p
          role="contentinfo"
          className=" focus:outline-nonetext-sm font-light leading-tight text-gray-600 mt-4"
        >
        Create your professional resume effortlessly! Whether you're a new graduate, experienced professional, or making a career change, we've got you covered. Our user-friendly interface makes it simple to showcase your skills and achievements to potential employers. Let's start building your impressive resume!
        </p>
        <div className="flex flex-wrap items-stretch xl:justify-between justify-center mt-16 xl:gap-6 gap-4">
          <div className="lg:w-96 w-80">
            <img
              src="/images/resume Free.png"
              className="h-72 w-full object-cover object-center rounded-t-md border border-gray-300" // Add the border here
              alt="woman smiling"
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Simple Resume
              </p>
              <br />
              {/* <p className="text-base leading-6 mt-2 text-gray-800">Designer</p> */}

              <div className="flex items-center justify-center">
                <div className="flex gap-4">
                  <button
                    onClick={() => setOpen(true)}
                    ref={cancelButtonRef}
                    type="button"
                    className="flex items-center text-gray-900 border border-black from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Preview
                  </button>

                  <button
                    type="button"
                    className="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    onClick={() => {
                      Navigate("/free-resume");
                    }}
                  >
                    Free
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Add more team members here */}
          <div className="lg:w-96 w-80">
            <img
              src="/images/resume Free.png"
              className="h-72 w-full object-cover object-center rounded-t-md border border-gray-300" // Add the border here
              alt="woman smiling"
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Simple Resume
              </p>
              <br />
              {/* <p className="text-base leading-6 mt-2 text-gray-800">Designer</p> */}

              <div className="flex items-center justify-center">
                <div className="flex gap-4">
                  <button
                    onClick={() => setOpen(true)}
                    ref={cancelButtonRef}
                    type="button"
                    className="flex items-center text-gray-900 border border-black from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Preview
                  </button>

                  <button
                  onClick={handleStripeCheckOut}
                    type="button"
                    className="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 -960 960 960"
                      width="16"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        d="M220-80q-24.75 0-42.375-17.625T160-140v-434q0-24.75 17.625-42.375T220-634h70v-96q0-78.85 55.606-134.425Q401.212-920 480.106-920T614.5-864.425Q670-808.85 670-730v96h70q24.75 0 42.375 17.625T800-574v434q0 24.75-17.625 42.375T740-80H220Zm0-60h520v-434H220v434Zm260.168-140Q512-280 534.5-302.031T557-355q0-30-22.668-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM350-634h260v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426-860 388-822.083 350-784.167 350-730v96ZM220-140v-434 434Z"
                        fill="currentColor"
                      />
                    </svg>
                    550
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Add more team members here */}
          <div className="lg:w-96 w-80">
            <img
              src="/images/resume Free.png"
              className="h-72 w-full object-cover object-center rounded-t-md border border-gray-300" // Add the border here
              alt="woman smiling"
            />
            <div className="bg-gray-200 shadow-md rounded-md py-4 text-center">
              <p className="text-base font-medium leading-6 text-gray-600">
                Simple Resume
              </p>
              <br />
              {/* <p className="text-base leading-6 mt-2 text-gray-800">Designer</p> */}

              <div className="flex items-center justify-center">
                <div className="flex gap-4">
                  <button
                    onClick={() => setOpen(true)}
                    ref={cancelButtonRef}
                    type="button"
                    className="flex items-center text-gray-900 border border-black from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    Preview
                  </button>

                  <button
                    type="button"
                    className="flex items-center text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      viewBox="0 -960 960 960"
                      width="16"
                      className="w-4 h-4 mr-2"
                    >
                      <path
                        d="M220-80q-24.75 0-42.375-17.625T160-140v-434q0-24.75 17.625-42.375T220-634h70v-96q0-78.85 55.606-134.425Q401.212-920 480.106-920T614.5-864.425Q670-808.85 670-730v96h70q24.75 0 42.375 17.625T800-574v434q0 24.75-17.625 42.375T740-80H220Zm0-60h520v-434H220v434Zm260.168-140Q512-280 534.5-302.031T557-355q0-30-22.668-54.5t-54.5-24.5Q448-434 425.5-409.5t-22.5 55q0 30.5 22.668 52.5t54.5 22ZM350-634h260v-96q0-54.167-37.882-92.083-37.883-37.917-92-37.917Q426-860 388-822.083 350-784.167 350-730v96ZM220-140v-434 434Z"
                        fill="currentColor"
                      />
                    </svg>
                    ₹1500
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Add more team members here */}
        </div>
        <Transition.Root show={open} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            initialFocus={cancelButtonRef}
            onClose={setOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
            </Transition.Child>

            <div className="fixed inset-0 z-10 overflow-y-auto">
              <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                  enterTo="opacity-100 translate-y-0 sm:scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                  leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                >
                  <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-7xl sm:h-screen">
                    {/* Add your image here */}
                    <img
                      src="/images/resume Free.png"
                      alt="Your Image Alt Text"
                      className="h-240 w-full object-cover object-center rounded-t-md"
                    />

                    {/* Rest of the dialog content */}
                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                      <button
                        type="button"
                        className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                        onClick={() => setOpen(false)}
                      >
                        Cancel
                      </button>
                      {/* <button
                        type="button"
                        className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                        onClick={() => setOpen(false)}
                        ref={cancelButtonRef}
                      >
                        Cancel
                      </button> */}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </>
  );
}
