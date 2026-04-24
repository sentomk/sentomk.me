---
title: Understanding Ownership in Rust
slug: rust-ownership
description: Rust's ownership model explained with examples.
longDescription: Ownership is Rust's most unique feature. This post breaks down how it works, borrowing, references, and why the compiler is so strict.
cardImage: "https://sentomk.me/favicon-32.png"
tags: ["rust", "systems-programming", "code"]
readTime: 7
featured: true
series: rust-basics
timestamp: 2025-02-15T00:00:00+00:00
---

## What is Ownership?

Every value in Rust has a single **owner**. When the owner goes out of scope, the value is dropped.

```rust
{
    let s = String::from("hello");
    // s is valid here
} // s goes out of scope → memory freed
```

## The Rules

1. Each value has exactly one owner
2. There can be at most one mutable reference
3. References must always be valid

## Moving vs Copying

```rust
// Move: ownership transfers
let s1 = String::from("hello");
let s2 = s1;
// println!("{s1}"); // Error! s1 is moved

// Copy: stack-only data is copied
let x = 5;
let y = x;
println!("{x}"); // OK, integers implement Copy
```

## Borrowing

References let you use a value without taking ownership:

```rust
fn calculate_len(s: &String) -> usize {
    s.len()
} // s is not dropped here

let s = String::from("hello");
let len = calculate_len(&s);
println!("{s}"); // OK
```

## Mutable References

```rust
fn change(s: &mut String) {
    s.push_str(" world");
}

let mut s = String::from("hello");
change(&mut s);
```

A key rule: you can have **either** one mutable reference **or** any number of immutable references.

## Lifetimes

Lifetimes ensure references are always valid:

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() { x } else { y }
}
```

The `'a` annotation means "the returned reference lives as long as both inputs."

## Summary

Ownership might feel restrictive at first, but the compiler's strictness prevents entire categories of bugs. Once it clicks, you'll appreciate the safety guarantees.
