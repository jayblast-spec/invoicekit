<div align="center">

# InvoiceKit

### Invoice Operations, Not Invoice Paperwork

InvoiceKit is a browser-based invoicing tool that turns client billing into a 30-second task: build a professional, client-ready invoice, run it through a built-in risk/intelligence check, and get paid faster — no account, no server-side storage, no setup.

<p>
  <a href="https://invoicekit-pi.vercel.app"><img alt="Live Demo" src="https://img.shields.io/badge/Live-Demo-1D4ED8?style=for-the-badge&logo=vercel&logoColor=white"></a>
  <a href="https://github.com/jayblast-spec/invoicekit"><img alt="GitHub Repo" src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white"></a>
</p>

<p>
  <img alt="Next.js" src="https://img.shields.io/badge/Next.js-App%20Router-000000?style=flat-square&logo=next.js&logoColor=white">
  <img alt="React" src="https://img.shields.io/badge/React-19-1D4ED8?style=flat-square&logo=react&logoColor=white">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=flat-square&logo=typescript&logoColor=white">
  <img alt="Tailwind CSS" src="https://img.shields.io/badge/Tailwind%20CSS-4-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white">
  <img alt="Framer Motion" src="https://img.shields.io/badge/Framer%20Motion-Interaction-1D4ED8?style=flat-square&logo=framer&logoColor=white">
  <img alt="Vercel" src="https://img.shields.io/badge/Vercel-Deployment-000000?style=flat-square&logo=vercel&logoColor=white">
</p>

<p>
  <img alt="Animated InvoiceKit headline" src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=700&size=18&duration=2600&pause=650&color=1D4ED8&center=true&vCenter=true&width=760&lines=Client+details+%E2%86%92+line+items+%E2%86%92+invoice;Instant+PDF%2C+zero+backend+storage;Built-in+risk+intelligence+check;Get+paid+faster%2C+look+premium+doing+it">
</p>

</div>

## What It Does

InvoiceKit lets a freelancer or small business build a professional invoice directly in the browser: business details, client details, line items with quantities and rates, automatic subtotal/tax/total calculation, and custom branding. The finished invoice renders as a clean, client-ready document and exports straight to PDF. An intelligence layer (`/api/intelligence`) adds a risk-aware check on top of the invoice data before it goes out the door.

## How It Works

- Built on Next.js App Router (`app/page.tsx`) with client-side state for the invoice form and live preview, animated with Framer Motion.
- `app/api/intelligence/route.ts` is a server route that evaluates invoice/client data for risk signals separately from the client-side rendering path.
- Styling is Tailwind CSS 4; the whole flow — data entry to PDF — runs without a database or user account.

## Live

Production: **https://invoicekit-pi.vercel.app**

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| UI Library | React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| Motion | Framer Motion |
| Server Logic | Next.js API route (`/api/intelligence`) |
| Deployment | Vercel |

<p align="center">
  <img alt="ArkNet Digital" src="https://capsule-render.vercel.app/api?type=rect&height=70&color=0:1D4ED8,55:0B1E3D,100:020617&text=ArkNet%20Digital%20%7C%20Contact%3A%20michael%40arknet.digital&fontColor=FAFAFA&fontSize=16&fontAlign=50&animation=fadeIn">
</p>
