# 📰 Infomaniac - News Aggregator App

Infomaniac is a modern **React-based news application** that fetches and displays the latest headlines by category using the NewsAPI. It provides a smooth user experience with infinite scrolling, dynamic routing, and a loading progress bar.

---

## 📌 Project Overview

* **Name:** Infomaniac
* **Purpose:** Browse latest news by category
* **Source:** https://newsapi.org/v2/top-headlines

### ✨ Key Features

* 📂 Category-based news (Sports, Business, Entertainment, etc.)
* 🔄 Infinite scrolling for seamless browsing
* 📊 Top loading progress bar
* 🧭 Dynamic routing using React Router
* 📰 Clean article cards UI
* 📱 Responsive Bootstrap layout

---

## 🚀 Tech Stack

* **Frontend:** React (Hooks + Functional Components)
* **Routing:** React Router v6
* **UI:** Bootstrap
* **APIs:** NewsAPI
* **Libraries:**

  * react-top-loading-bar
  * react-infinite-scroll-component
  * prop-types

---

## ⚙️ Prerequisites

* Node.js (>= 14)
* npm or yarn
* NewsAPI key

👉 Get your free API key: https://newsapi.org/register

---

## 🔐 Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_NEWS_API=your_api_key_here
```

---

## 🛠️ Installation

```bash
git clone https://github.com/your-username/infomaniac-newsapp.git
cd infomaniac-newsapp
npm install
```

---

## ▶️ Run Locally

```bash
npm start
```

Open: http://localhost:3000

---

## 🧩 Routes

| Path           | Category         |
| -------------- | ---------------- |
| /              | Sports (default) |
| /business      | Business         |
| /entertainment | Entertainment    |
| /general       | General          |
| /health        | Health           |
| /science       | Science          |
| /sports        | Sports           |
| /technology    | Technology       |

---

## 🔍 Developer Notes

### ⚙️ App Behavior

* `App.js` controls:

  * `pageSize = 5`
  * `country = "in"`

* `News.js` handles:

  * Initial data fetch (`updateNews`)
  * Infinite scrolling (`fetchMoreData`)
  * Progress bar updates (10 → 30 → 70 → 100)
  * Dynamic document title per category

---

### ⚠️ Improvements / Fixes

* Replace hardcoded API key with:

```js
props.apiKey
```

* Avoid state update issues by using functional updates:

```js
setState(prev => ...)
```

---

## 📦 Available Scripts

```bash
npm start     # Run development server
npm test      # Run tests
npm run build # Build for production
npm run eject # Eject config
```

---

## 🚀 Production Build

```bash
npm run build
```

Deploy the `build/` folder.

---

## 🛡️ Notes for Reviewers

* `components/Spinner.js` → loading UI
* `components/NewsItem.js` → article card UI
* Modify `pageSize` and `country` in `App.js`

---

## 🤝 Contributing

1. Fork the repo
2. Create a branch:

```bash
git checkout -b feat/your-feature
```

3. Commit changes
4. Push and create PR

---

## 👨‍💻 Author

Nevil Mehta

---

## 📜 License

This project is for educational purposes only.
