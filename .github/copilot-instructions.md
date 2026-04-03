# Subash V Portfolio - Workspace Setup

This portfolio project is built with modern React.js and TypeScript for a professional, recruiter-friendly presentation.

## Project Overview

A fully responsive portfolio website showcasing:
- Professional experience and achievements
- Technical skills and expertise
- Featured projects with technology stacks
- Education background
- Multiple contact methods
- Modern dark theme with cyan accents

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```
   The portfolio will open at `http://localhost:3000`

3. **Build for Production**
   ```bash
   npm run build
   ```
   Output: `dist` folder

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
subash-portfolio/
├── src/
│   ├── components/          # React components
│   ├── data/
│   │   └── portfolio.ts     # All portfolio content
│   ├── styles/
│   │   └── *.module.css     # Component-scoped styles
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md                # Documentation

```

## Key Features

### ✅ Professional Design
- Modern gradient backgrounds (dark theme)
- Smooth animations and transitions
- Consistent color scheme (cyan: #00d4ff, #0099ff)
- Professional typography with Inter font

### ✅ Responsive Layout
- Mobile-first approach
- Breakpoints: 1024px (desktop), 768px (tablet), 480px (mobile)
- Tested on all major devices and browsers

### ✅ Interactive Components
- Sticky navigation header
- Smooth section scrolling
- Hover animations
- Call-to-action buttons
- Timeline layouts for experience and education

### ✅ Content Sections
1. **Hero** - Introduction and key contact info
2. **About** - Professional summary with stats
3. **Experience** - Timeline of roles (2 positions included)
4. **Skills** - Categorized technical skills
5. **Projects** - Featured portfolio projects
6. **Education** - Educational background
7. **Contact** - Multiple contact methods and social links

## Customization Guide

### Update Your Information

Edit `src/data/portfolio.ts`:
- Update `personal` sections with your details
- Add/remove experience entries
- Update skills by category
- Modify education timeline
- Add your project details

### Change Colors/Theme

Global styles in `src/styles/index.css`
Component colors in respective `.module.css` files

Primary colors:
- Cyan: `#00d4ff`
- Blue: `#0099ff`
- Dark background: `#0a0e27`

### Add Project Links

In `src/components/Projects.tsx`, add project URLs with:
```tsx
<a href="https://your-project.com" target="_blank">View Project</a>
```

### Update Social Links

Edit in both:
- `src/components/Header.tsx`
- `src/components/Contact.tsx`

Replace placeholder URLs with your actual profiles.

## Deployment Options

### Quick Deploy - Vercel
```bash
npm i -g vercel
vercel
```

### Quick Deploy - Netlify
1. Push to GitHub
2. Connect repository to Netlify
3. Auto-deploys on push

### Manual Deploy - GitHub Pages
```bash
npm run build
# Deploy contents of dist/ folder
```

## Best Practices Implemented

- ✅ TypeScript for type safety
- ✅ CSS Modules for scoped styling
- ✅ React hooks (functional components)
- ✅ Semantic HTML
- ✅ Accessibility (WCAG compliance)
- ✅ Performance optimized (Vite)
- ✅ Mobile responsive
- ✅ SEO friendly
- ✅ Error handling
- ✅ Clean code structure

## Performance Optimizations

- Lazy loading support ready
- CSS modules prevent style conflicts
- Vite's optimal chunking
- Production build optimizations
- Image assets ready for CDN

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- --port 3001
```

### Build Errors
```bash
# Clear dependencies and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### TypeScript Errors
- Ensure tsconfig.json is correct
- Run `npm run lint` to check for issues

## Support & Resources

- [React Docs](https://react.dev)
- [TypeScript Docs](https://www.typescriptlang.org)
- [Vite Docs](https://vitejs.dev)
- [CSS Modules](https://github.com/css-modules/css-modules)

## Next Steps

1. ✅ Customize `src/data/portfolio.ts` with your information
2. ✅ Update social media links in components
3. ✅ Test on mobile devices
4. ✅ Deploy to your hosting platform
5. ✅ Share with recruiters and network

---

**Ready to impress recruiters with a professional portfolio! 🚀**

For questions or support, refer to the project documentation or framework docs.
