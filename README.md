# Fitoria Frontend - Workout Journal App 💪📝

## 📋 Table of Contents
- [Introduction](#introduction)
- [Tech Stack](#tech-stack)
- [Screenshots](#screenshots)
- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## 🏋️‍♂️ Introduction
This repository contains the frontend code for Fitoria, a workout journal and training assistant application. The frontend is built using React, Bootstrap, and Recharts, allowing users to log workouts, track body metrics, and receive AI-powered training advice.

## 🛠️ Tech Stack
- **Frontend**: React, Axios, Bootstrap 5, Recharts
- **API Integration**: Axios for making requests to the backend
- **Charts**: Recharts for visualizing workout and body info history
- **Styling**: Bootstrap 5

---

## 📸 Screenshots (Optional)
If you have screenshots, you can include them here:

![Dashboard Screenshot](path/to/dashboard.png)
![Workout History Screenshot](path/to/workout-history.png)

You can add screenshots by saving them in a folder (e.g., `assets/screenshots/`) and referencing them in your `README.md` file.

---

## 💻 Installation

### Prerequisites
- Node.js & npm
- An OpenAI API key (stored in `.env` file)

### Step 1: Clone the Repository
```bash
git clone https://github.com/yourusername/fitoria-frontend.git
cd fitoria-frontend
```

### Step 2: Install Dependencies
```bash
mpm install
```

### Step 3: Set Up Environment Variables
Create a `.env` file in the root directiory with the follow contents:
```makefile
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_BACKEND_URL=http://localhost:8080
```

### Step 4: Start the Frontend
```bash
npm start
```

---

## 📖 Usage

1. Open your browser and navigate to `http://localhost:3000`.
2. Register or log in to access the dashboard.
3. Log workouts and body info.
4. View historical data and trends through charts.
5. Get personalized training advice using the AI feature.

---

## ⚙️ Environment Variables

In your `.env` file, you'll need:
```makefile
REACT_APP_OPENAI_API_KEY=your_openai_api_key
REACT_APP_BACKEND_URL=http://localhost:8080
```

Make sure that your `.env` file is added to `.gitignore` to prevent exposing sensitive data.

---

## 🌟 Future Improvements

- Add a mobile-friendly version using React Native.
- Implement dark mode and other UI enhancements.
- Add progress tracking and achievement badges.
- Integrate a leaderboard feature to compare user progress.

---

## License
This project is licensed under the MIT License.
