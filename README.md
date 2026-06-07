# 🚀 GitHub Profile Analyzer API

## 📋 Project Overview
The **GitHub Profile Analyzer API** is a robust backend service built with Node.js, Express.js, and MySQL. It integrates with the official GitHub Public API to fetch user data, evaluate repository metrics, calculate performance insights, and persist the structured analysis for instant retrieval.

---

## 🛠️ Tech Stack
* **Runtime Environment:** Node.js
* **Backend Framework:** Express.js
* **Database:** MySQL
* **HTTP Client:** Axios (for GitHub API communication)
* **Environment Management:** dotenv

---

## 📦 Dependencies
Reviewers should run the following commands to install the exact required project packages:

```bash
# Production Dependencies
npm install express mysql2 axios dotenv cors

# Development Dependencies
npm install --save-dev nodemon
```

---

## ✨ Features

### ⚙️ Core Functionality
* **On-Demand Fetching:** Retrieves real-time profile and repository data via GitHub usernames.
* **Smart Persistence:** Saves processed analytics directly into a MySQL database.
* **Data Retrieval:** Exposes endpoints to fetch all analyzed profiles or query a specific user.

### 🏆 Additional Features Implemented
These custom additions exceed the base project requirements and provide advanced analytics:
* **Language Breakdown:** Counts and breaks down repositories by programming language.
* **Star Metrics:** Detects the most starred repository and calculates cumulative total stars.
* **Profile Scoring:** Evaluates comprehensive repository data to generate a custom "Profile Score."
* **Developer Leveling:** Classifies users into **Beginner**, **Intermediate**, or **Advanced** tiers based on their activity and impact.
* **Automatic Profile Updates:** Seamlessly refreshes existing profiles using efficient MySQL Upsert queries.

---

## 🗄️ Database Schema
The MySQL structure relies on a single optimized table `github_profiles` to manage tracked data metrics:


| Column | Type | Description |
| :--- | :--- | :--- |
| **username** | VARCHAR(100) | Primary key / GitHub Username |
| **name** | VARCHAR(255) | User's full public profile name |
| **bio** | TEXT | Public biography summary |
| **followers** | INT | Total follower count |
| **following** | INT | Total following count |
| **public_repos** | INT | Total public repositories owned |
| **top_language** | VARCHAR(100) | Most frequent programming language |
| **language_breakdown** | JSON | Key-value store of language repository counts |
| **most_starred_repo** | VARCHAR(255) | Name of highest starred repository |
| **max_stars** | INT | Star count of the most starred repository |
| **total_stars** | INT | Aggregated star count across all repos |
| **profile_score** | INT | Calculated overall performance score |
| **developer_level** | VARCHAR(50) | Level classification (Beginner/Intermediate/Advanced) |
| **profile_url** | VARCHAR(255) | Direct URL link to the profile |
| **avatar_url** | VARCHAR(255) | Direct URL link to the avatar image |
| **account_created** | DATETIME | Original account creation timestamp |

---

## 📂 Project Structure

```text
github-profile-analyzer/
├── config/
│   └── db.js                 # Database connection configuration
├── controllers/
│   └── githubController.js   # Handles incoming API requests and responses
├── models/
│   └── profileModel.js       # Database queries and schema definitions
├── routes/
│   └── githubRoutes.js       # Express API route definitions
├── services/
│   └── githubService.js      # Business logic and GitHub API integration
├── .env                      # Local environment variables
└── server.js                 # Application entry point
```

---

## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd github-profile-analyzer
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and populate your credentials:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=XXX_password
DB_NAME=github_analyzer
```

### 4. Initialize the Database
Log into your MySQL terminal and run the following commands:
```sql
CREATE DATABASE github_analyzer;
USE github_analyzer;
```
*Note: Import the provided `github_analyzer.sql` file to populate the exact table structure.*

### 5. Launch the Server
```bash
# Start the development server (with nodemon)
npm run dev
```
The server will be live and listening at: `http://localhost:5000`

---

## 🛣️ API Endpoints

### 🔍 Profile Analysis
* **Endpoint:** `POST /api/analyze/:username`
* **Description:** Fetches, analyzes, and saves a GitHub user's profile metrics.
* **Example:** `POST http://localhost:5000/api/analyze/octocat`

### 🗂️ Get All Analyzed Profiles
* **Endpoint:** `GET /api/profiles`
* **Description:** Returns a list of all user profiles previously processed and saved in the database.

### 👤 Get a Single Profile
* **Endpoint:** `GET /api/profiles/:username`
* **Description:** Retrieves the saved analysis details for a specific GitHub user.
* **Example:** `GET http://localhost:5000/api/profiles/octocat`

---

## 📝 Sample JSON Response
```json
{
  "username": "octocat",
  "followers": 500,
  "following": 10,
  "publicRepos": 25,
  "topLanguage": "JavaScript",
  "languageBreakdown": {
    "JavaScript": 10,
    "Python": 5
  },
  "mostStarredRepo": "awesome-project",
  "maxStars": 50,
  "totalStars": 142,
  "profileScore": 1170,
  "developerLevel": "Advanced"
}
```

---

## 📦 Deliverables
* Source Code Repository
* Live API URL
* Database Schema Export (`github_analyzer.sql`)


---

## 👤 Author
**Mahathi Chinmayee Adurthi**
* **GitHub:** https://github.com/Chinmayeemahathi/github-profile-analyzer
