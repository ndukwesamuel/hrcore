import { useEffect, useState } from "react"
import Logo from '../../assets/HRimg.png';

const Mobile = () => {

    const [open, setOpen] = useState(true)
    
    useEffect(() => {

    }, [])

    const openMobile = () => 
    {
       
    }

    return (
        
        <div class="py-4 text-gray-500 dark:text-gray-400">
              {/* <a class="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200" href="#">
                HRCORE
              </a> */}

              {/* Mobile hamburger */}
              <button
                className="px-8 mt-3 rounded-md md:hidden focus:outline-none focus:shadow-outline-purple"  onClick={(e) => openMobile } aria-label="Menu">
                <svg
                  class="w-6 h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
        
              <img className="px-8 py-2 mt-7 mb-6" src={Logo} alt="hrcore-logo" />

              <ul>
                <li class="relative px-6 py-2">
                  <button
                    class="inline-flex items-center justify-between w-full text-xs font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <span class="inline-flex items-center">
                      <svg
                        class="w-5 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <span class="ml-4">Employee</span>
                    </span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                    <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-100" aria-label="submenu" id="employex" style={{ borderLeft : "1px solid gray" }}>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/login.html">Directory</a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/create-account.html">
                          Profile
                        </a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/forgot-password.html">
                          Audit
                        </a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/forgot-password.html">
                          Onboarding
                        </a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/forgot-password.html">
                          Offboarding
                        </a>
                      </li>
                    </ul>
                </li>    
                <li class="relative px-6 py-2">
                  <button
                    class="inline-flex items-center justify-between w-full text-xs font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <span class="inline-flex items-center">
                      <svg
                        class="w-5 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <span class="ml-4">Leave</span>
                    </span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                    <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900" aria-label="submenu" id="leavev">
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/login.html">Directory</a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/create-account.html">
                          Profile
                        </a>
                      </li>
                    </ul>
                </li>    
                <li class="relative px-6 py-2">
                  <button
                    class="inline-flex items-center justify-between w-full text-xs font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <span class="inline-flex items-center">
                      <svg
                        class="w-5 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <span class="ml-4">Payroll</span>
                    </span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                    <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900" aria-label="submenu" id="pay">
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/login.html">Nothing Yet</a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/create-account.html">
                          Nothing Yet
                        </a>
                      </li>
                    </ul>
                </li>    
                <li class="relative px-6 py-2">
                  <button
                    class="inline-flex items-center justify-between w-full text-xs font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <span class="inline-flex items-center">
                      <svg
                        class="w-5 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <span class="ml-4">Recruitment</span>
                    </span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                    <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900" aria-label="submenu" id="recruit">
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/login.html">Nothing Yet</a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/create-account.html">
                          Nothing Yet
                        </a>
                      </li>
                    </ul>
                </li>   
                <li class="relative px-6 py-2">
                  <button
                    class="inline-flex items-center justify-between w-full text-xs font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <span class="inline-flex items-center">
                      <svg
                        class="w-5 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <span class="ml-4">Request</span>
                    </span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                    <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900" aria-label="submenu" id="request">
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/login.html">Nothing Yet</a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/create-account.html">
                          Nothing Yet
                        </a>
                      </li>
                    </ul>
                </li>   
                <li class="relative px-6 py-2">
                  <button
                    class="inline-flex items-center justify-between w-full text-xs font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <span class="inline-flex items-center">
                      <svg
                        class="w-5 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <span class="ml-4">Peformance</span>
                    </span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                    <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900" aria-label="submenu" id="performance">
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/login.html">Nothing Yet</a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/create-account.html">
                          Nothing Yet
                        </a>
                      </li>
                    </ul>
                </li>  
                <li class="relative px-6 py-2">
                  <button
                    class="inline-flex items-center justify-between w-full text-xs font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  >
                    <span class="inline-flex items-center">
                      <svg
                        class="w-5 h-4"
                        aria-hidden="true"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                        ></path>
                      </svg>
                      <span class="ml-4">Engagement</span>
                    </span>
                    <svg
                      class="w-4 h-4"
                      aria-hidden="true"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>
                    <ul class="p-2 mt-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 shadow-inner bg-gray-50 hidden dark:text-gray-400 dark:bg-gray-900" aria-label="submenu" id="engage">
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/login.html">Nothing Yet</a>
                      </li>
                      <li
                        class="px-2 py-1 text-xs transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                      >
                        <a class="w-full" href="pages/create-account.html">
                          Nothing Yet
                        </a>
                      </li>
                    </ul>
                </li>        
              </ul> 
        </div>
    )
}

export default Mobile;