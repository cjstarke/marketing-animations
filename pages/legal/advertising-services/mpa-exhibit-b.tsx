import Head from 'next/head'
import { useEffect } from 'react'
import LegalArticleContent from '../../../components/legal/LegalArticleContent'
import LegalLayout from '../../../components/legal/LegalLayout'
import { useConvergePage } from '../../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../../types'
import { MPA_NAVIGATION } from '../../../lib/mpa-navigation'

const CONTENT = `**<u>EXHIBIT B</u>**

**EMAIL MARKETING TERMS**

These Email Marketing Terms apply to all Email Services. Capitalized terms not defined herein have the meaning set forth in the Agreement. In the event of any conflict between these Email Marketing Terms and the Agreement (excluding the Data Processing Addendum in <u>Exhibit C</u>, which shall control with respect to data protection matters), this <u>Exhibit B</u> shall control with respect to Email Services.

1.  **<u>Framework</u>**

This <u>Exhibit B</u> applies to both partner‑branded email campaigns and client‑branded email campaigns.

- Under both models, Marketing Partner deploys campaigns using its own Email Lists lists.

- The models differ as to which Party controls email content, branding, headers, subject lines, and Consumer-facing disclosures. In partner-branded campaigns, Marketing Partner controls such content and deploys emails under its own or its network partners' branding and privacy policy. In client-branded campaigns, Company or Client provides and controls such content.

2.  **<u>Definitions</u>**

"**Brokered Lists**" means Email Lists that Marketing Partner purchased, rented, licensed, or otherwise acquired from third-party sources. This includes, without limitation, email lists obtained through data brokers, aggregators, lead generation services, co-registration providers, or other external providers.

**"Client-Branded Email Campaigns"** means email campaigns deployed using Marketing Partner's Email Lists where the email content, branding, headers, subject lines, sender identity, and privacy policy are provided by or on behalf of Company or Client.

"**Email Lists**" means collections of email addresses used for the delivery of email marketing communications, including Brokered Lists where applicable. Email Lists are Marketing Partner Data as defined in the General Terms.

"**Partner-Branded Email Campaigns**" means email campaigns in which Marketing Partner controls (directly or through one or more affiliates, vendors, partners, or affiliate networks acting on its behalf) the email content, branding framework, headers, subject lines, sender identity, and applicable privacy policy, and causes such emails to be deployed under the branding and privacy policy of Marketing Partner or such affiliate, vendor, partner, or affiliate network.

3.  **<u>Geographic Restrictions</u>**

Unless expressly authorized by Company in writing in the applicable SOW, Marketing Partner shall ensure that all Email Lists used under the Agreement exclude users located outside the United States, and shall implement and maintain active filtering mechanisms to that effect.

4.  **<u>Allocation of Responsibility for Ad Materials</u>**

    1.  **Client-Branded Email Campaigns**. Company or Client is responsible for:

        1.  Email content, including headers, subject lines, message content, and offers;

        2.  The applicable privacy policy and Consumer-facing disclosures; and where Marketing Partner builds or hosts a Client-branded landing page, the applicable privacy policy and Consumer-facing disclosures on such page shall be those provided or approved by Company or Client, unless otherwise expressly agreed in writing in the applicable SOW.

        3.  Ensuring such content and disclosures comply with Applicable Laws.

    2.  **Partner-Branded Email Campaigns**. For these campaigns, the responsibilities for Ad Materials set forth in Sections 4.1.1 through 4.1.3 above apply to Marketing Partner instead of Company or Client. Company may require pre-launch review of partner-branded campaign materials for brand, compliance, or client-risk purposes; provided that such review shall not shift responsibility for compliance with Applicable Laws from Marketing Partner to Company.

5.  **<u>Email Lists Compliance</u>**

    1.  Marketing Partner represents and warrants that all Email Lists: (i) comply with Applicable Laws; (ii) were not harvested, scraped, or randomly generated; (iii) are either owned by Marketing Partner or licensed for conducting marketing activities under the Agreement; and (iv) where relying on consent, such consent was obtained through clearly visible, non-pre-checked opt-in mechanisms requiring affirmative user action, is documented and verifiable where reasonably available, and is current and valid with no indication of withdrawal.

    2.  Marketing Partner shall implement and maintain privacy notices and choice mechanisms on all properties used to collect Email Lists where required under Applicable Laws. Marketing Partner shall maintain written agreements with third-party list providers requiring lawful collection and honoring of opt-out requests, and shall conduct reasonable due diligence on such providers.

    3.  Marketing Partner represents and warrants that it acquires Brokered Lists from reputable third-party providers and such lists were collected lawfully and in compliance with CAN-SPAM and other Applicable Laws. Marketing Partner shall not source, derive, segment, or target Email Lists using Sensitive Personal Data, including health data, financial data, precise geolocation data, government-issued identifiers, biometric data, or any other category of data subject to heightened protection under Applicable Laws.

6.  **<u>Suppression Lists and Opt-Out Management</u>**

    1.  **General Framework**. Marketing Partner shall maintain and apply its own global suppression lists to all email campaigns. For Client-Branded Email Campaigns, Marketing Partner shall also apply all Company or Client provided suppression lists.

    2.  **Baseline Suppression Obligations**. Marketing Partner shall maintain accurate, current suppression lists that include all email addresses that have: (i) opted out or unsubscribed; (ii) submitted abuse or spam complaints; (iii) withdrawn consent; (iv) generated hard bounces; or (v) otherwise must not receive commercial email under Applicable Laws. Marketing Partner shall process unsubscribe and opt-out requests as required by Applicable Laws and ensure its third-party sources and subcontractors comply with these requirements.

    3.  **Client‑Branded Email Campaigns**. For Client-Branded Email Campaigns, Marketing Partner shall (i) apply all Company or Client provided suppression lists no later than five (5) days prior to campaign deployment; and (ii) process opt-out or unsubscribe requests within forty-eight (48) hours and promptly add such addresses to all applicable suppression lists, using commercially reasonable efforts to ensure suppression updates are reflected across all relevant systems and platforms.

    4.  **Company's Suppression Management Platform**. Company may provide Marketing Partner access to Company's or Client's suppression management platform for use solely with Client-Branded Email Campaigns. Marketing Partner shall upload its applicable suppression lists no later than five (5) days prior to campaign deployment. If Marketing Partner provides no suppression addresses for a given campaign, Company may reasonably rely on such omission as Marketing Partner's representation that no additional suppressed addresses exist. Company's suppression lists, platform, and access credentials constitute Company's Confidential Information.

    5.  **No Commercial Use of Company Suppression Data**. Company or Client provided suppression data shall be used solely for compliance purposes and shall not be used for analytics, modelling, targeting, list enrichment, or any other commercial purpose.

7.  **<u>Technical Delivery Obligations</u>**

    1.  Marketing Partner shall ensure that email routing, transmission practices, and technical delivery mechanisms used in connection with any Email Services (whether Partner‑Branded or Client‑Branded) are not false, deceptive, or misleading, and that all email communications include a clear and functional unsubscribe mechanism and a valid physical postal address, as required by Applicable Laws.

    2.  <u>Domain Management and Use</u>

        1.  All domains (including subdomains and any tracking or redirect domains) shall be lawfully used and controlled by Marketing Partner or its Partner Suppliers acting on its behalf, unless the applicable SOW expressly designates another authorized entity. Marketing Partner shall remain responsible for the compliance, operation, and use of all such domains. Marketing Partner shall not use any third party's domain name without that third party's permission.

        2.  Domains may use privacy or proxy registration services for legitimate security or operational purposes; provided that (a) Marketing Partner or its Partner Suppliers remain the beneficial owner and responsible operator of such domains; (b) the domains and "From" identity shall not be structured in a manner intended to conceal the responsible sender or render the sender untraceable; and (c) Marketing Partner shall provide Company, upon written request, complete and accurate underlying domain registration information (including registrant, registrar, and administrative contact details) within two (2) business days.

        3.  Marketing Partner shall use commercially reasonable measures to maintain the functionality and security of sending domains (and associated subdomains), including monitoring for material deliverability or abuse issues and taking prompt corrective action. Marketing Partner shall impose equivalent requirements on Partner Suppliers that send email on its behalf.

    3.  <u>Header and Routing Integrity</u>**.** Marketing Partner shall not falsify, misrepresent, forge, or materially obscure email header information, including sender identity, routing data, or originating domain information, or use relays, proxies, or retransmission methods to conceal the origin of an email or evade compliance, suppression, or deliverability controls.

    4.  <u>IP Address Records and Disclosure</u>. Marketing Partner shall maintain records of the IP addresses used to transmit Email Campaigns under this Agreement and, upon Company's reasonable written request, promptly provide the sending IP addresses and sending domains used for the applicable Email Campaigns. Marketing Partner shall not knowingly use IP addresses that are materially blacklisted or registered using false or misleading information and shall take commercially reasonable corrective action if an IP becomes materially compromised.

    5.  <u>Bounce and Deliverability Management</u>. Marketing Partner shall implement commercially reasonable automated systems to monitor and manage hard and soft bounces and shall remove hard bounces from active mailing lists within a commercially reasonable timeframe consistent with industry standards.

    6.  <u>Email Authentication</u>. Marketing Partner shall implement and maintain industry-standard email authentication protocols. Authentication records must be properly configured and published in DNS for all sending domains. Marketing Partner shall monitor authentication performance and promptly resolve any failures or misconfigurations.

8.  **Records**. Marketing Partner shall maintain records reasonably sufficient to demonstrate compliance with this Agreement and Applicable Laws for each email campaign. Upon Company's reasonable written request (including in connection with regulatory inquiries or compliance reviews), Marketing Partner shall promptly provide copies of such records, which may include summaries of email list sources, consent and suppression practices, sending domains and authentication settings, delivery controls, and copies of email messages. This shall satisfy Company's record and review rights without requiring access to Marketing Partner's proprietary subscriber lists, raw list files, list-level identities, unrelated systems, or third-party contracts beyond redacted compliance summaries. All materials provided shall be treated as Confidential Information and used solely for compliance verification, regulatory response, or enforcement of this Agreement.

**`

export default function MpaExhibitB() {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('legal-article')
  }, [setNavStatus, setCurrentPage])

  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'
  const currentUrl = `https://${domain}/legal/advertising-services/mpa-exhibit-b/`

  return (
    <>
      <Head>
        <title>MPA Exhibit B – Email Services</title>
        <meta name="description" content="Converge Marketing Partner Agreement Exhibit B: Email Services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MPA Exhibit B – Email Services" />
        <meta property="og:description" content="Converge Marketing Partner Agreement Exhibit B: Email Services" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={currentUrl} />
      </Head>

      <LegalLayout navigation={MPA_NAVIGATION}>
        <article className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MPA Exhibit B – Email Services
          </h1>

          <div className="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 pb-6 border-b border-gray-200 mb-8 mt-4">
            <div>
              <span className="font-semibold">Posted:</span> July 27, 2026
            </div>
            <div>
              <span className="font-semibold">Effective Date:</span> July 27, 2026
            </div>
          </div>

          <div className="mb-12">
            <LegalArticleContent content={CONTENT} />
          </div>
        </article>
      </LegalLayout>
    </>
  )
}
