import React from 'react'
import MenuItem from './components/MenuItem'
import { mainCourses, desserts } from './data/menuData'

export default function App() {
  const totalItems = mainCourses.length + desserts.length
  const currentYear = new Date().getFullYear()

  return (
    <div className="app">
      <header className="header">
        <div>
          <h1 className="title">Delizia</h1>
          <p className="tagline">Delicious Food, Made Fresh Daily</p>
        </div>
        <div className="hours-contact">
          <p>Open Daily: 11 AM - 10 PM</p>
          <p>Contact: +91 98765 43210</p>
        </div>
      </header>

      <main className="main">
        <section className="category">
          <h2>Main Courses</h2>
          <div className="grid">
            {mainCourses.map(item => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

        <section className="category">
          <h2>Desserts</h2>
          <div className="grid">
            {desserts.map(item => (
              <MenuItem key={item.id} {...item} />
            ))}
          </div>
        </section>

      </main>

      <aside className="restaurant-info">
        <h3>Restaurant Info</h3>
        <p>Total items on menu: <strong>{totalItems}</strong></p>
        <p>Hours: Open Daily: 11 AM - 10 PM</p>
        <p>Address: 23 Food Lane, Foodsville</p>
      </aside>

      <footer className="footer">
        <div>
          <p>Delizia</p>
          <p><a href="mailto:info@delizia.example">info@delizia.example</a></p>
        </div>
        <div>
          <p>© {currentYear} Delizia</p>
        </div>
      </footer>
    </div>
  )
}