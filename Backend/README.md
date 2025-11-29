Project Frontend GitHub Link : https://github.com/sachin97581/College_Group_Project/tree/main/Frontend

# AI Chatbot Backend – Patient Management API

This backend provides a RESTful API for managing patient records, built with Node.js, Express, and MongoDB.

---

## Table of Contents

- [Features](#features)
- [Setup](#setup)
- [API Endpoints](#api-endpoints)
  - [Create Patient](#create-patient)
  - [Get All Patients](#get-all-patients)
  - [Get Patient by Name](#get-patient-by-name)
- [Patient Model](#patient-model)
- [Development](#development)
- [Notes](#notes)

---

## Features

- Add new patients
- Retrieve all patients
- Retrieve a patient by name
- MongoDB integration

---

## Setup

1. **Clone the repository**  
   ```sh
   git clone <repo-url>
   cd Backend
   npm install

   Start MongoDB
    Ensure MongoDB is running locally on mongodb://127.0.0.1:27017/ai_chatbot.
    Run the server
    
    npm start

   API Endpoints
    Create Patient
    URL: /patients
    Method: POST

        {
      "name": "John Doe",
      "discease": "Flu",
      "age": 30,
      "condition": "Stable"
    }
