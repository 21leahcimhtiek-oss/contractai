# ContractAI

> Draft, review, and sign contracts with AI in minutes

AI contract builder with template library, clause suggestions, e-signature, and Stripe billing.

## Features
- AI contract drafting
- Template library
- Clause suggestions
- E-signature ready
- Version history
- Risk analysis
- Export to PDF/DOCX
- Team collaboration

## Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: OpenAI GPT-4o-mini
- **Payments**: Stripe Subscriptions
- **Deployment**: Vercel

## Quick Start

```bash
npm install
cp .env.example .env.local
# Add your API keys to .env.local
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `OPENAI_API_KEY` | OpenAI API key |
| `STRIPE_SECRET_KEY` | Stripe secret key |
| `STRIPE_WEBHOOK_SECRET` | Stripe webhook secret |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe publishable key |
| `STRIPE_PRICE_PRO_MONTHLY` | Stripe monthly price ID |
| `STRIPE_PRICE_PRO_YEARLY` | Stripe yearly price ID |
| `NEXT_PUBLIC_APP_URL` | Production URL |

## Pricing

| Plan | Price |
|------|-------|
| Free | $0/mo |
| Pro  | $19/mo |
| Pro Yearly | $159/yr |

## Deploy to Vercel

1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Add environment variables
4. Deploy

## License
MIT (c) 2026 Aurora Rayes LLC
