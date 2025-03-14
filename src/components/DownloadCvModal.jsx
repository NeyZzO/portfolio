import {FlagIcon} from "react-flag-kit"

const GBIcon = () => <FlagIcon code="GB" size={24} />
const FRIcon = () => <FlagIcon code="FR" size={24} />

export default function DownloadCvModal() {
    return (
        <div
            id="cv-modal"
            tabindex="-1"
            aria-hidden="true"
            class="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
            <div class="p-4 w-full max-w-md max-h-full">
                <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
                    <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                            Choose language
                        </h3>
                        <button
                            type="button"
                            class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-toggle="crypto-modal"
                        >
                            <svg
                                class="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span class="sr-only ">Close modal</span>
                        </button>
                    </div>
                    <div class="p-4 md:p-5">
                        <p class="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Click on a button below to download my CV in your preferred language.
                        </p>
                        <ul class="my-4 space-y-3">
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <FRIcon />
                                    <span class="flex-1 ms-3 whitespace-nowrap">
                                        French
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    class="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
                                >
                                    <GBIcon />
                                    <span class="flex-1 ms-3 whitespace-nowrap">
                                        English
                                    </span>
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
