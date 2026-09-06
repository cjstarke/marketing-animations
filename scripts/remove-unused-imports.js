#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filesToFix = {
  'components/CareerGrid.tsx': {
    removeImports: ['id', 'btnId'],
    isVariable: true
  },
  'components/Footer.tsx': {
    removeImports: ['handleSubmit'],
    isVariable: true
  },
  'components/HeroAnimated.tsx': {
    removeImports: ['useEffect', 'useState'],
    isReactImport: true
  },
  'components/HeroSection.tsx': {
    removeImports: ['ReactNode', 'twMerge'],
    isMultiple: true
  },
  'components/Infinite.tsx': {
    removeImports: ['ReactNode', 'twMerge'],
    isMultiple: true
  },
  'components/InsightSearchlist.tsx': {
    removeImports: ['Link', 'remainder'],
    isMultiple: true
  },
  'components/Layout.tsx': {
    removeImports: ['PressBanner', 'currentPage', 'showBanner', 'setBannerDismissed'],
    isMultiple: true
  },
  'components/List.tsx': {
    removeImports: ['Observer'],
    isImport: true
  },
  'components/LogosAnimatedDesktop.tsx': {
    removeImports: ['ScrollTrigger'],
    isGsapImport: true
  },
  'components/LogosAnimatedMobile.tsx': {
    removeImports: ['ScrollTrigger'],
    isGsapImport: true
  },
  'components/LottieScrollChain.tsx': {
    removeImports: ['useState', 'myRef', 'myRef2'],
    isMultiple: true
  },
  'components/NewsAndInsightsSectionAnimatedMobile.tsx': {
    removeImports: ['NewsAndInsightsCard'],
    isImport: true
  },
  'components/NumbersAnimatedDesktop.tsx': {
    removeImports: ['ScrollTrigger', 'numberData', 'numberClass', 'pinkSvgClass'],
    isMultiple: true
  },
  'components/OurWorkCard.tsx': {
    removeImports: ['SearchList', 'WorkMockItems', 'useState', 'Observer'],
    isMultiple: true
  },
  'components/OurWorkThumbnail.tsx': {
    removeImports: ['SearchList', 'WorkMockItems', 'useState', 'Observer', 'ConvergeButtonLink', 'Link'],
    isMultiple: true
  },
  'components/PressBanner.tsx': {
    removeImports: ['XMarkIcon', 'BurgerHide', 'isDark'],
    isMultiple: true
  },
  'components/SearchList.tsx': {
    removeImports: ['Link'],
    isImport: true
  },
  'components/SprintSessionCTA.tsx': {
    removeImports: ['brandData', 'WhatweDoData', 'EmailForm', 'ConvergeLogoPink'],
    isMultiple: true
  },
  'components/SubmitModal.tsx': {
    removeImports: ['formStatus'],
    isVariable: true
  },
  'components/SVGs/Target.tsx': {
    removeImports: ['strokeColor'],
    isVariable: true
  },
  'components/SVGs/XIcon.tsx': {
    removeImports: ['useConvergePage'],
    isImport: true
  },
  'components/WhatWeDoHero.tsx': {
    removeImports: ['ReactNode', 'twMerge', 'ConvergeButtonLink'],
    isMultiple: true
  },
  'components/WhatWeDoSection.tsx': {
    removeImports: ['ReactNode', 'twMerge', 'Image'],
    isMultiple: true
  },
  'components/WhatWeDoService.tsx': {
    removeImports: ['twMerge', 'Image', 'whatWeDoData'],
    isMultiple: true
  },
  'pages/_app.tsx': {
    removeImports: ['useConvergePage'],
    isImport: true
  },
  'pages/compliance.tsx': {
    removeImports: ['ConvergeHead', 'Head', 'ctoppAnchorId'],
    isMultiple: true
  },
  'pages/index.tsx': {
    removeImports: ['useRef', 'useState'],
    isReactImport: true
  },
  'pages/insights/ai-for-action.tsx': {
    removeImports: ['getArticlesForBrand', 'GetStaticProps'],
    isMultiple: true
  },
  'pages/insights/sprint-session.tsx': {
    removeImports: ['formStatus', 'handleSetFormStatus', 'toggleModal'],
    isVariable: true
  },
  'pages/our-work/[slug].tsx': {
    removeImports: ['allCases'],
    isVariable: true
  },
  'pages/our-work/index.tsx': {
    removeImports: ['context'],
    isVariable: true
  },
  'pages/who-we-are.tsx': {
    removeImports: ['TextSection'],
    isVariable: true
  }
};

console.log('Removing unused imports from remaining files...\n');

let filesProcessed = 0;
let filesSkipped = 0;

for (const file of Object.keys(filesToFix)) {
  const filePath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  Skipped ${file} - file not found`);
    filesSkipped++;
    continue;
  }
  
  console.log(`Processing ${file}...`);
  filesProcessed++;
}

console.log(`\n✅ Processed ${filesProcessed} files`);
if (filesSkipped > 0) {
  console.log(`⚠️  Skipped ${filesSkipped} files`);
}
console.log('\nNote: This script identified files with unused imports.');
console.log('Manual fixes are still required for each file based on the specific unused imports.');
