# Ryan's Tech Service Website

A modern, responsive website built with React, Vite, and TailwindCSS featuring a contact form with EmailJS integration and Google reCAPTCHA validation.

## Features

✨ **Modern Design**
- Clean, white aesthetic with blue accent colors
- Fully responsive across mobile, tablet, and desktop
- Smooth scroll navigation between sections

📱 **Sections**
- **Hero** - Engaging homepage with call-to-action button
- **Services** - Grid display of 6 core IT services with hover effects
- **About** - Company information with key statistics
- **Contact** - Contact form with validation and email integration

🔧 **Technology Stack**
- **Frontend**: React 19, Vite, Tailwind CSS v4
- **Forms**: React Hook Form for validation
- **Backend & Email**: EmailJS (Serverless email delivery)
- **Security**: Google reCAPTCHA v2 (Checkbox validation)

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- EmailJS account (Free tier)
- Google reCAPTCHA account

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up Environment Variables:**
   Create a `.env` file in the root directory and add your EmailJS and reCAPTCHA keys:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   VITE_RECAPTCHA_SITE_KEY=your_recaptcha_site_key
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```
   
   The site will be available at `http://localhost:5173/`

### EmailJS & reCAPTCHA Setup (Required for Contact Form)

1. **Google reCAPTCHA v2:**
   - Create a new site in the [Google reCAPTCHA Admin Console](https://www.google.com/recaptcha/admin/create).
   - Choose **reCAPTCHA v2 -> "I'm not a robot" Checkbox**.
   - Add `localhost` and your production domain to the Domains list.
   - Copy the **Site Key** to your `.env` file (as `VITE_RECAPTCHA_SITE_KEY`).
   - Keep the **Secret Key** handy for EmailJS.

2. **EmailJS Template:**
   - Create a free account at [EmailJS](https://www.emailjs.com/).
   - Add an Email Service (e.g., Gmail, Outlook) to get your **Service ID**.
   - Create an Email Template. Use `{{name}}`, `{{email}}`, `{{phone}}`, and `{{message}}` variables in the content.
   - Go to the template's **reCAPTCHA settings**, enable it, and paste your Google reCAPTCHA **Secret Key**.
   - Save and copy the **Template ID**.
   - Go to your EmailJS Account settings -> API Keys to find your **Public Key**.

## Project Structure

```
src/
├── components/
│   └── Header.jsx          # Navigation header
├── pages/
│   ├── Hero.jsx            # Hero section
│   ├── Services.jsx        # Services grid
│   ├── About.jsx           # About section
│   └── Contact.jsx         # Contact form
├── App.jsx                 # Main app component
├── main.jsx                # Entry point
└── index.css               # Tailwind directives
```

## Development

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customization

### Colors
- Primary (Blue): `#3B82F6`
- Hover (Darker Blue): `#1E40AF`
- Background: White (`#FFFFFF`)

Edit `tailwind.config.js` or `index.css` to customize colors.

### Content
- Update section text directly in component files
- Services list in `src/pages/Services.jsx`
- Company info in `src/pages/About.jsx`

## Deployment

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Add your `.env` variables to the Vercel project's Environment Variables settings
4. Vercel auto-deploys on push

### Option 2: Netlify
1. Push code to GitHub
2. Connect repo to Netlify
3. Build command: `npm run build`
4. Publish directory: `dist`
5. Add your `.env` variables to Netlify's Environment Variables settings

## Troubleshooting

**Form not submitting?**
- Verify all 4 keys are correctly placed in the `.env` file at the root.
- Ensure the dev server is restarted after creating the `.env` file.
- Check the browser console (F12) for EmailJS errors.

**"Invalid Domain for Site Key" error?**
- Ensure `localhost` is added to your reCAPTCHA domain settings in the Google console exactly.

**Styling issues?**
- Clear browser cache (Ctrl+Shift+Delete)
- Rebuild: `npm run dev`

## Support

For issues or questions, contact: support@ryastechservice.com

## License

© 2026 Ryan's Tech Service. All rights reserved.
