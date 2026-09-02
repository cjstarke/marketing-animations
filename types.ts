export type CardProps = {
  children?: React.ReactNode
  description: string
  linkText: string
  subtitle: string
  title: string
  url: string
}
export type ColorSvgProps = {
  color?: string
}

export enum FormSubmissionStatus {
  Initial,
  Submitting,
  Success,
  Duplicate,
  TfCertInvalid,
  Rejected,
  Error,
}
export enum NavBarStatus {
  white,
  dark,
  pink,
}
export enum DownloadStatus {
  Initial,
  Downloading,
  Success,
  Error,
}
