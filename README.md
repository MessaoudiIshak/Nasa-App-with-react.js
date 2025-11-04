# Astronomy Picture of the Day (APOD) Project

This is a simple project built with **React** and **Vite** that fetches NASA's Astronomy Picture of the Day (APOD) API.

It allows you to:

- View today’s astronomy picture or video
- See the title, date, and explanation
- Open a sidebar for more details

All data is stored in **localStorage** for the current day to reduce API calls and improve load speed.

---

## Features

| Feature               | Description                                                    |
|-----------------------|----------------------------------------------------------------|
| View Today’s APOD     | Displays the latest astronomy picture or video                 |
| Sidebar Details       | Click the info button to see the title, date, and explanation  |
| Persistent Daily Data | Data is cached in localStorage for the day                     |
| Loading State         | Shows a spinner while fetching data from NASA API              |
| Error Handling        | Shows a message if the API fails or is unreachable             |

---

## Run the App Locally

1. Clone the repository and navigate into the project directory.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser to the URL shown in the terminal (commonly http://localhost:5173).

---


## Live Demo

You can try the app online without installing anything:

[Live Demo](https://astronomypifromnasa.netlify.app/)

---

## Disclaimer

The app relies on NASA’s public API. Occasionally, the API may fail or respond slowly, which could cause the image/video not to load.

In that case, try refreshing the page or wait a few moments for the API to respond.

Data is cached per day, so once loaded, it will remain available in your browser until the next day.