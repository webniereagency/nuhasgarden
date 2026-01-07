# Nuhas Beauty Garden

A modern, multilingual website for Nuhas Beauty Garden - a premier beauty salon offering hair styling, nail care, makeup, skincare, and bridal services.

## Technology Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Routing:** React Router DOM

## Features

- Multilingual support (English, Amharic, Afaan Oromoo)
- Responsive design for all devices
- Service catalog with image galleries
- Online booking form
- Customer reviews
- Contact and location information

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd nuhas-beauty-garden

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The production build will be output to the `dist` folder.

## Deployment

This project is configured for deployment on Netlify. Simply connect your repository to Netlify and it will automatically detect the build settings from `netlify.toml`.

## Project Structure

```
src/
├── assets/         # Images and static assets
├── components/     # React components
├── contexts/       # React context providers
├── hooks/          # Custom React hooks
├── lib/            # Utility functions and translations
├── pages/          # Page components
└── main.tsx        # Application entry point
```

## License

All rights reserved.
