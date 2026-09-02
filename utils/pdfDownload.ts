/**
 * Downloads a PDF from base64 data
 */
export const downloadPdfFromBase64 = (base64Data: string, filename: string): void => {
  if (!base64Data || !filename) {
    throw new Error('Base64 data and filename are required')
  }

  // Clean base64 data
  const cleanBase64 = base64Data.startsWith('data:application/pdf;base64,') 
    ? base64Data.split(',')[1] 
    : base64Data

  // Convert to binary and create blob
  const binaryString = atob(cleanBase64)
  const bytes = new Uint8Array(binaryString.length)
  for (let i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i)
  }

  const blob = new Blob([bytes], { type: 'application/pdf' })
  
  // Create and trigger download
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Fetches base64 PDF data from a public file and downloads it
 */
export const downloadPdfFromFile = async (
  filePath: string, 
  filename: string
): Promise<void> => {
  try {
    // Fetch the base64 data from the public file
    const response = await fetch(filePath)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF data: ${response.status} ${response.statusText}`)
    }
    
    const base64Data = await response.text()
    
    if (!base64Data.trim()) {
      throw new Error('PDF file is empty or contains no data')
    }
    
    // Use the existing function to handle the download
    downloadPdfFromBase64(base64Data.trim(), filename)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`PDF download failed: ${error.message}`)
    }
    throw new Error('PDF download failed: Unknown error')
  }
}

/**
 * Async version for better error handling (legacy support)
 */
export const downloadPdfFromBase64Async = async (
  base64Data: string, 
  filename: string
): Promise<void> => {
  downloadPdfFromBase64(base64Data, filename)
}
