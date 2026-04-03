
## ✨ Features

- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices
- **Modern UI/UX**: Professional gradient design with smooth animations
- **Dark Theme**: Eye-friendly dark theme with cyan accent colors
- **Smooth Navigation**: Seamless section navigation with scroll behavior
- **Performance Optimized**: Built with Vite for fast loading times
- **Accessible**: WCAG compliant with proper semantic HTML
- **TypeScript**: Fully typed React components for type safety

## 📋 Sections

1. **Header/Navigation**: Sticky navigation with smooth scrolling
2. **Hero Section**: Compelling introduction with call-to-action buttons
3. **About**: Professional summary and key statistics
4. **Experience**: Timeline of professional roles and responsibilities
5. **Skills**: Technical skills organized by categories
6. **Projects**: Featured portfolio projects with details
7. **Education**: Educational background and achievements
8. **Contact**: Multiple ways to get in touch with social media links

## 🛠️ Tech Stack

- **React 18**: Modern React with hooks
- **TypeScript**: Type-safe development
- **Vite**: Lightning-fast build tool
- **CSS Modules**: Scoped and maintainable styling
- **React Icons**: Beautiful icon library
- **React Scroll**: Smooth scroll navigation

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Development

The project uses Vite for fast development and building. The development server runs on `http://localhost:3000`.

### Project Structure

```
src/
├── components/        # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   ├── Education.tsx
│   └── Contact.tsx
├── data/
│   └── portfolio.ts   # Portfolio content data
├── styles/
│   ├── Header.module.css
│   ├── Hero.module.css
│   ├── About.module.css
│   ├── Experience.module.css
│   ├── Skills.module.css
│   ├── Projects.module.css
│   ├── Education.module.css
│   ├── Contact.module.css
│   └── index.css      # Global styles
├── App.tsx
└── main.tsx
```

## 🎨 Customization

### Update Personal Information

Edit [src/data/portfolio.ts](src/data/portfolio.ts) to update:
- Personal information (name, email, phone, location)
- Professional experience
- Skills and expertise
- Education background
- Projects

### Modify Styling

Each component has its own CSS module for easy customization:
- Colors: Update the cyan gradient colors (#00d4ff, #0099ff)
- Fonts: Modify font sizes and weights
- Spacing: Adjust padding and margins

### Add Social Media Links

Update the social media links in:
- [Header Component](src/components/Header.tsx)
- [Contact Component](src/components/Contact.tsx)

## 🔧 Configuration

- **Vite Config**: [vite.config.ts](vite.config.ts)
- **TypeScript Config**: [tsconfig.json](tsconfig.json)
- **Package Dependencies**: [package.json](package.json)

## 📱 Responsive Breakpoints

- Desktop: 1024px and above
- Tablet: 768px - 1023px
- Mobile: Below 768px

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels where needed
- Keyboard navigation support
- Color contrast compliance
- Focus states on interactive elements

## 🚢 Deployment

This portfolio can be easily deployed to:
- **Vercel**: Zero-config deployment
- **Netlify**: Drag and drop deployment
- **GitHub Pages**: Free hosting
- **AWS S3 + CloudFront**: Scalable solution

Build command: `npm run build`
Build output directory: `dist`

## 📄 License

© 2024 Subash V. All rights reserved.

**Built with ❤️ using React and TypeScript**
