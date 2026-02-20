# 🎹 Keyboard Sound Player

A simple interactive drum kit that plays sounds when you press keys on your keyboard. This was one of my earliest hands-on practice projects when I was first learning **JavaScript DOM manipulation**, built about 3 years ago.

---

## 🧠 About the Project

This project was built purely as a learning exercise to get comfortable working with the DOM. The goal wasn't to build something complex - it was to understand how JavaScript can listen to user interactions and dynamically update what's on screen in response.

## ✨ Features

- Press a key on your keyboard to trigger a corresponding sound
- Keys visually "pop" with a highlight animation when played
- The active style is automatically removed once the transition ends

## 🛠️ Built With

- HTML
- CSS (transitions & animations)
- Vanilla JavaScript (no libraries or frameworks)

## 📚 Concepts Practiced

This project helped me get hands-on experience with:

- `document.querySelector` and selecting elements by data attributes
- Listening to keyboard events with `addEventListener('keydown', ...)`
- Adding and removing CSS classes dynamically via `classList`
- Using the `transitionend` event to time class removal
- Resetting and playing `<audio>` elements with `audio.currentTime = 0`

## 🔙 Looking Back

Coming back to this project 3 years later, I can spot a few bugs I left behind — a typo (`this.class` instead of `this.classList`), an incomplete CSS transition declaration, and a wrong property name check in the transition handler. Small mistakes, but they're a good reminder of how much the learning process involves breaking things and figuring out why.

---

*A small project, but an important step in the journey.*

---

## 📖 Reference

This project was inspired by and built as part of the **[JavaScript30](https://javascript30.com/)** course by Wes Bos — a free 30-day vanilla JavaScript coding challenge.
