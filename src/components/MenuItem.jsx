import React from 'react'

export default function MenuItem({ name, category, price, description, isVegetarian }) {
  return (
    <article className="menu-item">
      <div className="menu-item-header">
        <h3 className="menu-item-name">{name}</h3>
        <div className="menu-item-meta">
          <span className="menu-item-price">₹{price.toFixed(2)}</span>
          {isVegetarian && <span className="veg-badge">Vegetarian</span>}
        </div>
      </div>

      <p className="menu-item-desc">{description}</p>
      <p className="menu-item-category">Category: <strong>{category}</strong></p>
    </article>
  )
}