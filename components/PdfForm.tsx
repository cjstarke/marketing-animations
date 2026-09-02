import { Controller, useForm } from 'react-hook-form'
import { formErrorMessages } from '../data/errors.config'
import { FormSubmissionStatus } from '../types'
import ConvergeSubmitButton from './ConvergeSubmitButton'

type PdfFormProps = {
  formStatus: FormSubmissionStatus
  setFormStatus: Function
  toggleModal: Function
}

const PdfForm = ({ formStatus, setFormStatus, toggleModal }: PdfFormProps) => {
  // These values are configured in Hubspot under
  // Properties -> "Marketing Goals" -> Field Type: Multiple Checkboxes
  // https://app.hubspot.com/property-settings/46128433/properties?type=0-1&search=marketing&action=edit&property=marketing_goals
  const goalOptions = [
    { label: 'Discover tools for quick wins', value: 'discover_tools' },
    { label: 'Improve performance & ROI', value: 'improve_roi' },
    { label: 'Automate tasks', value: 'automate_tasks' },
    { label: 'Personalize & target better', value: 'personalize_target' },
    { label: 'Scale content creation', value: 'scale_content_creation' },
    { label: 'Unlock data insights', value: 'unlock_insights' },
    { label: 'Try autonomous agents', value: 'autonomous_agents' },
    { label: 'Just exploring', value: 'exploring' },
    { label: 'Other', value: 'other' },
  ]

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      company: '',
      marketing_goals: [] as string[],
    },
  })

  const onSubmit = async (data: any) => {
    setFormStatus(FormSubmissionStatus.Submitting)

    const payload = {
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      company: data.company,
      marketing_goals: data.marketing_goals,
    }

    try {
      const response = await fetch('https://rest-api.helixbi.io/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const result = await response.json()

      if (result.success) {
        toggleModal()
        setFormStatus(FormSubmissionStatus.Success)
      } else {
        setFormStatus(FormSubmissionStatus.Error)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus(FormSubmissionStatus.Error)
    }
  }

  const inputClasses =
    'clickable rounded-lg font-roboto pl-5 py-3.5 text-shark focus:border-linkBlue font-light lg:text-lg focus:outline-none focus:ring-0 w-full placeholder-shark'
  const outerInputClasses = 'mb-3.5 w-full lg:mb-5'
  const errorClasses = 'text-xs text text-red-700 ml-2 mt-1'

  return (
    <>
      <div className="w-full flex justify-center px-6 lg:px-10 py-12 lg:pt-16 lg:pb-24">
        <form
          id="pdf-form"
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col max-w-md lg:max-w-screen-lg items-center font-roboto"
        >
          <h3 className="font-bold font-inter text-3xl mb-8 lg:text-4xlplus xl:text-5xl">
            Unlock the AI for Action whitepaper:
          </h3>
          <div className={outerInputClasses}>
            <input
              className={inputClasses}
              data-component-vis="true"
              type="text"
              id="firstName"
              placeholder="First name*"
              {...register('first_name', {
                required: formErrorMessages.firstName.required,
                pattern: /^([- \w\d\u00c0-\u024f]+)$/,
              })}
            />

            {errors.first_name && (
              <div className={errorClasses}>Your first name is required.</div>
            )}
          </div>

          <div className={outerInputClasses}>
            <input
              className={inputClasses}
              type="text"
              id="lastName"
              placeholder="Last name*"
              {...register('last_name', {
                required: formErrorMessages.lastName.required,
                pattern: /^([- \w\d\u00c0-\u024f]+)$/,
              })}
            />

            {errors.last_name && (
              <div className={errorClasses}>Your last name is required.</div>
            )}
          </div>
          <div className={outerInputClasses}>
            <input
              className={inputClasses}
              type="email"
              id="email"
              placeholder="Email*"
              {...register('email', {
                required: formErrorMessages.email.required,
                pattern:
                  /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/,
              })}
            />

            {errors.email && (
              <div className={errorClasses}>Your email is required</div>
            )}
          </div>
          <div className={outerInputClasses}>
            <input
              className={inputClasses}
              type="text"
              id="company"
              placeholder="Company*"
              {...register('company', {
                required: formErrorMessages.company.required,
                pattern: /^([- \w\d\u00c0-\u024f]+)$/,
              })}
            />

            {errors.company && (
              <div className={errorClasses}>
                {formErrorMessages.company.required}
              </div>
            )}
          </div>

          <Controller
            name="marketing_goals"
            control={control}
            rules={{
              validate: (value) => {
                return value.length > 0 || 'Please select at least one option.'
              },
            }}
            render={({ field }) => (
              <>
                <label className="text-lgplus lg:text-2xl font-medium text-shark w-full font-inter text-pretty mt-3 mb-5 lg:mt-4 lg:mb-6">
                  What are your goals for using AI in marketing?
                </label>
                <div className="space-y-3.5 self-start ml-4 lg:ml-6">
                  {goalOptions.map((option, index) => (
                    <label
                      key={index}
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        id={`marketing-goal-${option.value}`}
                        type="checkbox"
                        className="clickable cursor-pointer mr-3 h-5 w-5 lg:h-7 lg:w-7 text-linkBlue focus:ring-0 border-shark rounded checked:bg-darkPink checked:focus:bg-darkPink checked:hover:bg-darkPink "
                        checked={field.value.includes(option.value)}
                        onChange={() => {
                          const newValue = field.value.includes(option.value)
                            ? field.value.filter(
                                (item: string) => item !== option.value
                              )
                            : [...field.value, option.value]
                          field.onChange(newValue)
                        }}
                      />
                      <span className="text-base text-shark font-light lg:text-lgplus">
                        {option.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.marketing_goals && (
                  <div className={errorClasses}>
                    {(errors.marketing_goals as any)?.message ||
                      'Please select at least one option.'}
                  </div>
                )}
              </>
            )}
          />

          <p className="text-xs mt-8 mb-4 font-light lg:mb-8 lg:mt-14">
            By submitting your business contact information, you agree to
            receive access to the requested whitepaper and expressly consent to
            being contacted by Converge Marketing for sales and marketing
            purposes, including product and service information. You may
            withdraw your consent at any time in accordance with our{' '}
            <a
              className="font-bold "
              href="/compliance"
              id="pdf-form-compliance-link"
            >
              Privacy Policy
            </a>
            .
          </p>

          {formStatus === FormSubmissionStatus.Initial ? (
            <ConvergeSubmitButton
              id="form-submit"
              className="w-full"
              text="Get my free whitepaper"
            />
          ) : formStatus === FormSubmissionStatus.Submitting ? (
            <p className="text-center">Processing...</p>
          ) : formStatus === FormSubmissionStatus.Error ? (
            <div>
              <p className="text-red-600 text-center mb-4">
                There was an error processing your request. Please try again.
              </p>
              <button
                type="button"
                onClick={() => setFormStatus(FormSubmissionStatus.Initial)}
                className="clickable rounded-lg font-roboto font-light text-center bg-darkPink text-white py-3.5 px-8 w-full hover:bg-pink-700 transition-colors"
              >
                Try again
              </button>
            </div>
          ) : null}
        </form>
      </div>
    </>
  )
}

export default PdfForm
