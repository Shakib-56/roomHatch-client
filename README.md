# RoomHatch

## Live Site URL
Client Side URL:https://roomhatch-auth.web.app/
Backend URl:https://room-hatch-server.vercel.app/

## Project Overview
RoomHatch is a roommate finder platform designed to connect individuals looking for compatible roommates in a simple, user-friendly way.

## Key Features

- **User Authentication:** Secure signup and login system to manage personal listings and profiles.
- **Browse Listings:** View all available roommate posts with filters for location, availability, and preferences.
- **Add & Manage Listings:** Users can create, update, or delete their own roommate listings easily.
- **Featured Roommate Posts:** Highlighted section showcasing available and verified roommate posts for quick browsing.
- **Responsive Design:** Fully responsive UI ensuring smooth experience across desktops, tablets, and mobiles.
- **Private & Protected Routes:** Ensures users only access their own data with protected pages for managing listings.
- **Integrated Search & Filters:** Find suitable roommates based on criteria like budget, location, and availability.
- **Notifications & Alerts:** Real-time feedback and confirmation for actions like adding or deleting posts.

## Backend

The backend server is built using **Node.js** and **Express.js**, with **MongoDB** as the database to store roommate listings and user data. The server exposes RESTful APIs that the frontend consumes for:

- User authentication and authorization
- Creating, reading, updating, and deleting roommate listings
- Filtering and searching roommate posts
- Securing user-specific data with protected routes

The backend is designed for scalability and security, with proper validation and error handling to ensure a smooth and safe user experience.

## Dependencies and Their Use Cases

- **React** (`react`, `react-dom`): Core JavaScript library for building the user interface components and managing the app state.
- **React Router** (`react-router`): Handles routing and navigation within the single-page application, enabling private and protected routes.
- **Firebase** (`firebase`): Provides backend services including authentication, database, and hosting.
- **Tailwind CSS** (`tailwindcss`, `@tailwindcss/vite`): Utility-first CSS framework used for fast and responsive styling, with Vite plugin integration for build optimizations.
- **Emotion React** (`@emotion/react`): Library for writing CSS styles with JavaScript, enabling dynamic and scoped styling.
- **Glide.js** (`@glidejs/glide`): Lightweight JavaScript slider/carousel library to create responsive sliders for featured posts or image galleries.
- **Lottie React** (`lottie-react`): Used to render lightweight, scalable animations exported from Adobe After Effects.
- **React Awesome Reveal** (`react-awesome-reveal`): Adds scroll-triggered animation effects to React components for enhanced user experience.
- **React Icons** (`react-icons`): Provides a collection of popular icon packs as React components for easy use throughout the app.
- **SweetAlert2** (`sweetalert2`): A beautiful, customizable popup box library used for alerts, confirmations, and notifications.

---

Feel free to replace the Live Site URL with your actual deployed URL and tweak the descriptions based on your project specifics.
