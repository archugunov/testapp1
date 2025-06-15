# Vinted Listing Assistant

## 🧭 Overview

A minimal, mobile-friendly tool that helps Vinted sellers create better listings by generating descriptions, pricing suggestions, and a visual measurement template — all based on uploaded item photos.

## 🪧 Homepage Value Proposition

The top of the website includes a concise, benefit-driven hero section that clearly communicates the product’s value:

- **What it does:** Instantly generates complete, professional-grade Vinted listings
- **What you get:** Description, price suggestion, visual measurement template
- **Why it matters:** Sell faster with zero effort
- **Conversion CTA:** Upload photos → get a ready-to-sell listing in seconds
- **Pricing preview:** Free plan available, affordable subscriptions, one-click upgrades

---

## 🚀 Features

### 📸 Step 1: Upload Clothing Photos
- Upload up to 5 photos of your item
- Responsive thumbnail previews
- Automatically detects item category (e.g. shirt, pants, dress) with the use of OpenAI API

### 📏 Step 2: Fill Out Measurements
- Shows only the relevant fields based on the item type (auto-defined by the AI), e.g.:
  - Shirts: Length, Chest, Waist, Sleeve
  - Pants: Length, Waist, Inseam, Hip
  - Dresses: Length, Bust, Waist, Hip
- Inputs are in cm and are fully editable 

### 📝 Step 3: Get a Listing (with Watermark Notice)
- AI-generated description
- Suggested price range (based on comparable items)
- Measurement visual template with your data from the step 2 (includes a watermark: "Created with Vinted Assistant – vintedassistant.com")
- Downloadable as **PNG** (suitable for mobile gallery saving)
- One-click copy of the description text

---

## 🔐 Authentication

To manage subscriptions, track listing usage, and enable features like watermark toggling, users must create an account.

Users can sign up or log in using Google or Apple authentication for a fast, frictionless experience.

Login is required before generating any listings, to prevent abuse of the free plan (e.g. via incognito mode).

This ensures a frictionless first-time experience while supporting subscription logic later on.

---

## 💳 Pricing

### Free Plan
- 3 listings total
- Full access to description, pricing, and template download

### Weekly Subscription — €2.99/week
- Up to 10 listings per week
- Auto-renewing, can be paused anytime
- Extra listings: €0.50 each

### Monthly Subscription — €6.99/month
- Up to 50 listings per month
- Ideal for active or semi-pro sellers
- Extra listings: €0.30 each

All plans include access to the same full-feature set. Paid plans include a toggle to remove the watermark from the measurement template. Extra listings are charged one-off per use once the plan limit is reached.