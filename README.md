
# 🐕 Pet Food Landing Page

A modern, responsive landing page for premium dog food products built with Next.js 15, React 19, and Tailwind CSS 4. This project showcases a clean, professional design focused on pet nutrition and health benefits.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling System](#styling-system)
- [Getting Started](#getting-started)
- [Scripts](#scripts)
- [Development](#development)
- [Deployment](#deployment)

## 🎯 Overview

This landing page is designed for a premium dog food company, featuring:
- **Hero Section** with key product differentiators
- **Nutrition Section** highlighting health benefits with statistics
- **Health Section** focusing on gastrointestinal benefits
- **Prebiotics Section** explaining digestive health advantages

The design emphasizes trust, quality, and scientific backing for pet nutrition products.

## ✨ Features

- 📱 **Fully Responsive Design** - Mobile-first approach with breakpoints for all devices
- ⚡ **Next.js 15** with Turbopack for fast development
- 🎨 **Tailwind CSS 4** for utility-first styling
- 🔤 **Inter Tight Font** for modern typography
- 🧩 **Modular Components** for maintainable code
- 🎯 **TypeScript** for type safety
- 💅 **Prettier** for consistent code formatting
- 🔍 **ESLint** for code quality
- 🖼️ **Custom SVG Icons** for brand consistency

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|----------|
| **Next.js** | 15.3.5 | React framework with SSR/SSG |
| **React** | 19.0.0 | UI library |
| **TypeScript** | 5.x | Type safety |
| **Tailwind CSS** | 4.x | Utility-first CSS framework |
| **Inter Tight** | - | Google Fonts typography |
| **Prettier** | 3.6.2 | Code formatting |
| **ESLint** | 9.x | Code linting |

### Core Layout Components

#### `app/layout.tsx`
- **Purpose**: Root layout component with font configuration
- **Features**:
  - Inter Tight font integration
  - Global metadata configuration
  - CSS variable setup for theming

#### `app/page.tsx`
- **Purpose**: Main home page orchestrating all sections
- **Structure**: Sequential layout of hero, nutrition, health, and prebiotics sections

### Section Components

#### `HeroSection.tsx`
- **Purpose**: Primary landing section with value propositions
- **Features**:
  - Responsive grid layout
  - Feature boxes with icons
  - Central product image
  - Call-to-action button
  - Payment method icons
  - Trust badges

#### `NutritionSection.tsx`
- **Purpose**: Highlights nutritional benefits with statistics
- **Features**:
  - Two-column responsive layout
  - Statistical data presentation (97%, 84%, 92%)
  - Product image integration
  - Scientific credibility messaging

#### `HealthSection.tsx`
- **Purpose**: Focuses on gastrointestinal health benefits
- **Features**:
  - Image and text layout
  - Health-focused messaging
  - Veterinary backing emphasis

#### `PrebioticsSection.tsx`
- **Purpose**: Explains prebiotic benefits for digestive health
- **Features**:
  - Alternating layout design
  - Scientific explanation of prebiotics
  - Visual representation with imagery

### Utility Components

#### `Button.tsx`
- **Purpose**: Reusable button component
- **Features**:
  - Responsive sizing
  - Hover effects
  - Customizable variants
  - Accessibility considerations

#### `FeatureBox.tsx`
- **Purpose**: Displays feature highlights with icons
- **Props**:
  - `icon`: ReactNode for custom SVG icons
  - `title`: Feature headline
  - `description`: Feature explanation

### Icon System

Custom SVG icons located in `components/icons/`:
- **Product Features**: Real Food, Made Fresh, Premium Ingredients, Vet Developed
- **Payment Methods**: Visa, MasterCard, PayPal, Apple Pay, Google Pay
- **Trust Indicators**: Guard/Security icon

## 🎨 Styling System

### CSS Variables (globals.css)

```css
:root {
  --color-primary: #EE6F4B;      /* Orange brand color */
  --color-secondary: #F8F8F8;    /* Light gray background */
  --color-grey: #424153;         /* Text gray */
  --color-dary-blue: #161723;    /* Dark blue headings */
  --font-inter-tight: 'Inter Tight', sans-serif;
}
```

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 18.0 or higher)
- **npm** (comes with Node.js) or **yarn** package manager

### Installation

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd gem-commerce-test
   ```
