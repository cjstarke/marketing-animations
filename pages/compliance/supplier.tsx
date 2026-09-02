import { useEffect, useCallback, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'

const SupplierTCDownload = () => {
  const router = useRouter()
  const hasDownloadedRef = useRef(false)

  // Use useCallback to memoize the downloadPdf function
  // This ensures that the function is not called twice
  const downloadPdf = useCallback(() => {
    if (hasDownloadedRef.current) return

    const link = document.createElement('a')
    link.href = '/Converge_Supplier_Terms_and_Conditions_10_03_24.pdf'
    link.download = 'Converge_Supplier_Terms_and_Conditions_10_03_24.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)

    hasDownloadedRef.current = true

    // Redirect to the compliance page after initiating download
    setTimeout(() => {
      router.push('/compliance')
    }, 100)
  }, [router])

  useEffect(() => {
    downloadPdf()
  }, [downloadPdf])

  return (
    <>
      <Head>
        <title>Downloading Supplier Terms and Conditions Document</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="googlebot" content="noindex, nofollow" />
      </Head>
      <div className="flex items-center justify-center min-h-screen">
        <p>
          Your download should begin automatically. If it doesn&apos;t,{' '}
          <a
            href="/Converge_Supplier_Terms_and_Conditions_10_03_24.pdf"
            download
            className="text-blue-600 hover:text-blue-800 underline"
          >
            click here
          </a>
          .
        </p>
      </div>
    </>
  )
}

export default SupplierTCDownload
