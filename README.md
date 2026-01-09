# 📚 LearnLingo — Language Tutor Platform

---

LearnLingo is a web application for finding and booking trial lessons with
language tutors. Users can browse a list of tutors, view detailed information,
add tutors to Favorites, and book trial lessons. Some features are available
only for authenticated users.

## ✨ Features

---

```ts
🔐 User authentication (Firebase Auth)
👩‍🏫 Browse tutors with pagination (Load more)
📖 View detailed tutor information (Read more)
❤️ Add / remove tutors from Favorites
⭐ Dedicated Favorites page for authorized users
💾 Favorites persistence using localStorage
🪟 Modal windows (login, register, trial lesson)
🔔 Notifications for unauthorized users (iziToast)
📱 Responsive design
```

## 🛠 Technologies

---

```bash
JavaScript (ES Modules)
Firebase
Authentication
Realtime
Database
Axios
HTML / CSS
SVG Sprite
iziToast
GitHub Pages
```

## 🚀 How It Works (Short Overview)

---

Authentication state is handled globally via onAuthStateChanged Teacher cards
are reused across pages (Teachers & Favorites) Favorites are stored per user in
localStorage Event delegation is used for card actions (read more, like, trial
lesson) Unauthorized actions trigger notifications or login modal
