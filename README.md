# 🎟️ MovieFest - Modern Ticketing Web App

**TicketLake** is a dynamic and responsive ticketing shop built with **Next.js** and **SCSS**. Users can explore, manage, and showcase events with ease — including uploading custom images for each ticket. The platform combines great UI/UX with powerful form handling and cloud integration.

Live Demo: [ticket-lake-two.vercel.app](https://ticket-lake-two.vercel.app/)

---

## 🚀 Features

- ⚡ **Built with Next.js** — Fast performance, server-side rendering, and SEO optimized.
- 💅 **Styled with SCSS** — Custom, modular styling for flexibility and clean design.
- 🖼️ **Image Upload Support** — Upload and manage ticket/event images via Cloudinary.
- 📝 **Form Validation** — Forms built using `react-hook-form` and `yup` for smooth and reliable input handling.
- 🎭 **Dynamic Event Pages** — Each ticket/event has a dedicated, shareable page.
- 📱 **Fully Responsive Design** — Looks great on mobile, tablet, and desktop.
- 🌩️ **Cloudinary Integration** — Store and serve images efficiently in the cloud.

---

## 📄 Pages

### 🏠 Home
- Hero section with featured events
- Event cards with quick-view information

### 📄 Event Details
- Full description, ticket options, and image of the event
- Image display pulled from Cloudinary uploads

### 🛒 Ticket Upload / Create Event *(Admin or User form)*
- Upload ticket details and images
- Real-time form validation and preview

---

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org/)
- **Styling:** SCSS Modules
- **Forms:** `react-hook-form`, `yup`, `@hookform/resolvers`
- **Image Upload:** [Cloudinary](https://cloudinary.com/)
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Deployment:** [Vercel](https://vercel.com/)

---
📁 Folder Structure
/pages
  index.tsx         # Home page
  /event
    [id].tsx        # Event detail page

/public
  /images           # Static images

/styles
  globals.scss
  Home.module.scss

/components
  Navbar.tsx
  Footer.tsx
  EventCard.tsx
  ImageUploader.tsx  # Cloudinary-based uploader

  ---

🖼️Image Upload Feature
. Tickets/events support image uploads using Cloudinary.
. Users can upload JPG/PNG images via a drag-and-drop or file input.
. Uploaded images are displayed on the event's detail page.
