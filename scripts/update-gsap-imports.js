const fs = require('fs');
const path = require('path');

// List of components that need updating
const componentsToUpdate = [
  'components/CardsAnimatedTablet.tsx',
  'components/ContactSectionAnimated.tsx',
  'components/NewsAndInsightsSectionAnimatedDesktop.tsx',
  'components/NewsAndInsightsSectionAnimatedMobile.tsx',
  'components/MessageSection.tsx',
  'components/LogosAnimatedMobile.tsx',
  'components/CaseStudiesAnimated.tsx',
  'components/LogosAnimatedDesktop.tsx'
];

// Function to update imports in a file
function updateGsapImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Pattern to match the old import pattern
    const oldImportPattern = /import { useRef(?:, [^}]+)? } from 'react'\nimport { gsap } from 'gsap'\nimport { ScrollTrigger } from 'gsap\/dist\/ScrollTrigger'\nimport { useGSAP } from '@gsap\/react'\n\ngsap\.registerPlugin\(ScrollTrigger\)/;
    
    // New import pattern
    const newImportPattern = `import { useRef$1 } from 'react'
import { gsap, ScrollTrigger, useGSAP } from '../utils/gsap'`;
    
    // Replace the pattern
    content = content.replace(
      /import { (useRef(?:, [^}]+)?) } from 'react'\nimport { gsap } from 'gsap'\nimport { ScrollTrigger } from 'gsap\/dist\/ScrollTrigger'\nimport { useGSAP } from '@gsap\/react'\n\ngsap\.registerPlugin\(ScrollTrigger\)/,
      `import { $1 } from 'react'\nimport { gsap, ScrollTrigger, useGSAP } from '../utils/gsap'`
    );
    
    // Write the updated content back
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`✅ Updated ${filePath}`);
    
  } catch (error) {
    console.error(`❌ Error updating ${filePath}:`, error.message);
  }
}

// Update all components
console.log('🚀 Starting GSAP import updates...\n');

componentsToUpdate.forEach(componentPath => {
  updateGsapImports(componentPath);
});

console.log('\n✨ GSAP import updates completed!');
