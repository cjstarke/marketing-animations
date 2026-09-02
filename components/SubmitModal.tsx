import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment, useState } from 'react'; // Import from 'react'
import { twMerge } from 'tailwind-merge';
import { DownloadStatus, FormSubmissionStatus } from '../types';
import { CheckSVG } from './SVGs/CheckSVG';
import RightArrow from './SVGs/RIghtArrow';

export type SubmitModalProps = {
  id?: string
  className?: string
  closeButtonClassName?: string
  formStatus: FormSubmissionStatus
  isOpen: boolean
  thankYouClassName?: string
  toggleModal: any
  pinkArrow?: boolean
}

export const SubmitModal = ({
  id,
  className,
  closeButtonClassName,
  formStatus,
  isOpen,
  thankYouClassName,
  toggleModal,
  pinkArrow = true,
}: SubmitModalProps) => {
  const [downloadStatus, setDownloadStatus] = useState<DownloadStatus>(
    DownloadStatus.Initial
  )

  const classes = twMerge('relative z-10 text-black', className)

  const thankYouClasses = twMerge(
    `text-4xl font-bold text-center text-black`,
    thankYouClassName
  )
  const closeButtonClasses = twMerge(
    'absolute top-4 right-4',
    closeButtonClassName
  )

  let strokeColor = '#FF0062'
  let headerText = 'Thank You'
  let analyticsId = 'form-success'
  let analyticsMsg

  const handleDownloadPdf = async () => {
    try {
      setDownloadStatus(DownloadStatus.Downloading)

      const { downloadPdfFromFile } = await import('../utils/pdfDownload')

      await downloadPdfFromFile('/aiebook.txt', 'AI-for-Action-eBook.pdf')

      setDownloadStatus(DownloadStatus.Success)
    } catch (error) {
      console.error('Error downloading PDF:', error)
      setDownloadStatus(DownloadStatus.Error)
    }
  }

  return (
    <div id={id} data-component-vis={true}>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className={classes} onClose={toggleModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full md:w-7/12 transform overflow-hidden bg-white p-6 text-left align-middle shadow-xl transition-all max-w-2xl">
                  <button className="" onClick={() => toggleModal()}>
                    <div className={closeButtonClasses}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke={strokeColor}
                        className="h-8 w-8"
                      >
                        {' '}
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />{' '}
                      </svg>
                    </div>
                  </button>
                  <div className="w-full flex justify-center mb-8">
                    <CheckSVG className="w-20" strokeColor={strokeColor} />
                  </div>

                  <DialogTitle as="h3" className={thankYouClasses}>
                    <div className="font-sans font-bold text-3xl text-center relative">
                      {headerText}
                      {isOpen && (
                        <div
                          id={analyticsId}
                          className="absolute top-0"
                          data-message={analyticsMsg}
                        >
                          &nbsp;
                        </div>
                      )}
                    </div>
                  </DialogTitle>
                  <DialogPanel>
                    <div className="flex items-center justify-center pt-6">
                      {downloadStatus === DownloadStatus.Initial && (
                        <button
                          id="download-pdf-button"
                          onClick={handleDownloadPdf}
                          className="text-lg text-shark font-medium border px-5 py-2 border-shark rounded-full bg-skyBlue flex items-center group justify-center w-fit"
                        >
                          <p className="text-nowrap">
                            Download AI for Action eBook
                          </p>
                          <div className="w-2 group-hover:w-4 transition-all ease-in"></div>
                          <div className="w-4">
                            <RightArrow strokeColor={pinkArrow ? '#E64C76' : '#b1e4ff'} />
                          </div>
                        </button>
                      )}
                      {downloadStatus === DownloadStatus.Downloading && (
                        <p className="text-lg text-shark font-medium">
                          Downloading...
                        </p>
                      )}
                      {downloadStatus === DownloadStatus.Success && (
                        <p className="text-lg text-shark font-medium">
                          Download successful
                        </p>
                      )}
                      {downloadStatus === DownloadStatus.Error && (
                        <p className="text-lg text-shark font-medium">
                          Something went wrong
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-center pt-4">
                      <div className="bg-rba-green-400 h-2 w-[88px]"></div>
                    </div>
                  </DialogPanel>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  )
}
