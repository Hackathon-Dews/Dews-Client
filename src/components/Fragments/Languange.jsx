import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, GlobeAltIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const languageOptions = [
  { id: 1, name: "Indonesia" },
  { id: 2, name: "English" },
];

const Languange = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <div className="container mx-auto px-10  mb-7">
      <Listbox value={selectedLanguage} onChange={handleLanguageChange}>
        {({ open }) => (
          <>
            <div className="relative">
              <Listbox.Button className="relative w-50 py-2 pl-3 pr-10 text-left bg-white border border-gray-300 rounded-md cursor-default focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
                <span className="block truncate">
                  {selectedLanguage ? selectedLanguage.name : "Select Language"}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <GlobeAltIcon
                    className="w-5 h-5 text-gray-400"
                    aria-hidden="true"
                  />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options
                  static
                  className="absolute z-10 w-36 py-1 mt-1 overflow-auto text-base bg-white border border-gray-300 rounded-md max-h-60 focus:outline-none sm:text-sm"
                >
                  {languageOptions.map((language) => (
                    <Listbox.Option
                      key={language.id}
                      value={language}
                      className={({ active }) =>
                        `${
                          active ? "text-blue-900 bg-blue-100" : "text-gray-900"
                        } cursor-default select-none relative py-2 pl-10 pr-4`
                      }
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`${
                              selected ? "font-medium" : "font-normal"
                            } block truncate`}
                          >
                            {language.name}
                          </span>
                          {selected && (
                            <span
                              className={`${
                                active ? "text-blue-600" : "text-blue-600"
                              } absolute inset-y-0 left-0 flex items-center pl-3`}
                            >
                              <CheckIcon className="w-5 h-5" />
                            </span>
                          )}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default Languange;
