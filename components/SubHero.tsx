import { useRef, useState } from 'react'
import ButtonPink from './ButtonPink'
import UpDown from './SVGs/UpDown'

// Define dropdown options with labels and links
const dropdownOptions = [
  { label: 'Media', link: '/what-we-do/' },
  { label: 'Lead Generation', link: '/what-we-do/' },
  { label: 'Creative', link: '/what-we-do/' },
  { label: 'Strategy', link: '/what-we-do/' },
  { label: 'Data Science', link: '/what-we-do/' },
]

const SubHero = () => {
  const messageRef = useRef<HTMLDivElement>(null)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(dropdownOptions[0])

  const handleOptionSelect = (option: (typeof dropdownOptions)[0]) => {
    setSelectedOption(option)
    setIsDropdownOpen(false)
  }

  return (
    <div
      id="subhero-section"
      className="w-full flex justify-center px-6 lg:px-10 pt-32 lg:pt-48 pb-48 lg:pb-72 text-black"
      data-component-type="message-section"
      data-component-vis="true"
    >
      <div className="w-full max-w-xl flex flex-col lg:max-w-screen-xl ">
        <div ref={messageRef} className="w-full">
          <h2 className="noshake  text-4xl2 leading-[1.2] lg:text-6xl xl:text-6xlplus lg:mb-2">
            Full service. All performance.
          </h2>
          <h2 className="text-4xl2 font-bold text-darkPink leading-[1.2] lg:text-6xl mb-10 xl:text-6xlplus">
            Return on Everything.
          </h2>
          <p className="text-lgplus leading-five text-pretty mb-10 lg:mb-20 lg:text-2xlplus lg:leading-default xl:leading-default lg:max-w-200 xl:text-3xl xl:max-w-224">
            Most agencies pick a lane. We converge them all. We turn marketing
            into a profit center by connecting media, creative, data, and
            technology into one performance system — so every dollar, every
            channel, and every activity proves its value.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center w-full">
            <h3 className="text-3xlplus text-pretty lg:text-5xl mb-4 lg:mb-0 lg:mr-6">
              How we drive Return on
            </h3>

            {/* dropdown */}
            <div className="flex space-x-3">
              <div className="relative font-medium">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex space-x-2 items-center justify-between px-4 py-3 text-lg lg:text-xl border border-shark rounded-full  w-48 lg:w-52 "
                >
                  <p>{selectedOption.label}</p>
                  <div className="w-2">
                    <UpDown />
                  </div>
                </button>

                {/* Dropdown menu */}
                {isDropdownOpen && (
                  <div className="absolute z-10 mt-2 min-w-full bg-pale rounded-lg">
                    <div className="w-full dropdown-gradient rounded-lg">
                      {dropdownOptions.map((option, index) => (
                        <div key={index}>
                          <button
                            onClick={() => handleOptionSelect(option)}
                            className={`w-full px-4 py-2 text-left text-base hover:bg-darkPink/10 hover:text-shark transition-colors lg:text-lg`}
                          >
                            {option.label}
                          </button>
                          {/* Add divider after each option except the last one */}
                          {index < dropdownOptions.length - 1 && (
                            <div className="h-[1px] mx-4 bg-[#D9D9D9]" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* button */}
              <ButtonPink
                id="subhero-go"
                href={selectedOption.link}
                text="Go"
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SubHero
