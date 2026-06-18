# ✨ Cursor Magic — Custom Cursor with Blend Mode

![HTML](https://img.shields.io/badge/HTML-5-orange)
![CSS](https://img.shields.io/badge/CSS-3-blue)
![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla-yellow)
![License](https://img.shields.io/badge/License-MIT-green)

## 📖 Overview

An interactive and animated custom mouse cursor built with pure **HTML, CSS & vanilla JavaScript**.  
Uses CSS `mix-blend-mode: difference` to invert colors as the cursor moves — creating a striking visual effect with zero dependencies and zero frameworks.

> Replaces the default cursor with a smooth, dynamic one that adds a modern and creative touch to any website.

---

## 🌐 Live Demo

🔗 [View Digital Clock Pro Live](https://sajjadali-fullstack.github.io/cursor-magic/)

---

## 🚀 Features

- 🖱️ Smooth custom cursor following mouse position in real-time
- 🎨 `mix-blend-mode: difference` — cursor inverts colors beneath it
- ✨ Hover interaction effects
- ⚡ Lightweight, fast & zero dependencies
- 🧩 Easy to customize — just edit CSS variables
- 📱 Works on all modern browsers

---

## 📂 Project Structure

```
cursor-magic/
├── index.html    # Markup and cursor div
├── style.css     # Cursor styling + mix-blend-mode
└── script.js     # mousemove event — x/y position tracking
```

---

## 🔁 How It Works

```
User moves mouse
    └── mousemove event fires on .container
         └── cursor.style.left = details.x
         └── cursor.style.top  = details.y
              └── mix-blend-mode: difference
                   └── Cursor inverts color of anything beneath it
```

---

## 🧠 Key Concepts

| Concept | Detail |
|---------|--------|
| `mousemove` event | Tracks real-time X/Y coordinates |
| `position: absolute` | Required for left/top positioning |
| `transform: translate(-50%, -50%)` | Centers cursor on pointer |
| `mix-blend-mode: difference` | Inverts colors under cursor |

---

## 🛠️ Built With

 HTML  
 CSS  
 JavaScript

---

## ⚙️ Setup

```bash
git clone https://github.com/sajjadali-fullstack/cursor-magic
cd cursor-magic
# Open index.html in browser — no build step needed
```

---

## 👨‍💻 Author

**Sajjad Ali** — Senior Full Stack Python Developer  
[GitHub](https://github.com/sajjadali-fullstack)

---

## 📄 License

MIT
