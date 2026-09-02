import { useState, useRef } from 'react'
import Script from 'next/script'
import { Alert, Input } from '@converge/ui'
import { useForm } from 'react-hook-form'
import { useScrollTriggerFadeIn } from '../utils/gsap'
import ConvergeSubmitButton from './ConvergeSubmitButton'
import ConvergeTcpa from './ConvergeTcpa'

const ContactSectionAnimated = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

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

  // Refs for all animated elements
  const contactHeadingRef = useRef<HTMLHeadingElement>(null)
  const containerRef = useRef<HTMLFormElement>(null)
  const nameInputRef = useRef<HTMLDivElement>(null)
  const emailInputRef = useRef<HTMLDivElement>(null)
  const companyInputRef = useRef<HTMLDivElement>(null)
  const notesInputRef = useRef<HTMLDivElement>(null)
  const tcpaRef = useRef<HTMLDivElement>(null)

  // Use the standardized animation utility

  useScrollTriggerFadeIn(
    [
      contactHeadingRef,
      nameInputRef,
      emailInputRef,
      companyInputRef,
      notesInputRef,
      tcpaRef,
    ],
    {
      scrollTrigger: {
        start: 'top 90%',
      },
    }
  )

  const onSubmit = () => {
    setFormSubmitted(true)
  }

  return (
    <div
      className="w-full flex justify-center px-6 lg:px-10 py-14 lg:py-28"
      id="contact-section-animated"
      data-component-vis="true"
      data-component-type="contact-section-animated"
    >
      <div className="w-full max-w-xl lg:max-w-screen-lg relative mb-8">
        <div ref={contactHeadingRef}>
          <h2 className="noshake w-full text-center text-3xl text-pretty  lg:text-5xl mb-6">
            Tired of guessing?
          </h2>
          <p className="text-lg lg:text-xl mb-6 lg:mb-12 text-center">
            Let&apos;s build marketing that proves itself. Every channel. Every
            investment. Every time.
          </p>
        </div>

        {formSubmitted ? (
          <p className="noshake text-4xl w-full text-center">
            Thanks for reaching out! We&apos;ve received your request and will
            get back to you within one business day to discuss your specific
            needs and how we can help you succeed.
            <br />
            <br /> Since you may be interested in a media performance audit, we
            can definitely explore that further. Our audits provide valuable
            insights into your current marketing efforts and identify areas for
            improvement. <br />
            <br /> We look forward to connecting with you soon!
          </p>
        ) : (
          <form
            ref={containerRef}
            onSubmit={handleSubmit(onSubmit)}
            autoComplete="on"
            id="form"
            data-component-type="form"
            data-component-vis="true"
          >
            <div className="space-y-6 text-shark text-xl">
              <div ref={nameInputRef} className="">
                <Input
                  className="rounded border-shark focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue py-4 px-8"
                  label="Name"
                  type="text"
                  id="name"
                  placeholder="Name*"
                  {...register('name', {
                    required: true,
                  })}
                />

                {errors.name && (
                  <Alert status="error" className="text-white" inverted={true}>
                    Name is required
                  </Alert>
                )}
              </div>

              <div ref={emailInputRef} className="">
                <Input
                  className="rounded border-shark focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue py-4 px-8"
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
                  <Alert status="error" className="text-white" inverted={true}>
                    Email is required
                  </Alert>
                )}
              </div>

              <div ref={companyInputRef}>
                <Input
                  className="rounded border-shark focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue py-4 px-8"
                  label="Company"
                  type="text"
                  id="company"
                  placeholder="Company*"
                  {...register('companyName', {
                    required: true,
                  })}
                />

                {errors.companyName && (
                  <Alert status="error" className="text-white" inverted={true}>
                    Company is required
                  </Alert>
                )}
              </div>

              <div ref={notesInputRef} className="">
                <textarea
                  className="w-full resize-none h-36 rounded border border-shark focus:border-skyBlue focus:outline-none focus:ring-2 focus:ring-skyBlue py-4 px-8 overflow-clip"
                  id="notes"
                  placeholder="How can we help you succeed?"
                  rows={1}
                  {...register('notes', {
                    required: true,
                  })}
                />

                {errors.notes && (
                  <Alert status="error" className="text-white" inverted={true}>
                    Information is required
                  </Alert>
                )}
              </div>
            </div>

            <div ref={tcpaRef}>
              <ConvergeTcpa
                legalCompanyName="Converge Marketing, LLC"
                linkClassName="font-bold underline"
                textClassName="text-xs my-10"
                submitBtnText="Get started"
              />
              <ConvergeSubmitButton id="contact-section-submit" />
            </div>
          </form>
        )}
      </div>
      <Script
        id="trusted-form-base"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var field = 'xxTrustedFormCertUrl';
              var provideReferrer = false;
              var tf = document.createElement('script');
              tf.type = 'text/javascript'; tf.async = true;
              tf.src = 'http' + ('https:' == document.location.protocol ? 's' : '') +
                '://api.trustedform.com/trustedform.js?provide_referrer=' + escape(provideReferrer) + '&field=' + escape(field) + '&l=' + new Date().getTime() + Math.random();
              var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(tf, s);
            }
            )();
          `,
        }}
      />
    </div>
  )
}

export default ContactSectionAnimated
