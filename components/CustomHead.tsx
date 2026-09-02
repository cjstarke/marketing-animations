/*
Simplifies the implementation of the ConvergeHead component.
This component can be reused and will handle getting the meta data.
If a page needs more specific meta data, use this component as a reference
and implement the ConvergeHead component directly on the page.

Parameters:
page: <string> *Required - the page we need the meta data for. Valid page names found in the /config/pageConfig.tsx file
*/

import { ConvergeHead } from '@converge/ui'
import { getPageConfig } from '../config/pageConfig'

export type CustomHeadProps = {
  page: string;
};

const CustomHead = ({
  page
}: CustomHeadProps) => {
    const pageConfig = getPageConfig(page)

  return (
    <ConvergeHead
        description={pageConfig.metaTags.description}
        domain={pageConfig.metaTags.domain}
        favicon={pageConfig.metaTags.favicon}
        image={pageConfig.metaTags.image}
        imageAlt={pageConfig.metaTags.imageAlt}
        siteName={pageConfig.metaTags.siteName}
        title={pageConfig.metaTags.title}
        type={pageConfig.metaTags.type}
        url={pageConfig.metaTags.url}
    ></ConvergeHead>
  );
};

export default CustomHead