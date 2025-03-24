# Indo Wagen Website

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) for the Indo Wagen electric vehicle company.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Project Structure

### Data Management

Product data is managed through the following files:

- `src/data/products.js` - Contains the actual product data in JavaScript format
- `src/data/products.ts` - Provides TypeScript interface definitions and imports the JS data
- `src/data/accessories.ts` - Contains accessory product data with TypeScript interfaces

### Key Components

- `src/app/(main)/products/page.tsx` - Main products listing page with category filtering
- `src/app/(main)/products/[id]/page.tsx` - Product detail page with image gallery
- `src/components/Products/ProductCard.tsx` - Card component for displaying products in grid
- `src/components/Accessories/AccessoriesPage.tsx` - Complete accessories page with filtering and search
- `src/components/Accessories/AccessoryCard.tsx` - Card component for displaying accessories
- `src/components/Common/Footer.tsx` - Enhanced footer with company information, navigation links, and newsletter subscription
- `src/app/terms/page.tsx` - Terms of Service legal page
- `src/app/privacy/page.tsx` - Privacy Policy legal page

### Utility Scripts

The project includes utility scripts for data validation:

## Recent Updates

### March 2025 Updates

- Added Accessories page with comprehensive filtering and search functionality
- Updated navigation structure - moved About next to Home, removed Pricing, added Accessories
- Restored and enhanced About Us page components (Facilities and Environmental Impact)
- Added Cart functionality for accessories with persistent storage
- Added Terms of Service and Privacy Policy pages
- Fixed broken image paths in About and Testimonials sections
- Created sitemap.xml for better SEO
- Enhanced footer with comprehensive company information and newsletter subscription
- Fixed broken links and removed links to non-existent pages
- Added placeholder images for testimonials and accessories
- Optimized site for mobile and tablet devices

```bash
# Generate a temporary JSON file from products.js
node scripts/process_products.js

# Validate all product data for completeness and image path correctness
node scripts/validate_products_json.js
```

## Troubleshooting

If you experience issues with changes not being reflected in the UI:

1. Stop any running Next.js processes: `pkill -f next`
2. Clear the Next.js cache: `rm -rf .next`
3. Restart the development server: `npm run dev`

See the `troubleshooting.md` file for detailed information about known issues and their solutions.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
