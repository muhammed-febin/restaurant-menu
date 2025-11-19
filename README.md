Restaurant Menu Display

A React application built using Vite that displays a restaurant menu with reusable components, category-wise listings, and conditional rendering for vegetarian items. The project demonstrates React component architecture, props handling, and list rendering using the map() method.

Project Description

This project showcases a restaurant menu divided into categories such as Main Courses and Desserts. Each item is displayed using a reusable MenuItem component. The website is styled for clean visual presentation and deployed online using Vercel/Netlify.

Components
1. MenuItem Component

Reusable component for displaying individual menu items

Accepts props:

name

category

price

description

isVegetarian

Displays a Vegetarian badge conditionally based on the isVegetarian prop

2. App Component

Renders multiple menu category sections

Uses arrays of menu items and maps over them

Shows restaurant info section

Displays footer with restaurant details

Component Structure
src/
├── App.jsx
├── main.jsx
├── index.css
├── components/
│   └── MenuItem.jsx
└── data/
    └── menuData.js

Links

Replace these with your actual links before submitting.

GitHub Repository: https://github.com/muhammed-febin/restaurant-menu.git

Live Website: https://restaurant-menu-liard.vercel.app/

Run Locally

Clone the repository

git clone <your-github-repo-link>


Install dependencies

npm install


Start the development server

npm run dev