---
title: "Master's Project"
pubDate: 2026-04-21
tags:
  - Unreal Engine
  - Blueprints
  - Procedural Audio
---

Generating audio in real time can seem like a silver bullet for game sound designers. No memory cost? Reaction to any situation? Reusability? It sounds like a dream.

But leading procedural audio tools like [Tsugi Gamesynth](https://tsugi-studio.com/web/en/products-gamesynth.html) don't integrate into game engines or middleware in real time. So you're gonna have to create your own.

What kind of usability can you expect creating your own procedural audio system? Especially using simple, free tools? That's the question I wanted to answer in my recording arts master's project at CU Denver, read on for for a summary of my findings and the [source code](https://github.com/5wiley) for my system.

# Project Structure

I wanted to create something with free tools that's simple to design and use while being dynamic and reusable. I wanted it to sound good, ideally. We will take a look at the project in action later on.

With that in mind, I made a system to generate cloth-like sounds in real time. The actual meat of the project is two things. A Blueprint node in Unreal Engine to get data out of Chaos Cloth simulations and a Pure Data patch that uses the data to make the sound.

# Blueprint Plugin

The plugin is written to read the `FClothSimulData` struct found in simulated skeletal meshes in Unreal. The friction node, which is all that presently exists, accepts the simulated mesh and meshes you want to track friction with. Internally, in C++, it calculates the speed of all particles touching a contacting body and outputs the speed and contacting percentage. The speed and contact outputs are designed to be used as real time parameter controls (RTPCs) for friction sound design.

# Pure Data

The Pd patch is just a prototype to use the [Sound Design Toolkit](https://github.com/SkAT-VG/SDT), an open source "virtual foley box" C++ library for generating physical sounds using basic synthesis methods. I used the `scraping~` object to generate a random trigger sequence like an uneven surface to drive the `friction~` object, which actually makes the sound. The speed and contact RTPCs work to control the intensity of the SDT objects. You can scale the parameter's effects in Pd using simple multiplication.

# Port

## References

- [Markdown Syntax](https://www.markdownguide.org/basic-syntax/)
- [Hugo Markdown](https://gohugo.io/content-management/formats/#markdown)
