const fs = require('fs');
const path = require('path');

const pages = [
  "Complete Guide to EU Grants for SMEs",
  "Complete Guide to EU Tenders for SMEs",
  "How the Funding & Tenders Portal Works",
  "How to Register on the EU Portal",
  "How to Write an EU Grant Proposal",
  "Common Mistakes in EU Grant Applications",
  "Documents Required for EU Funding",
  "Timeline of EU Grant Approval",
  "Difference Between Grants and Tenders",
  "How to Find Open Tenders Daily",
  "All Business Grants in Germany",
  "All Business Grants in France",
  "All Business Grants in Italy",
  "All Business Grants in Spain",
  "All Business Grants in Netherlands",
  "IT & Software Tenders in Europe",
  "Construction Tenders in Europe",
  "Healthcare Grants in Europe",
  "Manufacturing Grants in Europe",
  "Green Energy Grants in Europe"
];

const toSlug = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');

const contentDir = path.join(__dirname, '../content/blog');

if (!fs.existsSync(contentDir)) {
  fs.mkdirSync(contentDir, { recursive: true });
}

pages.forEach(page => {
  const slug = toSlug(page);
  const filePath = path.join(contentDir, `${slug}.mdx`);
  
  const mdxContent = `---
title: "${page}"
slug: "${slug}"
date: "2026-03-30"
---

# ${page}

Welcome to the **${page}**. This comprehensive guide provides everything you need to know about navigating the European funding landscape.

## Introduction

Securing non-dilutive capital is critical for modern business growth. In this post, we explore exactly how you can maximize your chances and streamline your processes.

### Key Factors to Consider

- Detailed eligibility criteria
- Essential documentation and compliance
- Timelines and typical bottlenecks

## Deep Dive Analysis

When dealing with applications of this magnitude, the difference between success and failure often comes down to meticulous preparation. 

*Placeholder content for the ${page} guide. This section will be expanded to outline regional strategies, industry-specific requirements, and expert tips.*

## Conclusion

By following these optimized strategies, you can position your enterprise at the forefront of European innovation.
`;

  fs.writeFileSync(filePath, mdxContent.trim(), 'utf8');
  console.log(`Created MDX: ${filePath}`);
});
