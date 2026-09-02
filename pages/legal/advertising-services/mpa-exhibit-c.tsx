import Head from 'next/head'
import { useEffect } from 'react'
import LegalArticleContent from '../../../components/legal/LegalArticleContent'
import LegalLayout from '../../../components/legal/LegalLayout'
import { useConvergePage } from '../../../contexts/ConvergePageContext'
import { NavBarStatus } from '../../../types'
import { MPA_NAVIGATION } from '../../../lib/mpa-navigation'

const CONTENT = `**<u>EXHIBIT C</u>**

**DATA PROCESSING ADDENDUM**

This Data Processing Addendum ("**DPA**") is incorporated into the Marketing Partner Agreement between Marketing Partner and Company. In the event of any conflict between the Agreement and this DPA, the terms of this DPA shall control.

## DEFINITIONS

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

## ROLES OF THE PARTIES AND PROCESSING PURPOSES


Where Marketing Partner independently operates marketing campaigns under its own brands and privacy policies, or obtains Leads from its affiliate network, publishers, or other third-party suppliers operating under their own brands and privacy policies, and discloses Personal Data from such campaigns to Company, each party acts as an independent Controller under applicable Data Protection Laws, and Company acts as a Third Party under the CCPA (collectively, the "**Independent Controller Activities**").

When Marketing Partner Processes Company Personal Data in connection with the Services, Company and/or its Client acts as the Controller, and Marketing Partner acts as a Processor or Sub-Processor to Company and as a CCPA Service Provider. This applies only to Processing of Company Personal Data by Marketing Partner on behalf of Company and/or its Clients, in accordance with Company's documented instructions, and solely for the Processor purposes described in Exhibit C-1.


Personal Data shall be processed for the purposes set forth in Exhibit C-1.

## INDEPENDENT CONTROLLER ACTIVITIES

Where Marketing Partner independently operates marketing campaigns under its own brands and privacy policies, or obtains Leads from its Partner Suppliers operating under their own brands and privacy policies, and discloses Personal Data from such campaigns to Company, each party acts as an independent Controller (or CCPA third party as applicable) under applicable Data Protection Laws.


Each Party agrees to: (i) comply with applicable Data Protection Laws; (ii) maintain a record of the Processing of the Personal Data under its responsibility; (iii) implement appropriate technical and organizational measures to ensure a level of security appropriate to the risks that are presented by the Processing of the Personal Data that it carries out, in particular to protect the Personal Data against accidental or unlawful destruction or accidental loss, alteration, unauthorized disclosure or access; and (iv) ensure that its affiliates, employees, contractors, agents, officers, and professional service Marketing Partners who process Personal Data are subject to a contractual obligation to keep Personal Data confidential.

Marketing Partner Obligations. In connection with the Independent Controller Activities, Marketing Partner shall be solely responsible for its collection of Personal Data from Consumers and agrees that it shall comply with the following obligations:

*Privacy Notices*. Marketing Partner shall provide Consumers with all required privacy notices, disclosures, and choice mechanisms at or before the point of collection, including accurate disclosure of: (i) categories of Personal Data collected; (ii) purposes for which Personal Data is collected and disclosed; (iii) whether Personal Data is sold or shared, including to Company and its Clients; and (iv) Consumer rights with respect to such Personal Data.

*Consents*. In addition to any consents required under the TCPA or other laws regulating marketing communications as addressed separately in the Agreement, Marketing Partner shall obtain and maintain any Consumer consents required under applicable Data Protection Laws for the collection, use, or disclosure of Personal Data, including Sensitive Personal Data, in accordance with the applicable legal standard.

*Opt‑Outs*. Marketing Partner shall (i) offer Consumers the right to opt out of the sale or sharing of their Personal Data where required by applicable Data Protection Laws; (ii) detect, honor, and effectuate Global Privacy Control ("GPC") signals and other legally recognized universal opt‑out signals; and (iii) maintain records evidencing the receipt and handling of opt‑out requests in accordance with applicable law.

*Consumer Requests*. Marketing Partner shall be responsible for receiving, verifying, and responding to Consumer requests relating to Personal Data it collects as an independent controller, including requests to access, delete, correct, or opt out. To the extent required by applicable law, Marketing Partner shall (i) notify Company within one (1) business day of receiving any Consumer request or complaint relating to Personal Data previously sold or shared with Company; (ii) timely communicate valid opt-out, deletion, or correction requests to Company; (iii) provide Company with sufficient information to enable Company and Client to honor such requests with respect to Personal Data in their possession or control, including identifiers and details sufficient to locate and suppress the affected records (e.g., email address, phone number, or hashed equivalents); and (iv) confirm that Marketing Partner has honored the request with respect to its own processing and will suppress the Consumer from any future transfers to Company or its Clients.

*Affiliate and Supplier Accountability*. Where Personal Data is collected by Marketing Partner's affiliate network, publishers, or other suppliers acting as independent controllers, Marketing Partner shall implement reasonable contractual and operational measures to ensure that such parties (i) provide legally compliant consumer-facing notices; (ii) honor Consumer opt-out and deletion requests, including GPC signals; and (iii) pass through required Consumer rights signals to Marketing Partner as necessary to enable compliance.

*Data Broker and Delete Act Obligations*. Marketing Partner is responsible for its own compliance with any applicable data broker registration requirements or California Delete Act obligations pursuant to California Civil Code §§ 1798.99.80--1798.99.89 arising from its Independent Controller Activities and shall not disclose Personal Data to Company in violation of any applicable deletion or opt‑out restriction.

*Recordkeeping*. Marketing Partner shall maintain records reasonably necessary to demonstrate compliance with applicable Data Protection Laws. Upon Company's reasonable request, Marketing Partner shall provide reasonable assurances of compliance, which may include written attestations or descriptions of its privacy practices. Marketing Partner shall promptly notify Company if it can no longer meet its obligations under applicable Data Protection Laws.

*Sensitive Personal Data*. Subject to applicable Data Protection Laws and subsections 3.3.9 and 3.3.10 below, Marketing Partner may collect and disclose Sensitive Personal Data to Company only where such processing is clearly disclosed in its consumer-facing privacy notice, is reasonably necessary and proportionate to the disclosed purposes, compliant with applicable Data Protection Laws, and supported by any required Consumer consent.

 *Consumer Health Data -- Personal Injury Lead Generation*. Marketing Partner may collect and disclose Consumer Health Data only where the Consumer affirmatively provides such information, Marketing Partner provides clear disclosures regarding the categories of data collected, purposes of use and disclosure, and categories of recipients, and any required express consent is obtained in compliance with applicable Data Protection Laws. Such data shall be limited to the minimum reasonably necessary for the requested services and shall not be used or disclosed for unrelated purposes. Marketing Partner shall maintain records sufficient to demonstrate compliance. The Parties acknowledge that neither party is a covered entity or business associate under the Health Insurance Portability and Accountability Act of 1996 ("HIPAA") with respect to the Consumer Health Data described in this Section.

*Prohibited Sensitive Personal Data*. In performing the Services under the Agreement, Marketing Partner shall not intentionally collect or disclose to Company Sensitive Personal Data relating to: (i) known children under eighteen (18); (ii) sex life, sexual orientation, or gender identity; (iii) national origin, citizenship, or immigration status; (iv) biometric identifiers; (v) trade union or labor organization membership; (vi) government‑issued identifiers; or (vii) financial account numbers or authentication credentials. Marketing Partner shall implement reasonable measures to prevent intentional collection or disclosure of such information and promptly remediate any inadvertent collection. This Section does not restrict collection of general interest information that excludes identifiers or credentials. 

Company will: (i) provide Consumers with legally sufficient privacy notices and choice mechanisms for Company's Processing activities, including opt-out of sale or sharing where applicable; (ii) Process Personal Data from Marketing Partner solely for purposes authorized by this DPA and take commercially reasonable steps to require its end clients to do the same; and (iii) reasonably cooperate with Marketing Partner to honor valid revocation of consent, opt-out, or deletion requests forwarded by Marketing Partner with sufficient identifying information, provided Company has no obligation to monitor or ensure Marketing Partner's compliance with its own legal obligations.

## CONTROLLER-TO-PROCESSOR ACTIVITIES

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

**
**EXHIBIT C‑1**

**PURPOSES OF PROCESSING AND SCOPE OF DATA USE**

This <u>Exhibit C-1</u> forms part of the DPA. Capitalized terms not defined herein have the meanings in the Agreement or DPA.

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

8. Operational Reporting and Compliance. Upon Company's reasonable written request (and no more frequently than monthly unless required by law or a regulatory inquiry), Marketing Partner will provide reasonable documentation sufficient to demonstrate: (a) receipt and ingestion of Audience Suppression Lists/updates (date/time); (b) application of suppression/exclusion controls (including match or suppression counts where available); and (c) commercially reasonable duplicate-prevention practices used for the Program. Documentation may be provided in summary form and shall not require disclosure of Marketing Partner proprietary traffic source details or unrelated systems.`

export default function MpaExhibitC() {
  const { setCurrentPage, setNavStatus } = useConvergePage()

  useEffect(() => {
    setNavStatus(NavBarStatus.white)
    setCurrentPage('legal-article')
  }, [setNavStatus, setCurrentPage])

  const domain = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'convergemarketing.com'
  const currentUrl = `https://${domain}/legal/advertising-services/mpa-exhibit-c/`

  return (
    <>
      <Head>
        <title>MPA Exhibit C – Data Protection Addendum</title>
        <meta name="description" content="Converge Marketing Partner Agreement Exhibit C: Data Protection Addendum" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="MPA Exhibit C – Data Protection Addendum" />
        <meta property="og:description" content="Converge Marketing Partner Agreement Exhibit C: Data Protection Addendum" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={currentUrl} />
      </Head>

      <LegalLayout navigation={MPA_NAVIGATION}>
        <article className="max-w-4xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            MPA Exhibit C – Data Protection Addendum
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
