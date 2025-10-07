# Birth React App

A modern, full-featured React web application for birth and healthcare resources, built with Vite for fast development and hot module replacement (HMR).

---

## 🚀 Features

- **Patient Registration & Login:** Secure sign-up and login forms for patients.
- **Progress Tracking:** Visualize pregnancy progress month-by-month with interactive charts.
- **ChatBot:** Instant answers to your questions via an embedded AI-powered chatbot.
- **Pregnancy Advice:** Month-wise advice and tips for expecting mothers.
- **AI Chat:** Advanced AI chat for personalized support.
- **Connect with Professionals:** Contact healthcare professionals directly.
- **Responsive UI:** Clean, modern, and mobile-friendly design.
- **Context API:** Global state management for patient data.

---

## 🛠️ Tech Stack

- **Frontend:** React, Vite
- **Routing:** React Router
- **State Management:** Context API
- **HTTP Requests:** Axios
- **UI:** Custom CSS (see `/src/style`)
- **Charts:** [MUI X Charts](https://mui.com/x/react-charts/) (for progress visualization)

---

## 📦 Project Structure

```
src/
  ├── pages/             # Main page components (Sign_up, Log_in, Progress, etc.)
  ├── context/           # React Context for patient data
  ├── style/             # CSS files for each feature/page
  ├── image/             # Project images and illustrations
  ├── MiscarriageData/   # Data cards for miscarriage information
  ├── App.jsx            # Main app component (routing and layout)
  ├── main.jsx           # Entry point
```

---

## 🖥️ Screenshots

![Project Screenshot](./src/image/doctorAnime.jpeg)

---

## 📝 Getting Started

### 1. **Clone the repository**
```sh
git clone https://github.com/your-username/birth-react-app.git
cd birth-react-app/Frontend
```

### 2. **Install dependencies**
```sh
npm install
```

### 3. **Start the development server**
```sh
npm run dev
```

### 4. **Open your browser**
Visit [http://localhost:5173](http://localhost:5173)

---

## 🌐 Routing Overview

| Route                  | Component                | Description                          |
|------------------------|-------------------------|--------------------------------------|
| `/`                    | `PageBody`              | Home page                            |
| `/sign-up`             | `Sign_up`               | Patient registration                 |
| `/log-in`              | `Log_in`                | Patient login                        |
| `/api/progress`        | `Progress`              | Pregnancy progress chart             |
| `/api/chatbot`         | `ChatBot`               | AI-powered chatbot                   |
| `/ai-chat`             | `Ai_Chat`               | Advanced AI chat                     |
| `/advice/:month`       | `PregnancyAdvice`       | Month-wise pregnancy advice          |
| `/connect-with`        | `Connect_with_PhNum`    | Connect with professionals           |
| `/api/Card1`-`/Card6`  | `Card1`-`Card6`         | Miscarriage info cards               |

---

## ⚙️ Backend Requirements

- The backend API should be running at `http://localhost:3000` for registration, login, and patient data.
- Update API endpoints in the React code if your backend URL changes.

---

## 🎨 Customization

- **Images:** Place your images in `src/image/` and update paths as needed.
- **Styling:** Modify or extend CSS in `src/style/` for custom themes.
- **Components:** Add new pages or features in `src/pages/`.

---

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## ❓ Troubleshooting

- **Blank Page:** Ensure your backend is running and API endpoints are correct.
- **Chart Not Displaying:** Make sure you have installed `@mui/x-charts` and imported it correctly.
- **Context Errors:** Confirm that `PatientContext` wraps your app in `App.jsx`.

---

## 📄 License

This project is for educational purposes. Please check with the author before using in production.

---

_Built with ❤️ using React, Vite, and modern web technologies._
