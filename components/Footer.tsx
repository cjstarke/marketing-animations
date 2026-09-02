import { useEffect, useState } from 'react'
import brandData from '../data/brand.json'
import WhatweDoData from '../data/whatWeDoData.json'
import EmailForm from './EmailForm'
import ConvergeLogoPink from './SVGs/ConvergeLogoPink'
import ConvergeButtonLink from './ConvergeButtonLink'
import CaOptOutIcon from './SVGs/CaOptOutIcon'

// EGD-4858: "Your Privacy Choices" must point directly to the DataSubject/Osano intake form
const YOUR_PRIVACY_CHOICES_URL = 'https://my.datasubject.com/FMy59nP1cQ/53694'

const Footer = () => {
  const [year, setYear] = useState(2024)
  const [emailFormSubmitted, setEmailFormSubmitted] = useState(false)

  const handleSubmit = () => {
    setEmailFormSubmitted(true)
  }

  useEffect(() => {
    let date = new Date()
    let currentYear = date.getFullYear()
    setYear(currentYear)
  }, [])

  return (
    <div
      id="footer"
      className="w-full flex justify-center px-6 lg:px-10 py-10 lg:py-16 text-black border-t border-shark bg-pale z-20"
      data-component-type="footer"
      data-component-vis="true"
    >
      <div className="w-full max-w-md flex flex-col items-start lg:max-w-screen-xl">
        <div className="lg:flex lg:items-start lg:justify-between  mb-8 w-full lg:mb-20">
          <div className='lg:flex lg:space-x-12'>
            <a href={'/'} id="footer-logo" className="w-52 lg:w-56 flex mb-6 lg:mb-0">
              <ConvergeLogoPink />
            </a>
            <h4 className="text-2xl mb-6 lg:mb-0 lg:text-3xlplus font-bold">
              Return on Everything.
            </h4>
          </div>

          <div className="lg:flex lg:justify-start lg:w-[158px] lg:shrink-0">
            <ConvergeButtonLink
              id={'footer-contact-button'}
              text="Contact us"
            />
          </div>
        </div>
        <div className="flex flex-col xl:flex-row xl:items-start w-full xl:justify-between xl:space-x-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:grid-cols-3 ">
            <div className="flex flex-col">
              <p className="font-bold text-xl mb-4">Converge</p>
              {brandData.links.map((link, i) => {
                return (
                  <a
                    className="text-darkGray mb-2 hover:text-hotPink"
                    key={`footer-link-${i}`}
                    id={link.id}
                    href={link.href}
                  >
                    {link.text}
                  </a>
                )
              })}
            </div>
            <div className="flex flex-col">
              <p className="font-bold text-xl mb-4">Services</p>
              {WhatweDoData.map((link, i) => {
                return (
                  <a
                    className="text-darkGray mb-2 hover:text-hotPink text-balance max-w-52"
                    key={`footer-link-${i}`}
                    id={`footer-service-${i}`}
                    href={`/what-we-do/#what-we-do-service-${i}`}
                  >
                    {link.service}
                  </a>
                )
              })}
            </div>
            <div className="flex flex-col text-darkGray">
              <p className="font-bold text-xl mb-4 text-black">Contact Us</p>
              <p>
                242 W 36th St. #901 <br /> New York, NY 10018
              </p>
              <a className="hover:text-hotPink" href="tel:2122130111">
                +1 212 213 0111
              </a>
              <a
                className="text-linkBlue font-bold hover:text-hotPink text-xs md:text-sm"
                href="mailto:contact@convergemarketing.com"
              >
                contact@convergemarketing.com
              </a>
            </div>
          </div>
          <div className="flex flex-col max-w-108 space-y-4 mt-10 xl:mt-0">
            <h2 className="text-2xl">
              Join our <span className="font-bold">Insights Stream</span>
            </h2>
            <p className="text-darkGray text-pretty">
              Sign up to get in on the flow of our performance insights,
              articles, and posts. You might just learn something!
            </p>
            {emailFormSubmitted ? (
              <p className="text-pretty">
                Thank you for signing up! We&apos;ll keep you updated with the
                latest insights, articles, and posts from the Converge team to
                help you stay ahead of the curve.
              </p>
            ) : (
              <EmailForm onFormSubmitted={setEmailFormSubmitted} />
            )}
            <p className="text-xs leading-normal">
              © Converge Marketing, LLC {year}, All Rights Reserved. <br />
              <a
                id="footer-link-privacy-policy"
                className="text-linkBlue font-bold hover:text-hotPink"
                target="_blank"
                href="/privacy/"
              >
                Privacy Policy
              </a>{' '}
              |{' '}
              <a
                id="footer-link-terms-of-use"
                className="text-linkBlue font-bold hover:text-hotPink"
                target="_blank"
                href="/terms/"
              >
                Terms of Use
              </a>{' '}
              |{' '}
              <a
                id="footer-your-privacy-choices"
                href={YOUR_PRIVACY_CHOICES_URL}
                target="_blank"
                rel="noreferrer"
                aria-label="Your Privacy Choices: California Consumer Privacy Act (CCPA) Opt-Out"
                title="Your Privacy Choices"
                className="inline-flex items-center gap-2 text-linkBlue font-bold hover:text-hotPink"
              >
                <CaOptOutIcon />
                <span className="underline">Your Privacy Choices</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
