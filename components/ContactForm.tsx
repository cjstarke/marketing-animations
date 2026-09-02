import { Alert, Input } from '@converge/ui'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ConvergeSubmitButton from './ConvergeSubmitButton'
import { RadialBlue } from './SVGs/RadialBlue'
import ConvergeTcpa from './ConvergeTcpa'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      name: '',
      companyName: '',
      email: '',
      notes: '',
      performance: '',
    },
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  const onSubmit = () => {
    setFormSubmitted(true)
  }

  return (
    <div className="w-full flex justify-center px-6 lg:px-20 py-14 lg:py-20  overflow-clip">
      <div className="w-full max-w-md flex flex-col items-center lg:max-w-screen-lg lg:items-start lg:justify-center relative ">
        <div className="w-[4200px] absolute top-1/2 -translate-y-1/2 -left-240  lg:-left-296 lg:w-[6000px]">
          <RadialBlue />
        </div>
        <div className="w-full flex flex-col lg:flex-row lg:items-center z-30 lg:justify-between ">
          <h1 className="text-shark text-5xl text-balance mb-6">
            Let&apos;s talk <span className="font-bold">performance </span>
          </h1>
          <div className="flex flex-col text-darkGray mb-8">
            <p>242 W 36th St. #901, New York, NY 10018</p>
            <a className="hover:text-hotPink" href="tel:2122130111">
              +1 212 213 0111
            </a>
            <a
              className="text-linkBlue font-bold hover:text-hotPink"
              href="mailto:contact@convergemarketing.com"
            >
              contact@convergemarketing.com
            </a>
          </div>
        </div>
        {formSubmitted ? (
          <div></div>
        ) : (
          <form
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="on"
            id="form"
            data-component-type="form"
            data-component-vis="true"
            className="space-y-4 lg:space-y-6 z-30"
          >
            <div className='grid lg:grid-cols-2 space-y-6 lg:space-y-0  lg:gap-x-6'>
              <div>
                <Input
                  className="rounded border-shark focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue py-4 px-4"
                  label="Name"
                  type="text"
                  id="name"
                  placeholder="Name*"
                  {...register('name', {
                    required: true,
                  })}
                />

                {errors.name && (
                  <Alert status="error" inverted={true}>
                    Name is required
                  </Alert>
                )}
              </div>
              <div>
                <Input
                  className="rounded border-shark focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue py-4 px-4"
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="Email Address*"
                  {...register('email', {
                    required: 'Please enter a valid email address.',
                    pattern:
                      /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/,
                  })}
                />

                {errors.email && (
                  <Alert status="error" inverted={true}>
                    Email is required
                  </Alert>
                )}
              </div>
            </div>

            <div>
              <Input
                className="rounded border-shark focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue py-4 px-4"
                label="Company"
                type="text"
                id="company"
                placeholder="Company*"
                {...register('companyName', {
                  required: true,
                })}
              />

              {errors.companyName && (
                <Alert status="error" inverted={true}>
                  Company is required
                </Alert>
              )}
            </div>

            <div>
              <textarea
                className="w-full resize-none rounded border border-shark px-4 py-4  focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue"
                id="notes"
                placeholder="How can we help you succeed?"
                rows={1}
                {...register('notes', {})}
              />
            </div>

            <ConvergeTcpa
              legalCompanyName="Converge Marketing, LLC"
              linkClassName="font-bold underline"
              textClassName="text-blue-800 md:col-span-2 text-xs py-4"
              submitBtnText="Get started"
            />

            <ConvergeSubmitButton id="form-submit" />
          </form>
        )}
      </div>
    </div>
  )
}

export default ContactForm
