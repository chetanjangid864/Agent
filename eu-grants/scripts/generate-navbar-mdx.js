const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, '../content', 'blog');

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

const navbarPages = [
  { slug: 'eu-grants', title: 'EU Grants Overview' },
  { slug: 'eu-tenders', title: 'EU Tenders Overview' },
  { slug: 'by-country', title: 'European Grants By Country' },
  { slug: 'by-industry', title: 'European Grants By Industry' },
  { slug: 'how-to-apply', title: 'How to Apply for European Funding' },
  { slug: 'resources', title: 'Tools & Resources for Founders' }
];

navbarPages.forEach(p => {
  const filePath = path.join(contentDir, `${p.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    const content = `---
title: "${p.title}"
slug: "${p.slug}"
date: "2026-03-31"
---

# ${p.title}

Welcome to the **${p.title}** page. This is the central hub for discovering millions in non-dilutive capital and opportunities across the European Union.

## Explore Opportunities

We are constantly updating our database with the latest premium funding opportunities tailored to a strategic, business-first mindset. Navigate through our detailed 30,000-word guides to begin your journey.

*This section will dynamically pull from the database to feature the latest additions.*
`;
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Created Navbar MDX: ${filePath}`);
  } else {
    console.log(`Skipped (already exists): ${filePath}`);
  }
});
