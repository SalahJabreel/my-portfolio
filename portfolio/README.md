# Portfolio Website - صلاح الدين جبريل

A modern, responsive personal portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Responsive Design**: Works perfectly on mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **RTL Support**: Full Arabic language support with right-to-left layout
- **Smooth Animations**: Beautiful fade-in and slide animations using Framer Motion
- **Contact Form**: Functional contact form with EmailJS integration
- **Smooth Scrolling**: Navigation with smooth scroll to sections
- **Interactive Elements**: Hover effects and animated components

## 🛠️ Technologies Used

- **React.js** - Frontend framework
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Icons** - Icon library
- **EmailJS** - Email service for contact form

## 📋 Sections

1. **Hero** - Introduction with profile image and call-to-action buttons
2. **About** - Detailed information about expertise and background
3. **Education** - Academic qualifications with timeline design
4. **Experience** - Work experience with detailed descriptions
5. **Skills** - Technical and soft skills with progress indicators
6. **Certifications** - Professional certifications and achievements
7. **Languages** - Language proficiency levels
8. **Contact** - Contact form and information
9. **Footer** - Copyright and additional information

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## ⚙️ Configuration

### EmailJS Setup

To enable the contact form:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and template
3. Update the credentials in `src/components/Contact.jsx`:

```javascript
const serviceId = 'YOUR_SERVICE_ID'
const templateId = 'YOUR_TEMPLATE_ID'
const publicKey = 'YOUR_PUBLIC_KEY'
```

### Customization

- **Profile Image**: Replace the placeholder image URL in `src/components/Hero.jsx`
- **Contact Information**: Update contact details in `src/components/Contact.jsx`
- **Social Links**: Update social media links in navigation and contact sections
- **Colors**: Modify the color scheme in `tailwind.config.js`

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design Features

- **Arabic Typography**: Uses Tajawal font for better Arabic text rendering
- **Color Scheme**: Blue primary colors with gray accents
- **Animations**: Fade-in, slide-up, and scale animations
- **Timeline Design**: For education and experience sections
- **Progress Bars**: For skills visualization
- **Gradient Effects**: Modern gradient backgrounds and elements

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Contact

**صلاح الدين جبريل**
- Email: salah.gabriel@example.com
- Location: الحديدة، اليمن

---

*Built with ❤️ and ⚛️ in Yemen*
