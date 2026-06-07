🚀 GitHub Profile Analyzer API📋 Project OverviewThe GitHub Profile Analyzer API is a robust backend service built with Node.js, Express.js, and MySQL. It integrates with the official GitHub Public API to fetch user data, evaluate repository metrics, calculate performance insights, and persist the structured analysis for instant retrieval.🛠️ Tech StackRuntime Environment: Node.jsBackend Framework: Express.jsDatabase: MySQLHTTP Client: Axios (for GitHub API communication)Environment Management: dotenv✨ Features⚙️ Core FunctionalityOn-Demand Fetching: Retrieves real-time profile and repository data via GitHub usernames.Smart Persistence: Saves processed analytics directly into a MySQL database.Efficient Updates: Uses database upserts to refresh existing profiles without creating duplicates.Data Retrieval: Exposes endpoints to fetch all analyzed profiles or query a specific user.📊 Advanced Analytics & InsightsLanguage Breakdown: Identifies the user's top programming languages and percentage usage.Star Metrics: Highlights the most starred repository and calculates cumulative stars.Profile Scoring: Evaluates repository data to generate a custom "Profile Score."Developer Leveling: Classifies users into Beginner, Intermediate, or Advanced tiers based on their activity and impact.📂 Project Structuretextgithub-profile-analyzer/
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
├── package.json              # Project dependencies and scripts
└── server.js                 # Application entry point
Use code with caution.🚀 Getting Started1. Clone the Repositorybashgit clone <repository-url>
cd github-profile-analyzer
Use code with caution.2. Install Dependenciesbashnpm install
Use code with caution.3. Configure Environment VariablesCreate a .env file in the root directory and populate your credentials:envPORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
Use code with caution.4. Initialize the DatabaseLog into your MySQL terminal and run the following commands:sqlCREATE DATABASE github_analyzer;
USE github_analyzer;
Use code with caution.Note: Import the provided github_analyzer.sql file to set up the required table schemas.5. Launch the Serverbash# Start the development server (with nodemon)
npm run dev
Use code with caution.The server will be live and listening at: http://localhost:5000🛣️ API Endpoints🔍 Profile AnalysisEndpoint: POST /api/analyze/:usernameDescription: Fetches, analyzes, and saves a GitHub user's profile metrics.Example: POST http://localhost:5000/api/analyze/octocat🗂️ Get All Analyzed ProfilesEndpoint: GET /api/profilesDescription: Returns a list of all user profiles previously processed and saved in the database.👤 Get a Single ProfileEndpoint: GET /api/profiles/:usernameDescription: Retrieves the saved analysis details for a specific GitHub user.Example: GET http://localhost:5000/api/profiles/octocat📝 Sample JSON Response Example(Placeholder for the incomplete text at the end of your original prompt)json{
  "status": "success",
  "data": {
    "username": "octocat",
    "total_stars": 142,
    "top_language": "JavaScript",
    "developer_level": "Intermediate",
    "profile_score": 78
  }
}