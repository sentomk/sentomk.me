---
title: JavaScript Basics for Beginners
slug: js-basics
description: Core JavaScript concepts — variables, functions, and control flow.
longDescription: A beginner-friendly walkthrough of JavaScript fundamentals, from variable declarations to functions and DOM manipulation.
cardImage: "https://sentomk.me/favicon-32.png"
tags: ["javascript", "web", "code"]
readTime: 5
featured: true
timestamp: 2025-03-15T00:00:00+00:00
---

## Variables

JavaScript has three ways to declare variables:

```javascript
const name = "Rust";   // can't be reassigned
let age = 5;           // can be reassigned
var old = "avoid";     // function-scoped, avoid using
```

## Data Types

```javascript
const str = "hello";        // string
const num = 42;             // number
const bool = true;          // boolean
const arr = [1, 2, 3];      // array
const obj = { key: "value" }; // object
const nothing = null;       // null
const undef = undefined;    // undefined
```

## Functions

### Function Declaration

```javascript
function add(a, b) {
    return a + b;
}
```

### Arrow Functions

```javascript
const add = (a, b) => a + b;
const double = x => x * 2;
```

## Control Flow

```javascript
if (score >= 90) {
    console.log("A");
} else if (score >= 80) {
    console.log("B");
} else {
    console.log("C");
}

// Loops
for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (const item of items) {
    console.log(item);
}
```

## DOM Manipulation

```javascript
// Select elements
const heading = document.querySelector("h1");
const buttons = document.querySelectorAll("button");

// Modify content
heading.textContent = "New Title";
heading.style.color = "blue";

// Events
button.addEventListener("click", () => {
    alert("Clicked!");
});
```

## Modern JavaScript Features

- **Template literals**: `` `Hello, ${name}!` ``
- **Destructuring**: `const { name, age } = person;`
- **Spread operator**: `const copy = [...arr];`
- **Async/await**: `const data = await fetch(url);`

JavaScript is everywhere — browser, server (Node.js), and even desktop apps.
