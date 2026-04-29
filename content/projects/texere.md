---
title: texere
slug: texere
description: A type-safe, Unicode-aware UTF-8 string library for C++17.
longDescription: texere is a Unicode-aware C++17 string library that provides a type-safe, UTF-8 string value type as a drop-in replacement for std::string in Unicode-aware contexts.
tags: ["cpp", "unicode", "utf-8", "open-source", "header-only"]
githubUrl: https://github.com/sentomk/texere
timestamp: 2026-04-22T07:34:17+00:00
featured: true
---

## Overview

**texere** (*Latin for "to weave"*) is a Unicode-aware C++17 string library that provides a type-safe, UTF-8 string value type as a drop-in replacement for `std::string` in Unicode-aware contexts. It is not a replacement for ICU — it is a lightweight, modern, zero-surprise string abstraction.

## Key Features

- **Three-track factory**: `from_utf8()` / `from_utf8_lossy()` / `from_utf8_unchecked()` — forces callers to explicitly handle invalid UTF-8
- **Integer indexing disabled**: `operator[]` is `= delete`; use `grapheme_at(n)` or iterators instead
- **Three-tier iteration**: `bytes()` → `codepoints()` → `graphemes()`, corresponding to the three Unicode granularity levels
- **Explicit normalization**: no automatic NFC; provides `normalize()` and `equals_normalized()`
- **Opaque Index**: obtainable only from iterators, preventing confusion between byte offsets and grapheme indices
- **Unicode 15.1**: grapheme cluster boundaries, case mapping, and normalization all based on Unicode 15.1
