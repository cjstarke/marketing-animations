import { Alert, Input } from '@converge/ui'
import { useForm } from 'react-hook-form'
import ConvergeSubmitButton from './ConvergeSubmitButton'

type EmailFormProps = {
  onFormSubmitted: Function
}

const EmailForm = ({ onFormSubmitted }: EmailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = () => {
    onFormSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} autoComplete="on" id="email-form">
      <div className="rounded-full max-w-128 flex items-center justify-between bg-white p-2 border border-shark">
        <Input
          className="xs:ml-2 rounded-full text-light border-none focus:border-none focus:outline-none focus:ring-none text-sm 2sm:text-base"
          wrapperClassName='w-full'
          label="Email"
          type="email"
          id="email"
          placeholder="Enter your email to claim"
          {...register('email', {
            required: 'Please enter a valid email address.',
            pattern:
              /^(([-\w\d]+)(\.[-\w\d]+)*@([-\w\d]+)(\.[-\w\d]+)*(\.([a-zA-Z]{2,5}|[\d]{1,3})){1,2})$/,
          })}
        />

        <ConvergeSubmitButton id="email-form-submit" className="w-fit bg-almostWhite" text='Sign up'/>
      </div>

      {errors.email && (
        <Alert status="error" className="text-black ml-2 mt-1" inverted={true}>
          Email is required
        </Alert>
      )}
    </form>
  )
}

export default EmailForm
