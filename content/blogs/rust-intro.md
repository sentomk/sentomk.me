---
title: Getting Started with Rust
slug: rust-intro
description: A first look at Rust — why it matters and how to get started.
longDescription: Rust is a systems programming language focused on safety, speed, and concurrency. This post covers installation, basic syntax, and your first program.
cardImage: "https://sentomk.me/favicon-32.png"
tags: ["rust", "systems-programming", "code"]
readTime: 5
featured: true
series: rust-basics
timestamp: 2025-02-01T00:00:00+00:00
---

## Why Rust?

Rust has been the most loved language on Stack Overflow for years running. It offers:

- **Memory safety** without a garbage collector
- **Zero-cost abstractions** — you don't pay for what you don't use
- **Fearless concurrency** — the compiler catches data races at build time

## Installing Rust

The recommended way is via `rustup`:

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

After installation, verify it works:

```bash
rustc --version
cargo --version
```

## Hello, World!

```rust
fn main() {
    println!("Hello, Rust!");
}
```

Save this as `main.rs` and run with `rustc main.rs && ./main`.

## Cargo — Rust's Package Manager

Cargo handles building, testing, and dependencies:

```bash
cargo new my_project
cd my_project
cargo run
```

## Variables and Mutability

By default, variables in Rust are **immutable**:

```rust
let x = 5;
// x = 6; // Error! Can't mutate
let mut y = 5;
y = 6; // OK
```

## Next Steps

In the next post, we'll explore Rust's ownership model — the feature that makes memory safety possible without a garbage collector.
