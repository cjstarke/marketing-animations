import Head from 'next/head'
import { useEffect } from 'react'
import LegalArticleContent from '../../../components/legal/LegalArticleContent'
import LegalLayout from '../../../components/legal/LegalLayout'
import { useConvergePage } from '../../../contexts/ConvergePageContext'
import { MPA_NAVIGATION } from '../../../lib/mpa-navigation'
import { NavBarStatus } from '../../../types'

const CONTENT = `## MARKETING PARTNER AGREEMENT


These General Terms and Conditions ("**General Terms**"), including all applicable Exhibits attached hereto (together with each SOW, the "**Agreement**"), are made available online by Converge Marketing, LLC, a Delaware limited liability company ("**Company**"), and govern the relationship between Company and the marketing partner identified in any Statement of Work ("**Marketing Partner**") that references these General Terms. By executing a Statement of Work that incorporates these General Terms by reference, Marketing Partner agrees to be bound by these General Terms as of the effective date of such SOW. Each of Company and Marketing Partner is referred to herein as a "Party" and collectively as the "Parties."

**Updates to These General Terms:**

Company may update these General Terms from time to time by posting a revised version online and providing at least thirty (30) days' prior written notice to Marketing Partner specifying the effective date of the update. Updated General Terms shall become effective as of the effective date specified in the notice and shall apply to this Agreement and all SOWs, including SOWs then in effect, unless Marketing Partner provides written notice of objection to Company within thirty (30) days of receiving notice of the update. Marketing Partner's failure to provide timely written objection shall constitute its acceptance of the updated General Terms. If Marketing Partner timely objects to a material update to these General Terms, Marketing Partner may terminate this Agreement without penalty by providing written notice to Company within such thirty (30) day objection period, with such termination to take effect no earlier than the date the updated General Terms would otherwise become effective; provided that any SOWs then in effect shall continue to be governed by the version of the General Terms in effect at the time of Marketing Partner's objection notice through the completion or expiration of such SOWs.

**<u>Structure and Order of Precedence:</u>**

This Agreement consists of these General Terms and the Exhibits listed below, each of which is incorporated by reference and forms a binding part of this Agreement:

**[Exhibit A – Lead Generation Services](#exhibit-a)**

**[Exhibit B – Email Services](#exhibit-b)**

**[Exhibit C – Data Protection Addendum](#exhibit-c)**

The specific services to be performed, pricing, and campaign-specific terms shall be set forth in one or more statements of work ("**SOW**") referencing these General Terms and executed by authorized representatives of both Parties. These General Terms are incorporated into each such SOW by reference and form a binding part of the Agreement. In the event of any conflict between the terms of this Agreement and any SOW, the terms of this Agreement shall control unless the SOW explicitly identifies and references the specific section(s) of this Agreement that it is intended to modify or override. In all cases, the following order of precedence shall apply: (i) the Data Protection Addendum (<u>Exhibit C</u>); (ii) the other applicable Exhibits; (iii) these General Terms; and (iv) only to the extent expressly permitted above, the applicable SOW. In consideration of the mutual covenants, representations, and warranties contained herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the Parties agree as follows:

### **Definitions**

The terms set forth below shall have the following meanings:


**"Ads"** means ads in any medium or channel placed by Marketing Partner as part of its Services under a SOW.


"**Ad Materials**" means the creative materials used in connection with a campaign, including artwork, copy, logos, branding elements, headlines, call-to-action text, and destination URLs, as provided or approved by the responsible party, expressly excluding domains, websites, landing pages, and other technical delivery infrastructure, all of which are Marketing Partner's responsibility.


"**Applicable Data Protection Laws**" means all applicable data protection, privacy, and data security laws, rules, and regulations relating to the Processing of Personal Data, including comprehensive U.S. state privacy laws, standalone state consumer health privacy laws, data broker registration laws, sector‑specific laws (such as COPPA, FCRA, or GLBA), and their implementing regulations, as amended from time to time.

"**Applicable Laws**" means all laws, rules, and regulations applicable to a Party's performance under this Agreement, including (i) Applicable Data Protection Laws; (ii) applicable federal, state, and local consumer protection, advertising, marketing, and telemarketing laws, including Section 5 of the Federal Trade Commission Act, state unfair and deceptive acts and practices laws, the Controlling the Assault of Non‑Solicited Pornography and Marketing Act ("CAN‑SPAM"), the Telephone Consumer Protection Act ("TCPA"), the Telemarketing Sales Rule, and related guidance or rulemaking issued by the FTC or FCC; (iii) laws governing artificial intelligence or automated decision‑making; and (iv) export control, sanctions, and national security laws.

**"Client"** means Company's client.


**"Company Data"** means data developed, created, licensed, or acquired by or on behalf of Company or its Clients, including data sets, insights, analyses, or other materials derived or generated from such data, and Company Personal Data as that term is defined in Exhibit C.


**"Company Materials"** means the Company Data and any Ad Materials or other information, data, or materials that Company provides or otherwise makes available to Marketing Partner for use with the Services.


**"Consumer"** shall mean an individual who is at least 18 years of age.

**"Email Services"** means email marketing services as further described in Exhibit B.


**"Industry Vertical"** means the industry vertical for the Leads as specified in a SOW.


**"Lead"** means (i) a sales lead or prospective customer who voluntarily provides Personal Data including but not limited to name, address, email, phone number, and other specifically requested information in response to Marketing Partner's Ads or marketing activities, and (ii) where specified in an applicable SOW, a Consumer-initiated or Consumer-authorized telephone call, including Inbound Calls and Warm Transfers, or other event designated as a Qualified Action.

"**Lead Generation Services**" means lead generation services as further described in <u>Exhibit A</u>.

"**Marketing Partner Materials**" means the Marketing Partner Data and any Ad Materials or other information, data, or materials that Marketing Partner uses with the Services, exclusive of Company Materials.

"**Marketing Partner Data"** means data developed, created, licensed, or acquired by Marketing Partner and used by Marketing Partner in connection with the Services, exclusive of Company Data.

"**Partner Suppliers**" means Marketing Partner's affiliates, partners, subcontractors, vendors, service providers, and any other third parties engaged by, acting for, or used by Marketing Partner in connection with services under this Agreement.

**"Personal Data"** has the meaning set forth in the DPA (<u>Exhibit C</u>).

"**Service Data**" means data generated, collected, or derived by Marketing Partner in the course of performing Services for Company-branded or Client-branded campaigns, including Campaign Data (as defined in the DPA), performance analytics, attribution data, campaign measurement data, and other data created in connection with the delivery, execution, optimization, or measurement of the Services. Service Data does not include Leads or other Transferred Data and shall not be deemed Transferred Data solely because it is reported, exported, shared, or otherwise made available to Company.

"**Statement of Work**" or "**SOW**" means any ordering document, regardless of how it is titled or styled (including, without limitation, any statement of work, order form, insertion order, or similar document, that (i) is executed by authorized representatives of both Parties; (ii) incorporates these General Terms by reference (including by URL or hyperlink to the then-current version of these General Terms); and (iii) sets forth the specific services, pricing, campaign parameters, or other terms applicable to a particular engagement. Each SOW is a separate contract between the Parties and, together with these General Terms and the Exhibits, forms part of the Agreement.

"**Transferred Data**" means Leads and other data (including licensed data sets, lists, or similar data) that Marketing Partner sells or otherwise transfers to Company as a primary deliverable for compensation pursuant to a SOW. Transferred Data excludes Service Data, including any performance, tracking, reporting, measurement, or analytics data generated in connection with the Services, even if provided or made available to Company.

### **Services**

Marketing Partner agrees to provide Lead Generation Services, Email Services, and other marketing services to Company as specified in one or more SOWs executed by the parties (the "**Services**"). Where specified in an SOW, Services may include the sale or transfer of Transferred Data (including Leads) to Company.

Except as expressly restricted in the applicable SOW, Marketing Partner may use any lawful marketing channels or traffic sources to generate Leads or otherwise perform the Services.

To the extent email marketing is part of the Services, such email activities shall be governed by <u>Exhibit B</u> (Email Marketing Terms). For clarity, email marketing may be used either (a) as a channel to generate and deliver Leads to Company (in which case the Lead Generation Services terms in <u>Exhibit A</u> also apply), or (b) solely as a traffic source to direct users to Company or Client‑branded lead generation pages.

Marketing Partner is solely responsible for ensuring that its agents, employees, contractors, subcontractors, and Partner Suppliers comply with all Applicable Laws and this Agreement. Marketing Partner remains fully liable for all acts and omissions of such third parties as if they were Marketing Partner's own acts or omissions.

### **Reporting and Payment**


**Invoicing and Payment**. Invoicing and payment terms are set forth in the Exhibits and applicable SOWs. Payment of any invoice or portion thereof shall not constitute acceptance of any Services or waiver of Company's rights under this Agreement or Applicable Laws.


**Taxes**. Marketing Partner is responsible for all taxes of any nature assessed on or relating to the Services, including federal, state, and local sales, use, value‑added, excise, and similar taxes, excluding taxes based on Company's net income.

4.  **<u>Intellectual Property</u>**

    1.  **Data Ownership**. As between the Parties: (1) Company owns all right, title, and interest in and to (i) Company Data; (ii) Transferred Data received from Marketing Partner pursuant to a SOW; and (iii) Service Data, and (2) Marketing Partner owns all right, title, and interest in and to Marketing Partner Data, including its copy of Transferred Data. For clarity, ownership of a copy of Transferred Data reflects each Party's rights in the copy in its possession and does not limit Company's ownership of the Transferred Data as transferred. Transferred Data may include Leads, licensed data sets, lists, or other data identified in a SOW.

    2.  **Use of Transferred Data**. Except as expressly restricted by an applicable SOW (including any exclusivity period), each Party may use its copy of Transferred Data for any lawful purpose consistent with applicable Data Protection Laws and the DPA. Where a SOW specifies an exclusivity period, Marketing Partner shall not, during such period, commercially exploit, resell, license, distribute, or otherwise make available such Transferred Data, or any substantially similar data derived therefrom, to any third party without Company's express written consent. Any exclusivity obligations apply solely for the duration and scope expressly set forth in the applicable SOW unless otherwise stated therein.

    3.  **Use of Service Data and Company Materials.** Marketing Partner may use Service Data and Company Materials only: (i) as necessary to perform its obligations under this Agreement; (ii) as expressly authorized by Company in writing; or (iii) as permitted under the DPA. Notwithstanding the foregoing, Marketing Partner may use Service Data in aggregated or de‑identified form for internal analytics, quality assurance, and service improvement purposes, provided such use does not identify Company, any Client, or any individual.

    4.  **Retained Rights**. Each Party retains all right, title, and interest (including all intellectual property rights) in its respective Materials. All rights not expressly granted under this Agreement are reserved.

5.  **<u>Confidentiality and Data Protection</u>**

    1.  For the purposes of this Agreement, "**Confidential Information**" means non-public, proprietary information of the disclosing Party, including all business, financial, technical, and other information marked "confidential" or that by its nature or the circumstances of disclosure should reasonably be regarded as confidential (such as the identity and pricing information related to Company customers). Confidential Information may be in any form or medium. Confidential Information excludes information that (a) is or enters the public domain without breach of this Agreement, (b) the receiving Party lawfully receives from a third party without restriction and without breach of any nondisclosure obligation, (c) the receiving Party knew prior to receipt from the disclosing Party, or (d) the receiving Party developed independently. Each Party agrees (i) not to disclose to any third party or use any Confidential Information of the other except as expressly permitted in this Agreement; (ii) to use the other Party's Confidential Information solely to perform its obligations under this Agreement; and (iii) to take all reasonable measures to maintain the confidentiality of all Confidential Information in its possession or control, which in no event will be less than the measures it uses to protect its own information of similar importance.

    2.  Marketing Partner will not issue any written or oral announcement, press release, or other public release of information that contains information about this Agreement, without the prior written consent of Company.

    3.  If legally required to disclose Confidential Information, the receiving Party shall, if practicable and legally permissible, provide prompt written notice to the disclosing Party and reasonably cooperate in seeking a protective order or other remedy. If a protective order or other remedy is not obtained, the receiving Party shall disclose only the Confidential Information it is legally required to disclose and reasonably assist the disclosing Party in seeking confidential treatment of such information.

    4.  The Data Protection Addendum ("**DPA**") attached hereto as <u>Exhibit C</u> is incorporated into and forms part of this Agreement. Marketing Partner represents and warrants that it will comply with the DPA and applicable Data Protection Laws, and that it maintains commercially reasonable administrative, technical, and physical safeguards consistent with the security requirements set forth in the DPA.

6.  **<u>Term and Termination</u>**

    1.  **Term**. This Agreement commences on the Effective Date and continues until terminated in accordance with this Section. Each SOW shall have its own term as specified therein. The termination or expiration of any individual SOW shall not terminate this Agreement.

    2.  **Termination without Cause**. Either Party may terminate this Agreement for any reason, or no reason, by providing a minimum of thirty (30) days advance written notice to the other Party.

    3.  **Termination for Cause**. Either Party may terminate this Agreement and/or any SOW upon written notice if the other Party materially breaches this Agreement. If the breach is curable, the breaching Party has fifteen (15) days from receipt of notice to cure. If not cured or if incurable, the non-breaching Party may terminate immediately.

    4.  **Suspension**. Company may suspend performance of any campaign or SOW, in whole or in part upon up to forty-eight (48) business hours' written notice to Marketing Partner, or immediately where necessary to mitigate legal, compliance, or client risk. Payment obligations shall be adjusted pro rata based on Services actually performed prior to the effective date of suspension.

    5.  **Termination Based on Legal Changes**. If a material change to Applicable Laws materially affects the legality or compliance risk of the Services, the Parties shall negotiate in good faith for up to thirty (30) days to implement a suitable resolution. If no resolution is reached or either Party reasonably determines continued performance would create material compliance risk, either Party may suspend or terminate the affected Services upon written notice. Notwithstanding the foregoing, either Party may immediately suspend the affected Services in the event of actual or threatened regulatory action or litigation. Any suspension or termination under this Section may be limited to the affected jurisdiction or Services and shall not constitute a breach of this Agreement.

    6.  **Termination Upon Insolvency**. Either Party may terminate this Agreement immediately upon written notice if the other Party becomes insolvent, admits its inability to pay debts as they mature, seeks or is subject to bankruptcy or similar insolvency proceedings that are not dismissed within sixty (60) days, or takes any comparable action in consequence of debt.

    7.  **Effect of Termination**. Upon termination or expiration of this Agreement for any reason, each Party shall promptly return or destroy (at the disclosing Party's election) all Confidential Information of the other Party in its possession or control, and certify such return or destruction in writing upon request.

    8.  **Survival**. All provisions of this Agreement that by their nature are intended to survive termination or expiration shall survive, including without limitation provisions relating to intellectual property, confidentiality and data protection, payment and audit rights, limitation of liability, indemnification, insurance, and governing law.

7.  **<u>Client Non-Solicitation</u>**

    1.  During the term of an applicable SOW and for twelve (12) months thereafter, Marketing Partner shall not, without Company's prior written consent, directly solicit any Company Client for whom Marketing Partner generated Leads, performed Services, or whose identity and business relationship with Company was disclosed to Marketing Partner in writing or through direct campaign collaboration, for the purpose of providing substantially similar services in the same Industry Vertical as set forth in SOW.

    2.  This Section does not restrict: (i) Clients with whom Marketing Partner had a pre-existing business relationship predating the Effective Date, demonstrable by written records; (ii) Marketing Partner's response to a Client inquiry made without any solicitation by Marketing Partner, its affiliates, or Partner Suppliers, provided that Marketing Partner: (A) promptly notifies Company in writing of such inquiry and its intent to engage directly; (B) represents in writing that no solicitation occurred; and (C) upon Company's reasonable request, provides documentation of the unsolicited nature of the inquiry, including copies of the Client's initial communication; (iii) services not substantially similar to those performed under the applicable SOW or in a different Industry Vertical; or (iv) Clients whose identity was not known to Marketing Partner through its performance under an applicable SOW. Company may grant additional written exceptions in its discretion.

    3.  Marketing Partner acknowledges that a breach or threatened breach of this Section may cause Company irreparable harm for which monetary damages may be inadequate, and that Company may seek injunctive relief and any other remedies available at law or in equity.

<!-- -->

8.  **<u>Use of Company Materials</u>**

    1.  Marketing Partner may use Company Materials (including Ad Materials) only as authorized and approved by Company. Marketing Partner shall submit campaign materials to Company for review and written approval prior to launch. No campaign shall be deployed using Company or Client Ad Materials without documented pre‑launch approval from Company.

    2.  Marketing Partner shall not materially modify, edit, or adapt any Company Materials without Company's prior written approval, except for non‑substantive technical formatting changes reasonably necessary to implement the campaign in accordance with agreed specifications, platform requirements, or delivery mechanics.

    3.  Where Company provides Company Materials on behalf of its Client for Client-branded campaigns, Marketing Partner acknowledges and agrees that Company is acting as agent for a disclosed principal, and that the applicable Client is the disclosed principal. For the avoidance of doubt, the foregoing agency relationship extends to any data, targeting parameters, audience data, and other materials that Company receives from or on behalf of Client and makes available to Marketing Partner in connection with such campaigns.

    4.  Marketing Partner remains responsible for the lawful execution of its Services, including compliance with Applicable Laws governing transmission, delivery practices, data handling, and platform requirements, to the extent such obligations relate to Marketing Partner's operational conduct rather than the content of the Company or Client Ad Materials themselves.

9.  **<u>Representations and Warranties</u>**

    1.  Each Party represents and warrants that: (i) it has full authority to enter into and perform this Agreement; (ii) doing so does not violate any other agreement to which it is bound; and (iii) this Agreement constitutes its legal, valid, and binding obligation. Each Party further represents and warrants that any Ad Materials it provides will not infringe, misappropriate, or violate any third party intellectual property rights.

    2.  Marketing Partner further represents and warrants: (i) the Services, Marketing Partner Materials, and Transferred Data comply with Applicable Laws and this Agreement and do not infringe any third party intellectual property rights; (ii) all Transferred Data is obtained lawfully with all necessary rights, consents, and authorizations sufficient to permit Company's Processing of Personal Data for the purposes set forth in this Agreement, and is accurate and current in all material respects; (iii) all Services will be performed in a professional and workmanlike manner consistent with the applicable SOW; (iv) it will not knowingly engage in fraudulent activity or harm Company's or its Clients' reputation, brand, goodwill, systems, tracking, or operations; and (v) it will Process any Company Personal Data, and use any Audience Data made available to it by Company, in each case solely in accordance with its obligations under the Data Protection Addendum.

    3.  Except as expressly set forth in this Agreement, each party disclaims all warranties, representations, and guarantees of any kind, whether express or implied, including any implied warranties of merchantability, fitness for a particular purpose, or non‑infringement. Each party acknowledges that performance under this Agreement involves commercial and regulatory risk, and that neither party is guaranteeing any particular business outcome, volume, revenue, or results.

10. **<u>Limitation of Liability</u>**

    1.  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL COMPANY OR ITS AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, LOSS OF REVENUE, LOSS OF BUSINESS, LOSS OF DATA, BUSINESS INTERRUPTION, OR DAMAGE TO GOODWILL, ARISING OUT OF OR RELATING TO THIS AGREEMENT OR THE SERVICES, EVEN IF COMPANY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES; PROVIDED THAT THE FOREGOING EXCLUSION SHALL NOT APPLY TO DAMAGES ARISING FROM COMPANY'S OWN FRAUD, WILLFUL MISCONDUCT, OR GROSS NEGLIGENCE. COMPANY'S TOTAL AGGREGATE LIABILITY FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THIS AGREEMENT, THE SERVICES, OR ANY SOW, SHALL NOT EXCEED THE FEES PAID OR PAYABLE BY COMPANY TO MARKETING PARTNER UNDER THE APPLICABLE SOW GIVING RISE TO THE CLAIM.

    2.  NO LIMITATION OR EXCLUSION OF LIABILITY SHALL APPLY TO MARKETING PARTNER'S OBLIGATIONS ARISING FROM OR RELATING TO: (i) BREACH OF ITS CONFIDENTIALITY, DATA PROTECTION, OR INFORMATION SECURITY OBLIGATIONS (INCLUDING THE DPA); (ii) MATERIAL VIOLATION OF APPLICABLE LAWS; (iii) INDEMNIFICATION OBLIGATIONS; (iv) FRAUD, WILLFUL MISCONDUCT, OR GROSS NEGLIGENCE; OR (v) INFRINGEMENT, MISAPPROPRIATION, OR VIOLATION OF THIRD-PARTY INTELLECTUAL PROPERTY, PRIVACY, OR PROPRIETARY RIGHTS. MARKETING PARTNER ACKNOWLEDGES THAT THE FEES REFLECT THE ALLOCATION OF RISK SET FORTH IN THIS SECTION.

<!-- -->

11. **<u>Indemnification</u>**

    1.  Each Party ("**Indemnifying Party**") shall indemnify, defend, and hold harmless the other Party and its officers, directors, employees, agents, affiliates, and subsidiaries ("**Indemnified Party**") from any third-party claims, demands, actions, proceedings, governmental investigations (including regulatory enforcement actions), and resulting damages, losses, liabilities, penalties, fines, and reasonable attorneys' fees, to the extent arising out of or relating to: (i) breach of this Agreement, including any SOW, Exhibit, or the DPA; (ii) violation of Applicable Laws in its performance under this Agreement; (iii) gross negligence, willful misconduct, or fraud; (iv) transmission of any virus, malware, or malicious code; and (v) any claim that the Services, Marketing Partner Materials, or Transferred Data (as provided by Marketing Partner) infringe, misappropriate, or violate third-party intellectual property, privacy, or proprietary rights.

    2.  Indemnification is conditioned upon the Indemnified Party: (i) providing prompt written notice of the claim (delay relieves the Indemnifying Party only to the extent it is materially prejudiced); (ii) providing reasonable cooperation; and (iii) allowing the Indemnifying Party to control the defense and settlement. The Indemnified Party may participate at its own expense. The Indemnifying Party shall not settle any claim without the Indemnified Party's prior written consent (not to be unreasonably withheld), except that the Indemnified Party may withhold consent in its sole discretion if the settlement includes an admission of liability by the Indemnified Party, imposes ongoing obligations on the Indemnified Party, or does not include a full and unconditional release of the Indemnified Party.

<!-- -->

12. **<u>Insurance</u>**

During the term of this Agreement and for one (1) year thereafter, Marketing Partner shall maintain, at its own expense, commercially reasonable insurance appropriate to the Services, including: (i) commercial general liability insurance with limits of not less than \$1,000,000 per occurrence and \$2,000,000 aggregate; and (ii) cyber liability insurance with limits of not less than \$1,000,000. Marketing Partner shall, upon Company's request, provide a certificate of insurance and name Company and its affiliates as additional insureds on the commercial general liability policy (to the extent available) with waiver of subrogation (where commercially available). Marketing Partner shall provide thirty (30) days' prior written notice of cancellation or material reduction in coverage. Company may waive or modify these requirements as mutually agreed in a specific SOW.

13. **<u>Choice of Law and Notices</u>**

    1.  This Agreement is governed by the laws of the State of New York without regard to conflict of law principles. Each Party irrevocably consents to the exclusive jurisdiction and venue of the courts of the State of New York located in New York County or the United States District Court for the Southern District of New York for any dispute arising under or relating to this Agreement. EACH PARTY KNOWINGLY AND VOLUNTARILY WAIVES ANY RIGHT TO TRIAL BY JURY. Marketing Partner waives any objection to the convenience of the forum.

    2.  All notices under this Agreement must be in writing and sent to the addresses set forth in the applicable SOW (or as updated by written notice to the other Party). Notices may be delivered by email or overnight courier and are deemed received: (i) if by email, upon transmission; or (ii) if by courier, upon delivery. Critical notices (termination, breach, indemnification, or litigation) must be sent by both email and overnight courier. Notices to Company must include a copy to contracts@convergemarketing.com.

14. **<u>General</u>**

    1.  The failure of either Party to insist upon or enforce strict performance by the other Party of any provision of the Agreement or to exercise any right under the Agreement will not be construed as a waiver or relinquishment to any extent of such Party's right to assert or rely upon any such provision or right in that or any other instance; rather the same will be and remain in full force and effect.

    2.  Neither Party shall be liable for any delay or failure to perform due to causes beyond its reasonable control that it cannot overcome through reasonable diligence (including acts of God, fire, flood, earthquake, pandemic, war, terrorism, government action, or labor disputes), provided the non-performing Party gives prompt notice to the other Party. Force majeure relief does not apply to failures or delays caused by subcontractors, agents, or service providers engaged by a Party to perform its obligations under this Agreement.

    3.  The Parties are independent contractors. Neither Party is an agent, employee, partner, or joint venture of the other, and this Agreement does not create any such relationship or impose related liabilities. Each Party is responsible for its own employees and tax, employment, and workers' compensation obligations. Marketing Partner's engagement is non-exclusive, and Company may engage other vendors at any time and does not guarantee any minimum volume or fees.

    4.  If any provision of the Agreement is held invalid or unenforceable by a court with jurisdiction over the parties, (i) such provision will be restated to reflect as nearly as possible the original intentions of the parties in accordance with applicable law; and (ii) the remaining terms, provisions, covenants, and restrictions of the Agreement will remain in full force and effect.

    5.  Except as otherwise specified, the rights and remedies granted to a Party under the Agreement are cumulative and in addition to, not in lieu of, any other rights and remedies which the Party may possess at law or in equity.

    6.  This Agreement (comprising these General Terms, the Exhibits, and any executed SOWs) constitutes the entire agreement between the Parties and supersedes all prior agreements, whether written or oral, with respect to the subject matter hereof. No amendment or modification of any provision of an executed SOW will be valid unless set forth in a written instrument signed by both Parties.

    7.  Neither Party may assign this Agreement without the other Party's prior written consent, except that either Party may assign without consent (but with prior written notice) to: (i) a parent or wholly-owned subsidiary; or (ii) a successor in connection with a merger, acquisition, sale of substantially all assets, or change of control. This Agreement binds and benefits the parties and their permitted successors and assigns.

    8.  The captions and headings used in this Agreement are inserted for convenience only and will not affect the meaning or interpretation of the Agreement.

    9.  These General Terms are incorporated by reference into each SOW executed by the Parties and shall be binding upon execution of such SOW without the need for separate signatures on these General Terms.

**

---

<a id="exhibit-a"></a>

## **EXHIBIT A: LEAD GENERATION SERVICES**

<div class="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 mb-8 mt-4"><div><span class="font-semibold">Posted:</span> July 27, 2026</div><div><span class="font-semibold">Effective Date:</span> July 27, 2026</div></div>

These terms apply to all Lead Generation Services. Capitalized terms not defined herein have the meaning set forth in the Agreement. In the event of conflict, this Exhibit A controls over the General Terms (except that <u>Exhibit C</u> controls as to data protection matters). Acceptance criteria for Qualified User Actions are set forth in <u>Exhibit A-1</u>.

### **Lead Seller Specific Obligations**

Marketing Partner represents and warrants:


all Leads are collected in compliance with Applicable Laws, from Consumers who have affirmatively expressed specific interest in obtaining a quote or communication regarding products or services, were clearly informed that their information would be used to provide such products, services, or quotes, and from whom Marketing Partner has obtained prior express written consent authorizing Company or its Clients to contact the Consumer via the specific communication methods used (including automated or prerecorded voice calls, text messages, or other automated technologies), in compliance with the TCPA (47 U.S.C. 227), applicable state mini-TCPA statutes, and any more restrictive state-law requirements;

it will honor Consumer revocations of consent as required by Applicable Laws, including maintaining applicable suppression lists, and shall notify Company promptly of any revocation applicable to Leads previously provided to Company;


it will implement and maintain commercially reasonable measures designed to detect and prevent fraudulent or invalid Leads and promptly notify Company upon becoming aware of fraudulent activity;


it will not offer any individual or entity any incentive (including without limitation, any payment, rebate, discount or other benefit) to entice a Consumer to become a Lead, except for incentives expressly approved in writing by Company or Client for a specific campaign;


it will provide to Company within two (2) business days of request documentary proof that each Lead was obtained with valid consent as required by Applicable Laws, including: (i) consent and disclosure language presented to the Consumer; (ii) the Consumer's affirmative action manifesting consent; (iii) date, time, and source of the Lead; and (iv) confirmation that consent has not been revoked; and


it will maintain accurate, verifiable records of Consumer consent for at least five (5) years from the date of collection, or such longer period as required by Applicable Laws or the pendency of any litigation, regulatory inquiry, or investigation relating to the Lead.

### **Call Lead Distribution and Transfers**


Certain User Actions may consist of Inbound Calls or Warm Transfers, in response to direct mail, digital advertising, or other marketing materials that include telephone numbers designated or tracked by Company or its third party call tracking provider. 


Except as expressly authorized in an applicable SOW, Marketing Partner does not operate a call center or place outbound calls to Consumers. Where authorized by an applicable SOW, Marketing Partner may operate call center functionality, including Warm Transfers to Company's or Client's designated recipients. All calls must be routed to call centers operated by Company's Clients, who are solely responsible for call handling, scripts, disclosures, dialing technologies, and compliance with Applicable Laws. Company's role is limited to receiving, tracking, validating, and attributing Leads and User Actions as an intermediary and shall not be construed to make Company a telemarketer, dialer, or call center operator.


Warm Transfers may be used only where expressly authorized in the applicable SOW and are subject to the qualification and validation criteria set forth therein. Marketing Partner represents and warrants it (i) maintains operational, technical, and procedural controls to ensure all call recording associated with Warm Transfers complies with Applicable Laws, including state call-recording and consent requirements, and (ii) maintains a written Warm Transfer compliance plan, a copy of which shall be provided to Company within twenty-four (24) hours of request.


Marketing Partner may utilize trackable telephone numbers provided by Company or its third-party call tracking platform. Company's tracking systems are the system of record for call attribution, validation, billing, and payment. Marketing Partner may use call tracking data solely for delivery, reporting, validation, and compliance purposes.


Upon Company's reasonable written request and as permitted by law, Marketing Partner shall make call recordings and related call metadata available for validation, compliance, or dispute resolution purposes.


**Exclusivity**. Where Marketing Partner transfers Leads to Company under a SOW, such Leads shall be sold on an exclusive basis within the applicable Industry Vertical to the extent and for the duration set forth in the applicable SOW, during which Marketing Partner shall not remarket, resell, or otherwise reuse such Leads without Company's express written consent.

**<u>\</u>**

**<u>EXHIBIT A-1</u>**

**LEAD GENERATION SERVICES**

**QUALIFIED USER ACTIONS AND ACCEPTANCE CRITERIA**

This <u>Exhibit A-1</u> governs the qualification, acceptance, billing, and payment of Qualified Actions for Lead Generation Services. Capitalized terms not defined herein have the meanings set forth in the Agreement.

1.  **<u>Definitions</u>**

"**Bot Traffic**" means any User Action not initiated by a human user, including actions generated by automated technologies such as robots, spiders, scripts, emulators, or similar artificial means that do not reflect genuine user interest or intent.

"**Conversion**" means a Consumer who has converted to a sale or taken other defined action as specified in the applicable SOW.

**"Duplicate"** means a User Action that contains the same primary contact identifier as a User Action previously received by Company for the same Industry Vertical from any source within the Duplicate Window. For purposes of this definition, the primary contact identifier is (i) the email address for Leads and (ii) the caller's telephone number (ANI) for Inbound Calls and Warm Transfers. Qualified Actions that share ancillary or non-primary data but have distinct primary contact identifiers shall not be considered Duplicates.

**"Duplicate Window**" means the rolling thirty (30) calendar-day period following receipt of a User Action by Company, unless otherwise specified in the applicable SOW, which may define a client-specific Duplicate Window applicable to a particular campaign or Industry Vertical.

"**Inbound Call**" means a telephone call initiated by a Consumer to a tracking number designated by Company and attributed to Marketing Partner in accordance with Company's call tracking system.

"**Invalid Action**" means any User Action that: (a) constitutes Bot Traffic or fraudulent activity; (b) is a Duplicate; (c) is missing required fields specified in the SOW; or (d) otherwise fails to meet the validation criteria expressly set forth in this Exhibit or the applicable SOW.

"**Lead**" has the meaning set forth in the Agreement and for purposes of this <u>Exhibit A-1</u>, also means a bona fide Consumer submission of a lead capture form containing all required fields specified in the applicable SOW.

"**Link-Out**" means a Consumer who has been directed to and landed on Company's designated landing page.

"**Qualified Action"** means a Lead, Inbound Call, Link-Out, Conversion, or other User Action designated as billable in the applicable SOW and that meets the criteria set forth in this Exhibit and such SOW and complies with all Applicable Laws and this Agreement.

"**Return Period**" means seven (7) calendar days from delivery of a User Action to Company, unless a different period is specified in the SOW.

**"User Action**" means any Lead, Inbound Call, Link‑Out, Conversion, or other User Action delivered by Marketing Partner to Company.

**"Warm Transfer"** means a Consumer-initiated or Consumer-authorized telephone call first answered by or on behalf of Marketing Partner (or its authorized Partner Suppliers) that is then actively transferred in real time to a Company or Client designated call recipient.

2.  **<u>Delivery of User Actions</u>**

    1.  Marketing Partner shall deliver User Actions to Company as authorized in the applicable SOW and in the manner specified by Company. Volume projections in SOWs are estimates only and not guaranteed minimums or maximums, unless expressly agreed otherwise in the SOW.

    2.  Marketing Partner must integrate with Company's tracking technologies and data transfer methods and must immediately notify Converge of any technical transmission issues. The parties agree to cooperate in good faith to ensure successful integration and data flow.

3.  **<u>Validation and Return Procedures</u>**

    1.  Company's tracking systems are the system of record for validation, billing, and payment of Qualified Actions.

    2.  All User Actions remain subject to validation in accordance with this Exhibit and the Agreement. Payment of any invoice, or failure to identify an Invalid Action within the Return Period, does not constitute acceptance or waive Company's rights regarding compliance violations or defects not reasonably identifiable during such period. Company may credit or offset amounts paid for Invalid Actions identified after invoicing or through end-of-month or periodic reconciliation, unless otherwise agreed in writing in the applicable SOW. Upon reasonable notice, Company may audit records reasonably necessary to verify invoiced Qualified Actions and compliance with this Exhibit, subject to reasonable confidentiality restrictions.

4.  **<u>Invoicing and Payment</u>**

    1.  Marketing Partner shall invoice Company in accordance with the applicable SOW and must submit invoices within thirty (30) days of the applicable billing period. Each invoice must include, at a minimum: the SOW reference, reporting period, quantity of Qualified Actions, unit pricing, total fees, and sufficient detail to permit reconciliation against Company's records. Company shall pay undisputed amounts within the timeframe set forth in the applicable SOW, or if not specified, within thirty (30) days of receipt of a valid invoice.

    2.  Company may reasonably dispute any invoice or portion thereof in good faith and may suspend payment of disputed amounts pending resolution or amounts reasonably related to suspected compliance violation or investigation.

    3.  Sections relating to validation, credits, offsets, audit, and payment disputes shall survive termination of the Agreement.

---

<a id="exhibit-b"></a>

## **EXHIBIT B: EMAIL MARKETING TERMS**

<div class="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 mb-8 mt-4"><div><span class="font-semibold">Posted:</span> July 27, 2026</div><div><span class="font-semibold">Effective Date:</span> July 27, 2026</div></div>

These Email Marketing Terms apply to all Email Services. Capitalized terms not defined herein have the meaning set forth in the Agreement. In the event of any conflict between these Email Marketing Terms and the Agreement (excluding the Data Processing Addendum in <u>Exhibit C</u>, which shall control with respect to data protection matters), this <u>Exhibit B</u> shall control with respect to Email Services.

1.  **<u>Framework</u>**

This <u>Exhibit B</u> applies to both partner‑branded email campaigns and client‑branded email campaigns.

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

---

<a id="exhibit-c"></a>

## **EXHIBIT C: DATA PROCESSING ADDENDUM**

<div class="flex flex-col sm:flex-row sm:gap-6 text-sm text-gray-600 mb-8 mt-4"><div><span class="font-semibold">Posted:</span> July 27, 2026</div><div><span class="font-semibold">Effective Date:</span> July 27, 2026</div></div>

This Data Processing Addendum ("**DPA**") is incorporated into the Marketing Partner Agreement between Marketing Partner and Company. In the event of any conflict between the Agreement and this DPA, the terms of this DPA shall control.

### DEFINITIONS

Capitalized terms not otherwise defined herein shall have the meaning given to them in the Agreement. In this DPA, the following terms have the meanings set out below:


"**Audience Data**" means Personal Data made available to Marketing Partner by Company or its Clients for audience activation, targeted advertising, suppression, exclusion, de-duplication, measurement, or related programmatic advertising purposes, including seed lists, customer match lists, custom audience lists, exclusion or suppression lists, hashed identifiers, device identifiers, advertising identifiers, IP addresses, cookie identifiers, and associated audience attributes. 


"**Campaign Data**" means data generated or collected by Marketing Partner in connection with Company or Client branded campaigns governed by Company's or Client's privacy policy, solely for the Processor purposes set forth in <u>Exhibit C‑1</u>. Campaign Data excludes data collected under Marketing Partner's own branding or privacy policy.

"**Company Personal Data**" means any Personal Data Processed by Marketing Partner or its Sub-Processor(s), solely on behalf of Company or its Clients, including Campaign Data, Lead Disposition Data, Audience Data.

"**Consumer**" means an identified or identifiable natural person whose Personal Data is being Processed.

"**Consumer Health Data"** means Sensitive Personal Data regulated as "consumer health data," "health data," or similar categories under state privacy laws, including information that identifies, relates to, or permits inference of a Consumer's injury, health condition, diagnosis, treatment, or health status in connection with personal injury or bodily harm.

"**Data Protection Assessment**" means an assessment of the impact of processing operations on the protection of Personal Data and Consumer rights, as required by applicable Data Protection Laws.

"**Data Protection Laws**" means any and all applicable municipal, state, or federal data protection, security, or privacy-related laws, statutes, directives, or regulations of the United States, including but not limited to the California Consumer Privacy Act of 2018, Cal. Civ. Code §§ 1798.100 et seq. ("**CCPA**"), as each may be amended, extended or re-enacted from time to time.

**"Lead Disposition Data"** means Company Personal Data indicating the outcome or status of a Lead (e.g., accepted, rejected, converted), which Company may make available to Marketing Partner solely for the Processor purposes set forth in <u>Exhibit C-1</u>, and not for audience modeling, targeting optimization, or lead generation expansion.

**"Personal Data"** means any information defined as personal data, personal information, or its equivalents as defined in Applicable Laws from time to time.

"**Security Incident**" means any security incident that adversely impacts the security of Company Personal Data.

**"Sensitive Personal Data"** means Personal Data classified as "Sensitive Personal Data," "Sensitive Data," or a substantially similar category under applicable Data Protection Laws, including inferred or derived information treated as sensitive under such laws.

"**Sub-Processor**" means any subcontractor appointed by Marketing Partner (when acting as a Processor or Service Provider) to Process Company Personal Data as a Processor or Service Provider.

The terms "**Business**," "**Business Purpose**," "**Controller**," "**Process**," "**Processor**," "**Sell**," "**Service Provider**," "**Share**" and "**Third Party**" shall have the same meaning as in the Data Protection Laws, and their cognate terms shall be construed accordingly.

### ROLES OF THE PARTIES AND PROCESSING PURPOSES


Where Marketing Partner independently operates marketing campaigns under its own brands and privacy policies, or obtains Leads from its affiliate network, publishers, or other third-party suppliers operating under their own brands and privacy policies, and discloses Personal Data from such campaigns to Company, each party acts as an independent Controller under applicable Data Protection Laws, and Company acts as a Third Party under the CCPA (collectively, the "**Independent Controller Activities**").

When Marketing Partner Processes Company Personal Data in connection with the Services, Company and/or its Client acts as the Controller, and Marketing Partner acts as a Processor or Sub-Processor to Company and as a CCPA Service Provider. This applies only to Processing of Company Personal Data by Marketing Partner on behalf of Company and/or its Clients, in accordance with Company's documented instructions, and solely for the Processor purposes described in Exhibit C-1.


Personal Data shall be processed for the purposes set forth in Exhibit C-1.

### INDEPENDENT CONTROLLER ACTIVITIES

Where Marketing Partner independently operates marketing campaigns under its own brands and privacy policies, or obtains Leads from its Partner Suppliers operating under their own brands and privacy policies, and discloses Personal Data from such campaigns to Company, each party acts as an independent Controller (or CCPA third party as applicable) under applicable Data Protection Laws.


Each Party agrees to: (i) comply with applicable Data Protection Laws; (ii) maintain a record of the Processing of the Personal Data under its responsibility; (iii) implement appropriate technical and organizational measures to ensure a level of security appropriate to the risks that are presented by the Processing of the Personal Data that it carries out, in particular to protect the Personal Data against accidental or unlawful destruction or accidental loss, alteration, unauthorized disclosure or access; and (iv) ensure that its affiliates, employees, contractors, agents, officers, and professional service Marketing Partners who process Personal Data are subject to a contractual obligation to keep Personal Data confidential.

Marketing Partner Obligations. In connection with the Independent Controller Activities, Marketing Partner shall be solely responsible for its collection of Personal Data from Consumers and agrees that it shall comply with the following obligations:

*Privacy Notices*. Marketing Partner shall provide Consumers with all required privacy notices, disclosures, and choice mechanisms at or before the point of collection, including accurate disclosure of: (i) categories of Personal Data collected; (ii) purposes for which Personal Data is collected and disclosed; (iii) whether Personal Data is sold or shared, including to Company and its Clients; and (iv) Consumer rights with respect to such Personal Data.

*Consents*. In addition to any consents required under the TCPA or other laws regulating marketing communications as addressed separately in the Agreement, Marketing Partner shall obtain and maintain any Consumer consents required under applicable Data Protection Laws for the collection, use, or disclosure of Personal Data, including Sensitive Personal Data, in accordance with the applicable legal standard.

*Opt‑Outs*. Marketing Partner shall (i) offer Consumers the right to opt out of the sale or sharing of their Personal Data where required by applicable Data Protection Laws; (ii) detect, honor, and effectuate Global Privacy Control ("GPC") signals and other legally recognized universal opt‑out signals; and (iii) maintain records evidencing the receipt and handling of opt‑out requests in accordance with applicable law.

*Consumer Requests*. Marketing Partner shall be responsible for receiving, verifying, and responding to Consumer requests relating to Personal Data it collects as an independent controller, including requests to access, delete, correct, or opt out. To the extent required by applicable law, Marketing Partner shall (i) notify Company within one (1) business day of receiving any Consumer request or complaint relating to Personal Data previously sold or shared with Company; (ii) timely communicate valid opt-out, deletion, or correction requests to Company; (iii) provide Company with sufficient information to enable Company and Client to honor such requests with respect to Personal Data in their possession or control, including identifiers and details sufficient to locate and suppress the affected records (e.g., email address, phone number, or hashed equivalents); and (iv) confirm that Marketing Partner has honored the request with respect to its own processing and will suppress the Consumer from any future transfers to Company or its Clients.

*Affiliate and Supplier Accountability*. Where Personal Data is collected by Marketing Partner's affiliate network, publishers, or other suppliers acting as independent controllers, Marketing Partner shall implement reasonable contractual and operational measures to ensure that such parties (i) provide legally compliant consumer-facing notices; (ii) honor Consumer opt-out and deletion requests, including GPC signals; and (iii) pass through required Consumer rights signals to Marketing Partner as necessary to enable compliance.

*Data Broker and Delete Act Obligations*. Marketing Partner is responsible for its own compliance with any applicable data broker registration requirements or California Delete Act obligations pursuant to California Civil Code §§ 1798.99.80--1798.99.89 arising from its Independent Controller Activities and shall not disclose Personal Data to Company in violation of any applicable deletion or opt‑out restriction.

*Recordkeeping*. Marketing Partner shall maintain records reasonably necessary to demonstrate compliance with applicable Data Protection Laws. Upon Company's reasonable request, Marketing Partner shall provide reasonable assurances of compliance, which may include written attestations or descriptions of its privacy practices. Marketing Partner shall promptly notify Company if it can no longer meet its obligations under applicable Data Protection Laws.

*Sensitive Personal Data*. Subject to applicable Data Protection Laws and subsections 3.3.9 and 3.3.10 below, Marketing Partner may collect and disclose Sensitive Personal Data to Company only where such processing is clearly disclosed in its consumer-facing privacy notice, is reasonably necessary and proportionate to the disclosed purposes, compliant with applicable Data Protection Laws, and supported by any required Consumer consent.

 *Consumer Health Data -- Personal Injury Lead Generation*. Marketing Partner may collect and disclose Consumer Health Data only where the Consumer affirmatively provides such information, Marketing Partner provides clear disclosures regarding the categories of data collected, purposes of use and disclosure, and categories of recipients, and any required express consent is obtained in compliance with applicable Data Protection Laws. Such data shall be limited to the minimum reasonably necessary for the requested services and shall not be used or disclosed for unrelated purposes. Marketing Partner shall maintain records sufficient to demonstrate compliance. The Parties acknowledge that neither party is a covered entity or business associate under the Health Insurance Portability and Accountability Act of 1996 ("HIPAA") with respect to the Consumer Health Data described in this Section.

*Prohibited Sensitive Personal Data*. In performing the Services under the Agreement, Marketing Partner shall not intentionally collect or disclose to Company Sensitive Personal Data relating to: (i) known children under eighteen (18); (ii) sex life, sexual orientation, or gender identity; (iii) national origin, citizenship, or immigration status; (iv) biometric identifiers; (v) trade union or labor organization membership; (vi) government‑issued identifiers; or (vii) financial account numbers or authentication credentials. Marketing Partner shall implement reasonable measures to prevent intentional collection or disclosure of such information and promptly remediate any inadvertent collection. This Section does not restrict collection of general interest information that excludes identifiers or credentials. 

Company will: (i) provide Consumers with legally sufficient privacy notices and choice mechanisms for Company's Processing activities, including opt-out of sale or sharing where applicable; (ii) Process Personal Data from Marketing Partner solely for purposes authorized by this DPA and take commercially reasonable steps to require its end clients to do the same; and (iii) reasonably cooperate with Marketing Partner to honor valid revocation of consent, opt-out, or deletion requests forwarded by Marketing Partner with sufficient identifying information, provided Company has no obligation to monitor or ensure Marketing Partner's compliance with its own legal obligations.

### CONTROLLER-TO-PROCESSOR ACTIVITIES

**Scope**. This Section 4 applies to the Processing of Company Personal Data. 

**Instructions.** Marketing Partner shall comply with applicable Data Protection Laws and process Company Personal Data only based on documented instructions from Company. If Marketing Partner believes an instruction infringes applicable Data Protection Laws, Marketing Partner shall immediately inform Company. The subject matter, duration, nature, purpose, types of Company Personal Data, and categories of Consumers processed are specified in the Agreement or as otherwise authorized in writing by Company.

**Processing Prohibitions**. Marketing Partner shall Process Company Personal Data only as necessary to perform the Services, and for no other purpose. Marketing Partner will not: (i) combine Company Personal Data with other Personal Data except as necessary to perform the Services in a manner that does not enable Marketing Partner to build Consumer profiles for its own purposes or enable cross-contextual behavioral advertising; (ii) use Company Personal Data to train, develop, or improve AI, machine learning, or algorithmic systems; (iii) create lookalike audiences, propensity models, or predictive analytics using Company Personal Data; (iv) Sell or Share Company Personal Data; (v) use Company Personal Data after termination or expiration of the Agreement or applicable SOW; or (vi) collect data elements not expressly authorized by Company in writing. For clarity, Marketing Partner may use De-Identified Data in accordance with this DPA. 

**Audience Data**. Notwithstanding anything to the contrary herein, Marketing Partner may Process Company Personal Data consisting of Audience Data solely as expressly permitted under Exhibit C-1 (Audience Data - Activation, Suppression, and Duplicate Prevention). 

**Engagement of Sub-Processors**. Company authorizes Marketing Partner to use Sub-Processors (i.e. third parties engaged by Marketing Partner to Process Company Personal Data solely on Marketing Partner's behalf) subject to the following conditions. For clarity, Sub-Processors do not include affiliate networks, publishers, or other third parties that independently collect Personal Data under their own branding or privacy policies. 

Notice and Objection Rights: Marketing Partner will provide a current Sub-Processor list within ten (10) business days of Company's written request and notify Company of any additions or replacements. Company may object on reasonable data protection grounds within ten (10) business days, and the parties shall work in good faith to resolve.

Special Approvals: Marketing Partner must obtain Company's prior written approval before engaging any Sub-Processor that will process Consumer Health Data or store Personal Data outside the United States. If no solution can be found within thirty (30) days of an objection, Company may terminate the affected Services without penalty.

Sub-Processor Management Obligations: Marketing Partner will: (i) conduct reasonable due diligence on each Sub-Processor; (ii) impose data protection terms requiring protection of Company Personal Data consistent with this Addendum; (iii) provide reasonable assurances of appropriate data protection obligations upon request; and (iv) remain responsible for Sub-Processor acts or omissions that would breach this Addendum.

**Confidentiality**. Marketing Partner's personnel and Sub-Processors shall keep Company Personal Data confidential.

**Cooperation**. Marketing Partner shall provide all such reasonable and timely assistance and information necessary to demonstrate that Marketing Partner's Processing of Company Personal Data complies with applicable Data Protection Law.

**Consumer Requests**. Company will inform Marketing Partner of Consumer requests related to Company Personal Data that Marketing Partner must address in its capacity as a Processor. If a Consumer request is made directly to Marketing Partner, Marketing Partner shall not respond without Company's prior authorization, unless legally compelled. Marketing Partner shall cooperate with Company or its Client to respond to Consumer requests as required under Data Protection Law.

**Data Retention.** Marketing Partner shall delete Company Personal Data within thirty (30) days of completing the Services requiring such data, unless retention is: (a) required by Applicable Laws; (b) necessary to maintain compliance records (including lead-level consent records, suppression and opt-out logs, and call or delivery metadata required for validation, billing, audit, or dispute resolution) needed to demonstrate compliance with Applicable Laws or defend legal claims, in which case such records shall not be retained longer than five (5) years from the relevant event (unless a longer period is required by Applicable Laws or legal hold); or (c) necessary to perform ongoing Services under a SOW. Upon termination or expiration, Marketing Partner shall (at Company's election) destroy or return all Company Personal Data. Data retained solely in secure archival or backup systems for disaster recovery, business continuity, or legal compliance shall remain subject to this Agreement's protections and be deleted within seven (7) years of creation, unless a longer period is required by Applicable Laws or legal hold.

**Security Measures**. Marketing Partner shall implement and maintain appropriate technical and organizational measures designed to ensure a level of security appropriate to the risk presented by the Processing of Company Personal Data, taking into account the state of the art, costs of implementation, and the nature, scope, context, and purposes of Processing. Where Company Personal Data includes Sensitive Personal Data or Consumer Health Data, Marketing Partner shall implement heightened security measures commensurate with the nature of the data. At a minimum, such measures shall include, as appropriate: (i) encryption of Personal Data in transit and at rest where technically feasible; (ii) access controls limiting Company Personal Data to authorized personnel; (iii) secure authentication mechanisms, including multi‑factor authentication where appropriate; (iv) regular security monitoring, patching, and updates; (v) network security controls; (vi) secure deletion procedures; (vii) written information security policies; (viii) security training for personnel; and (ix) a written incident response plan. Marketing Partner shall periodically test, assess, and update such measures as necessary.

**Security Assessments**. Upon Company's request, Marketing Partner will provide a summary copy of its available independent audit reports (such as NIST, SOC2, ISO27001) or, if unavailable, will reasonably cooperate with an audit or assessment of its security measures conducted by Company or its client. Such reports are subject to the confidentiality provisions of the Agreement.

**Security incidents.** Upon becoming aware of a Security Incident, Marketing Partner shall notify Company without undue delay and in any event no later than forty‑eight (48) hours. Marketing Partner shall provide such information and cooperation as reasonably requested to enable Company or its client to comply with applicable Data Protection Laws, and shall take all reasonable measures to remediate or mitigate the effects of the Security Incident. Marketing Partner shall keep Company reasonably informed of material developments relating to the Security Incident. Each Party shall bear its own internal costs in responding to a Security Incident. To the extent a Security Incident is caused by Marketing Partner's failure to comply with this DPA (including its security obligations), Marketing Partner shall reimburse Company for reasonable, documented third‑party costs incurred to (i) investigate and remediate the Security Incident, and (ii) comply with applicable breach notification obligations, in each case to the extent related to Company Personal Data affected by the Security Incident.

(a) <u>DE-IDENTIFIED DATA</u>. Nothing in this DPA prevents Marketing Partner from using data that cannot reasonably identify, relate to, describe, be capable of being associated with, be linked directly or indirectly with, or be reasonably be used to infer information about an identifiable natural person that has been de‑identified or aggregated in accordance with applicable privacy laws ("**Deidentified Data**"), provided that Marketing Partner shall: (i) take reasonable technical and organizational safeguards to prevent re‑identification to ensure that the Deidentified Data cannot be associated with an individual or household; (ii) publicly commit to maintain and use the Deidentified Data only in a de-identified fashion and not attempt to re-identify the data, unless otherwise permitted by applicable Data Protection Laws; and (iii) contractually obligate any recipients of the Deidentified Data, including any subcontractors, to comply with the requirements of this section.

DATA PROTECTION ASSESSMENTS. Upon Company's request, Marketing Partner shall provide Company with all reasonably necessary information needed for Company to carry out a Data Protection Assessment related to Company's use of the Services, to the extent that Company does not otherwise have access to the relevant information and that such information is reasonably available to Marketing Partner. Marketing Partner shall provide reasonable assistance to Company in its cooperation or prior consultation with Regulatory Authorities in the performance of its tasks relating to this Section.

GEOGRAPHIC SCOPE. This DPA applies to Personal Data originating from the United States. Marketing Partner represents and warrants that it will store and process all Personal Data exclusively within the United States and will not transfer such data outside the United States, unless otherwise agreed in advance and in writing by Company. Marketing Partner shall comply with all applicable U.S. export laws and regulations and shall not, nor permit others to, sell, resell, license, provide access to, or transfer any Personal Data to any "country of concern" or "covered person," as defined by applicable law, executive order, rule, or regulation (including 28 CFR part 202). If Marketing Partner knows or suspects that a country of concern or covered person has accessed Personal Data, it shall immediately notify Company in writing within twenty-four (24) hours. Marketing Partner represents and warrants that it is not a covered person and is not, directly or indirectly, more than 50% owned by any country of concern, entity from such country, or covered person. Marketing Partner shall provide at least thirty (30) days' prior written notice if it determines that storage or processing outside the United States is necessary to comply with applicable law, specifying the legal basis for such necessity, the countries involved, and the security measures to be implemented. Company may object within fifteen (15) business days of receiving such notice, and if Company objects, Marketing Partner shall not proceed with such storage or processing and the parties shall work together in good faith to find an alternative solution. If no solution can be found within thirty (30) days, Company may terminate the affected Services or Agreement without penalty or liability.


**EXHIBIT C‑1: PURPOSES OF PROCESSING AND SCOPE OF DATA USE**

This <u>Exhibit C-1</u> forms part of the DPA. Capitalized terms not defined herein have the meanings in the Agreement or DPA.

1.  **INDEPENDENT CONTROLLER ACTIVITIES (Lead Generation Transferred Data)** 

This Section 1 applies to Personal Data disclosed, sold, or shared (as defined under applicable Data Protection Laws) by Marketing Partner to Company as part of its Lead Generation Services. Marketing Partner discloses such Personal Data to Company and/or Company's Clients as independent controllers or CCPA third parties for the purposes below, subject to applicable Data Protection Laws. The purposes set forth below describe the minimum and core purposes and constitute the "limited and specified purposes" where required under applicable Data Protection Laws.

*(a) Lead Generation, Transfer, and Commercialization.* Generating and obtaining Leads through Marketing Partner-branded websites, media, advertisements, and marketing campaigns (including through Partner Suppliers), and transferring such Leads to Company and/or Company's Clients for receipt, storage, validation, deduplication, scoring, routing, commercial monetization, and engagement.

*(b) Direct Outreach, Email Marketing, and Relationship Management.* Enabling Company and its Clients to contact Leads for direct marketing, promotional, informational, or sales-related communications (including via email, telephone, or other channels), customer relationship management, Lead follow-up, Lead nurturing, and lifecycle engagement activities, in accordance with Applicable Laws, including enabling Company's Clients to ingest, integrate, and manage Leads within their internal sales, marketing, customer support, and analytics systems.

*(c) Marketing Performance Measurement and Optimization.* Measuring, analyzing, and reporting on campaign performance, Lead quality, conversion activity, monetization effectiveness, and campaign effectiveness, and using performance insights to improve and optimize future campaigns, marketing operations, demand allocation, and service delivery.

*(d) Tracking and Analytics.* Processing campaign-level and user-level tracking data, event data, referral data, timestamps, identifiers, and related metadata to evaluate user engagement, attribution, and campaign performance, provided such processing is reasonably necessary and proportionate to the disclosed purposes.

*(e) Fraud Prevention and Security.* Detecting, preventing, and investigating fraudulent, invalid, deceptive, or malicious activity related to Lead generation (including from Partner Suppliers), and protecting the integrity, security, and reliability of Marketing Partner's Lead generation systems, campaigns, and distribution channels.

*(f) Compliance and Legal Obligations.* Complying with Applicable Laws, regulations, audits, investigations, and lawful requests, and maintaining records and documentation necessary to demonstrate compliance with Data Protection Laws and contractual obligations, including responding to and defending against regulatory inquiries, enforcement actions, audits, consumer complaints, or litigation.

*(g) Internal Business Operations.* Operating, managing, analysing, and improving Company's internal business operations related to Lead intake and commercialization, including billing, accounting, forecasting, reporting, reconciliation, quality assurance, dispute resolution, client servicing, benchmarking, and performance analysis, as well as creating and using Company Data for internal business purposes, to the extent reasonably necessary and proportionate to the disclosed purposes.

\(h\) *Multi-Buyer Distribution and Demand Optimization*. Distributing, allocating, or re-routing Leads and related Personal Data among multiple buyers, Clients, or demand partners; operating buyer prioritization logic, acceptance thresholds, caps, and related monetization mechanisms; and managing demand optimization over time.\

(i) *Data Set Creation and Reuse*. Creating, maintaining, and reusing aggregated or segmented data sets, analytics, and insights derived from Lead and campaign data for operational, analytical, commercial, and service improvement purposes, including use across campaigns, customers, and industry verticals.

\(j\) *Audience Creation, Distribution, and Targeted Advertising*. Creating, deriving, and maintaining data sets and segments; licensing, distributing, or otherwise making available such data sets or segments to buyers, advertisers, platforms, or demand partners for advertising, marketing, and targeting purposes; and enabling the delivery of targeted advertising and marketing communications.\

(k) *Cross-Vertical and Downstream Use*. Using Personal Data in connection with additional products, services, or offerings beyond the original Industry Vertical, where reasonably related to disclosed purposes and permitted under Applicable Data Protection Laws.

To the extent permitted by applicable Data Protection Laws, Company may Process Personal Data and Company Data for other lawful business or commercial purposes that are compatible with or reasonably related to the purposes set forth above, including internal analytics, product and service development, commercialization, monetization, benchmarking, client enablement, and other legitimate business activities, without limiting Company's independent Controller rights where such additional purposes are not required to be contractually specified.

2.  **INDEPENDENT CONTROLLER ACTIVITIES (Other Transferred Data)** 

Where Marketing Partner transfers data to Company that does not constitute Leads or lead generation data, the purposes of Processing and permitted uses of such data shall be as expressly set forth in the applicable SOW, or, if not specified therein, for Company's internal business operations, analytics, commercialization, compliance, and other lawful purposes consistent with applicable Data Protection Laws.

3.  **PROCESSOR ACTIVITIES**

This Section applies when Marketing Partner Processes Company Personal Data. Marketing Partner Processes Company Personal Data solely on behalf of Company, in accordance with Company's documented instructions, and for the limited purposes set forth below:

*(a) Campaign Execution and Delivery.* Operating email, media, or other marketing campaigns on behalf of Company or Clients; delivering communications, advertisements, or content using Company or Client branding; and managing technical delivery, scheduling, formatting, and transmission of campaign materials.

*(b) Campaign Measurement and Analytics.* Collecting, generating, and Processing campaign metrics and performance data solely for Company‑ or Client-branded campaigns (including delivery, open, click, engagement, conversion, attribution, frequency, reach, and suppression-related signals); processing Lead Disposition Data for reporting, reconciliation, quality assurance, and performance measurement; and providing aggregated or campaign-level reporting to Company or Clients.

*(c) Suppression and Exclusion Management.* Performing negative matching, suppression, and exclusion of identifiers (including email addresses, phone numbers, hashed identifiers, or comparable signals) using Suppression Data supplied by Company or generated pursuant to Company's instructions, and preventing delivery of communications to individuals who have opted out, previously converted, are duplicative, or are otherwise designated for exclusion.

*(d) Security, Fraud Prevention, and Quality Assurance.* Detecting, preventing, and investigating fraudulent, invalid, deceptive, or malicious activity solely as necessary to protect the integrity, security, and proper operation of the Services; identifying technical abuse, misuse, or anomalous activity that could impair campaign delivery, measurement, compliance, or data integrity; and implementing reasonable logging, monitoring, and quality assurance activities.

*(e) Legal and Contractual Compliance.* Processing Company Personal Data as reasonably necessary to comply with applicable laws, regulations, lawful requests, or regulatory inquiries; maintaining records, logs, and documentation to demonstrate compliance with the Agreement, this DPA, and applicable Data Protection Laws; and supporting Company's compliance with Consumer rights requests, audits, or regulatory inquiries, to the extent required by applicable law and Company's documented instructions.

**AUDIENCE DATA - ACTIVATION, SUPPRESSION, AND DUPLICATE PREVENTION**

This Section governs the use of Audience Data and controls over any conflicting DPA provisions solely with respect thereto, except as otherwise expressly set forth herein.\

1. Scope and Definitions.

\(a\) "Audience Data" means Personal Data that Company or its Clients make available to Marketing Partner for the limited purposes described in this Section, including: (i) seed lists, customer match lists, custom audience lists, exclusion lists, suppression lists, and de-duplication lists; (ii) hashed identifiers, device identifiers, cookie identifiers, advertising identifiers, IP addresses, and comparable identifiers; (iii) associated audience attributes, segment labels, and related information.

\(b\) "Audience Suppression List" means any subset of Audience Data provided for negative targeting, suppression, exclusion, de-duplication, preference management, or compliance (including opt-out or deletion determinations).

\(c\) "Program" means the specific client program identified in the applicable SOW(s) for which Audience Data is provided.

2\. Roles. Marketing Partner will Process Audience Data solely on behalf of Company and/or Company's Clients, in accordance with Company's documented instructions and solely for the limited purposes set forth in this Section.

3\. Permitted Purposes. Marketing Partner may Process Audience Data solely for the following purposes:

\(a\) *Audience Activation and Targeted Advertising*. Uploading, matching, activating, and maintaining Audience Data on media vendor or advertising platforms solely to (i) deliver targeted advertising for the Program; (ii) create and operate inclusion/exclusion audiences, including negative targeting and suppression; and (iii) perform audience matching and related platform-supported workflows.

\(b\) *Duplicate Prevention and Exclusion*. Reduce or prevent the delivery of duplicative, previously submitted, previously converted, otherwise ineligible, or otherwise excluded Consumers as Leads for the Program. Duplicate prevention may include negative targeting, exclusion audience use, pre-delivery validation, and suppression checks using any commercially reasonable identifiers and matching methods (including email, phone, address, hashed identifiers, device identifiers, and comparable signals). Where the applicable SOW specifies a duplicate window, qualification criteria, or exclusion logic, Marketing Partner will apply such parameters.\

(c) *Program Optimization*. Improve the efficiency and performance of Marketing Partner's lead generation activities for the Program only, including optimization of media buying, placement selection, traffic sourcing, pacing, and operational controls.

\(d\) *Measurement and Reporting*. Measuring and reporting on Program performance, including suppression and exclusion effectiveness, match rates, and duplicate reduction, and providing reporting to Company as reasonably requested.

\(e\) *Compliance and Preference Management*. Applying Audience Suppression Lists and other Audience Data updates reflecting Consumer opt-out, deletion, correction, or preference determinations, including suppressing Consumers from targeting or Lead delivery as required.

4\. Restrictions and Prohibited Uses.

\(a\) Marketing Partner shall not, and shall not permit any third party to: (i) use Audience Data for Marketing Partner's independent business purposes, including without limitation: (A) creating or enhancing Marketing Partner-owned audience segments, identity graphs, or reusable datasets; (B) cross-client pooling, commingling, benchmarking, or training of generalized models that result in reusable audiences, persistent datasets, or insights usable outside the applicable Program; (C) resale, licensing, distribution, or other disclosure of Audience Data to any third party for reuse or independent purposes, except as expressly permitted under this DPA; or (D) use Audience Data to intentionally benefit any program, advertiser, or client other than the applicable Program;(ii) combine Audience Data with other Personal Data in a manner that enables Marketing Partner to create Consumer profiles for Marketing Partner's own purposes or to engage in cross-context behavioral advertising for Marketing Partner's sole benefit. Marketing Partner may combine Audience Data with other data only to the extent reasonably necessary to perform the permitted purposes for the applicable Program; or (iii) retain Audience Data longer than necessary to perform the applicable Program and comply with Applicable Data Protection Laws.\

5. Disclosures to media vendors, advertising platforms, and Partner Suppliers.

\(a\) Marketing Partner may disclose Audience Data to: (i) media vendors or advertising platforms; and (ii) Partner Suppliers, in each case solely to the extent necessary to perform the permitted purposes for the Program, including audience activation, negative targeting, suppression, and measurement.

\(b\) Marketing Partner may share Audience Data with Partner Suppliers solely to the extent necessary to perform the permitted purposes for the applicable Program (including suppression and exclusion workflows). Prior to sharing any Audience Data with a Partner Supplier, Marketing Partner shall enter into a written agreement with such Partner Supplier requiring compliance with the same terms applicable to Marketing Partner under this DPA with respect to Audience Data. Marketing Partner shall remain fully responsible for any act or omission of a Partner Supplier with respect to Audience Data as if it were Marketing Partner's own act or omission.\

6. Opt-Outs, Deletions, and Preference Signals for Audience Data.

\(a\) Marketing Partner acknowledges that Consumer opt-outs, deletions, and other preference determinations relating to Audience Data will be communicated to Marketing Partner through Company's documented instructions and refreshed or updated Audience Data (including Audience Suppression Lists) delivered via mutually agreed secure transfer methods (which may include a secure technical intermediary or data exchange environment designated by Company).

\(b\) Marketing Partner will ingest and apply updated Audience Suppression Lists and other Audience Data updates within a commercially reasonable time not to exceed three (3) business days after receipt.

7\. Data Minimization, Retention, and Deletion of Audience Data.\

(a) Marketing Partner will minimize access to and retention of Audience Data and will store it only as needed for the Program.\

(b) Upon completion of the Program or termination/expiration of the applicable SOW(s) requiring Audience Data (or upon Company's written instruction), Marketing Partner will delete or return Audience Data in accordance with the DPA and will use commercially reasonable efforts to delete or remove Audience Data from platform audiences using platform-supported tools.\

(c) Marketing Partner may retain limited records necessary to demonstrate compliance (e.g., ingestion logs, suppression application confirmations, and audit artifacts) provided such records are minimized, access-controlled, and not used for any other purpose.\

8. Operational Reporting and Compliance. Upon Company's reasonable written request (and no more frequently than monthly unless required by law or a regulatory inquiry), Marketing Partner will provide reasonable documentation sufficient to demonstrate: (a) receipt and ingestion of Audience Suppression Lists/updates (date/time); (b) application of suppression/exclusion controls (including match or suppression counts where available); and (c) commercially reasonable duplicate-prevention practices used for the Program. Documentation may be provided in summary form and shall not require disclosure of Marketing Partner proprietary traffic source details or unrelated systems.

---

<a href="/legal/advertising-services/marketing-partner-agreement/esign/" target="_blank" rel="noopener noreferrer">Esign</a>

Statement of Work Template

<a href="/Converge_MPA_SOW_Template.pdf" download target="_blank" rel="noopener noreferrer">Download SOW Template (PDF)</a>
`

export default function MarketingPartnerAgreement() {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('legal-article')
  }, [setNavStatus, setCurrentPage])

  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'
  const currentUrl = `https://${domain}/legal/advertising-services/marketing-partner-agreement/`

  return (
    <>
      <Head>
        <title>Converge Marketing Partner Agreement – General Terms</title>
        <meta name="description" content="Converge Marketing Partner Agreement General Terms and Conditions, including Exhibits A, B, and C" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Converge Marketing Partner Agreement – General Terms" />
        <meta property="og:description" content="Converge Marketing Partner Agreement General Terms and Conditions, including Exhibits A, B, and C" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={currentUrl} />
      </Head>

      <LegalLayout navigation={MPA_NAVIGATION} extraLinks={[{ label: 'Esign', href: '/legal/advertising-services/marketing-partner-agreement/esign/' }]}>

        <article className="max-w-4xl">
          <h1 id="mpa-general-terms" className="text-4xl font-bold text-gray-900 mb-2">
            Converge Marketing Partner Agreement – General Terms
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
