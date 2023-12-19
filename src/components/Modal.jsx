import React from "react";

export const Modal = () => {
  return (
    <>
      <div class="text-center">
        <button
          type="button"
          class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          data-hs-overlay="#hs-bg-gray-on-hover-cards"
        >
          Open modal
        </button>
      </div>

      <div
        id="hs-bg-gray-on-hover-cards"
        class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto pointer-events-none"
      >
        <div class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-4xl sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)]">
          <div class="max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
            <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
              <h3 class="font-bold text-gray-800 dark:text-gray-200">
                Plugins
              </h3>
              <button
                type="button"
                class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-transparent dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                data-hs-overlay="#hs-bg-gray-on-hover-cards"
              >
                <span class="sr-only">Close</span>
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div class="p-4 overflow-y-auto">
              <div class="sm:divide-y divide-gray-200 dark:divide-gray-700">
                <div class="py-3 sm:py-6">
                  <h4 class="mb-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                    Base
                  </h4>

                  <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z"></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Accordion
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M12.4077 1H12.9077C14.0123 1 14.9077 1.89543 14.9077 3V13C14.9077 14.1046 14.0123 15 12.9077 15H2.90771C1.80315 15 0.907715 14.1046 0.907715 13V3C0.907715 1.89543 1.80314 1 2.90771 1H5.10034C5.83943 1 6.43858 1.59915 6.43858 2.33824C6.43858 3.07732 7.03773 3.67647 7.77681 3.67647H14.4077M8.5 1H8.90771C10.0123 1 10.9077 1.89543 10.9077 3V3.5M3.90771 8H9.90771M3.90771 11.5H11.9077"
                              stroke="currentColor"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Tabs
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M11.5 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L11 2.707V14.5a.5.5 0 0 0 .5.5zm-7-14a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L4 13.293V1.5a.5.5 0 0 1 .5-.5z"
                            />
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Scrollspy
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M8 6.00002V13M3 8.00002H6M10 8.00002H13M3 11H6M10 11H13M1 5.50002V13.5C1 14.6046 1.89543 15.5 3 15.5H13C14.1046 15.5 15 14.6046 15 13.5V5.50002C15 4.39545 14.1046 3.50002 13 3.50002H11.2024C10.6481 3.50002 10.1186 3.26992 9.74033 2.86465L8.73105 1.78329C8.33572 1.35971 7.66428 1.35971 7.26894 1.78329L6.25967 2.86465C5.88142 3.26992 5.35193 3.50002 4.79756 3.50002H3C1.89543 3.50002 1 4.39545 1 5.50002Z"
                              stroke="currentColor"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Mega Menu{" "}
                            <span class="ms-1 inline bg-blue-50 border border-blue-300 text-blue-600 text-[.6125rem] leading-4 uppercase rounded-full py-0.5 px-2 dark:bg-blue-900/[.75] dark:border-blue-700 dark:text-blue-500">
                              Hot
                            </span>
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"></path>
                            <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Dropdown
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>

                <div class="py-3 sm:py-6">
                  <h4 class="mb-2 text-xs font-semibold uppercase text-gray-600 dark:text-gray-400">
                    Advanced
                  </h4>

                  <div class="grid gap-2 sm:grid-cols-2 md:grid-cols-3">
                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M4.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM6 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0Z"></path>
                            <path d="M12 1a2 2 0 0 1 2 2 2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2 2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h10ZM2 12V5a2 2 0 0 1 2-2h9a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1Zm1-4v5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8H3Zm12-1V5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v2h12Z"></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Modal
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13 6.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm0 3a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"></path>
                            <path d="M14 0a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12zM2 1a1 1 0 0 0-1 1v1h14V2a1 1 0 0 0-1-1H2zM1 4v10a1 1 0 0 0 1 1h2V4H1zm4 0v11h9a1 1 0 0 0 1-1V4H5z"></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Offcanvas
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"></path>
                            <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z"></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Sidebar{" "}
                            <span class="ms-1 inline bg-blue-50 border border-blue-300 text-blue-600 text-[.6125rem] leading-4 uppercase rounded-full py-0.5 px-2 dark:bg-blue-900/[.75] dark:border-blue-700 dark:text-blue-500">
                              New
                            </span>
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>

                    <a
                      class="bg-white p-4 transition duration-300 rounded-lg hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-white/[.05] dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                      href="../docs/frameworks-vuejs.html"
                    >
                      <div class="flex">
                        <div class="mt-1.5 flex justify-center flex-shrink-0 rounded-s-xl">
                          <svg
                            class="w-5 h-5 text-gray-800 dark:text-gray-200"
                            width="16"
                            height="16"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                          >
                            <path d="M7.646.146a.5.5 0 0 1 .708 0L10.207 2H14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h3.793L7.646.146zM1 7v3h14V7H1zm14-1V4a1 1 0 0 0-1-1h-3.793a1 1 0 0 1-.707-.293L8 1.207l-1.5 1.5A1 1 0 0 1 5.793 3H2a1 1 0 0 0-1 1v2h14zm0 5H1v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2zM2 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 0 1h-8a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"></path>
                          </svg>
                        </div>

                        <div class="grow ms-6">
                          <h3 class="text-sm font-semibold text-blue-600 dark:text-blue-500">
                            Popover
                          </h3>
                          <p class="mt-1 text-sm text-gray-600 dark:text-gray-500">
                            A framework for building web user interfaces.
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>

                  <p class="mt-4 text-xs text-gray-500">
                    Completely unstyled, fully accessible UI{" "}
                    <a
                      class="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
                      href="../plugins.html"
                    >
                      plugins
                    </a>{" "}
                    for popular features that for one reason or another don't
                    belong in core.
                  </p>
                </div>
              </div>
            </div>

            <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
              <a
                class="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                href="../docs/index.html"
              >
                Installation Guide
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
