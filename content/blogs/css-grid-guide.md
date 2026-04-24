---
title: CSS Grid Layout Guide
slug: css-grid-guide
description: A practical guide to CSS Grid for modern layouts.
longDescription: CSS Grid is the most powerful layout system in CSS. Learn grid containers, tracks, areas, and responsive patterns with real examples.
cardImage: "https://sentomk.me/favicon-32.png"
tags: ["css", "web", "code"]
readTime: 6
featured: true
timestamp: 2025-03-01T00:00:00+00:00
---

## What is CSS Grid?

CSS Grid is a two-dimensional layout system that lets you control columns **and** rows simultaneously.

```css
.container {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 16px;
}
```

## Defining Columns and Rows

```css
.container {
    grid-template-columns: 200px 1fr 2fr;
    grid-template-rows: auto 1fr auto;
}
```

- `fr` — fractional unit, distributes available space
- `auto` — sized by content
- Fixed units like `px`, `%`, `rem`

## The `repeat()` Function

```css
.container {
    grid-template-columns: repeat(3, 1fr);
}
/* Same as: 1fr 1fr 1fr */
```

## Placing Items

```css
.header {
    grid-column: 1 / -1; /* span all columns */
}
.sidebar {
    grid-row: 2 / 4;
}
.main {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}
```

## Grid Areas

```css
.container {
    grid-template-areas:
        "header header header"
        "sidebar main main"
        "footer footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main { grid-area: main; }
.footer { grid-area: footer; }
```

## Responsive Patterns

### Auto-fill with minmax

```css
.container {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
}
```

This creates as many 250px+ columns as will fit — no media queries needed.

## Grid vs Flexbox

- **Flexbox**: one-dimensional (row **or** column)
- **Grid**: two-dimensional (rows **and** columns together)

Use Grid for page layouts, Flexbox for component-level alignment.
