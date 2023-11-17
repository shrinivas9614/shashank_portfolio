import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { sg } from "../../Assets";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const navigate = useNavigate();
  return (
    <>
      <div className="min-h-full stickey">
        <Disclosure as="nav" className="bg-white">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img src={sg} alt="" className="h-[80px] w-[80px] " />
                    </div>
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        <h1
                          onClick={() => navigate("/")}
                          className={classNames(
                            " text-red-500",
                            "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                          )}
                        >
                          Home
                        </h1>

                        <h1
                          onClick={() => navigate("/services")}
                          className={classNames(
                            " text-blue-700",
                            "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                          )}
                        >
                          Services
                        </h1>
                        <h1
                          className={classNames(
                            " text-blue-700",
                            "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                          )}
                        >
                          Portfolio
                        </h1>
                        <h1
                          className={classNames(
                            " text-blue-700",
                            "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                          )}
                        >
                          About
                        </h1>
                        <h1
                          className={classNames(
                            " text-blue-700",
                            "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                          )}
                        >
                          Contact
                        </h1>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-4 flex items-center md:ml-6">
                      {/* Profile dropdown */}
                    </div>
                  </div>
                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md uppercase bg-gray-800 p-2 text-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                  <h1
                    onClick={() => navigate("/")}
                    className={classNames(
                      " text-red-500",
                      "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                    )}
                  >
                    Home
                  </h1>
                  <h1
                    className={classNames(
                      " text-blue-700",
                      "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                    )}
                  >
                    Portfolio
                  </h1>
                  <h1
                    onClick={() => navigate("/services")}
                    className={classNames(
                      " text-blue-700",
                      "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                    )}
                  >
                    Services
                  </h1>
                  <h1
                    className={classNames(
                      " text-blue-700",
                      "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                    )}
                  >
                    About
                  </h1>
                  <h1
                    className={classNames(
                      " text-blue-700",
                      "rounded-md uppercase px-3 py-2 text-lg font-medium cursor-pointer"
                    )}
                  >
                    Contact
                  </h1>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
