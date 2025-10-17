# Pricila Oliveira - Personal Website & Blog

A modern, minimalist personal website and blog built with Next.js, showcasing projects, articles, and professional journey.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage with bio and links
│   ├── about/             # About page with detailed story
│   ├── articles/          # Blog articles (dynamic routes)
│   ├── projects/          # Portfolio showcase
│   └── layout.tsx         # Root layout with theme handling
├── articles/              # Markdown blog posts
├── components/            # Reusable React components
├── lib/                   # Utility functions
└── scripts/               # Build and utility scripts
```

## 🛠 Getting Started

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open [http://localhost:3000](http://localhost:3000)** in your browser

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run generate:rss` - Generate RSS feed for blog

### 🔧 Performance
- **Static Generation**: Optimized builds with Next.js SSG
- **Image Optimization**: Next.js Image component for performance
- **Font Optimization**: Google Fonts with Next.js font optimization
- **SEO Ready**: Proper meta tags and structured data

## 🌐 Deployment

This project is optimized for deployment on Vercel:

1. Push to your GitHub repository
2. Connect to Vercel
3. Deploy automatically with each push to main branch

## 🤝 Contributing

This is a personal website, but if you notice any bugs or have suggestions for improvements, feel free to open an issue or submit a pull request.