# Candidate Profiling

## Source Code
[[Link to public GitHub repo](https://github.com/travycent/candidate-profiling)]

## Description

This application is designed for recording candidate data and is built using Express for the backend, React for the frontend, and MySQL for database management, providing a comprehensive full-stack solution.


## How to Run the Project
## Project Environment

- **Tested on:** macOS
- **Node.js version:** v18.12.1
- **React App created with:** Vite

### Backend Setup
1. **Database Setup:**
   - Import the SQL file located in the `database_file` folder into your MySQL database.

2. **Backend Configuration:**
   - Navigate to the `backend` folder and locate the `.env` file.
   - Update the file with your database credentials:
     ```
     MYSQL_HOST='127.0.0.1'
     MYSQL_PORT='3306'
     MYSQL_USER=''
     MYSQL_PASSWORD=''
     MYSQL_DATABASE=''
     ```

3. **Install Dependencies:**
   - Open your terminal and run:
     ```
     npm install
     ```

4. **Start the Backend Server:**
   - Run the following command:
     ```
     npm start
     ```

### Frontend Setup
1. **Navigate to Frontend:**
   - Open another terminal window in your code editor.

2. **Install Dependencies:**
   - Navigate to the `frontend` folder and run:
     ```
     npm install
     ```

3. **Start the Frontend Development Server:**
   - Run the following command:
     ```
     npm run dev
     ```

## Ways for Improvement

- **Setting Up Caching:** Implement caching to improve load times for frequently accessed data.
  
- **Pagination in API:** Introduce pagination to handle large query sets efficiently and improve API performance.
  
- **API Documentation:** Create clear and comprehensive API documentation to facilitate easier integration for other developers.
  
- **Material UI Integration:** Consider using Material UI for frontend components to enhance UI flexibility and design consistency.
  
- **Frontend Unit Tests:** Implement frontend unit tests to ensure better quality assurance and reliability of the application.


## Assumptions

- I assumed that the user won't have to login to access the API.
  
- I assumed that the user will prefer tracking when candidates registered and their last profile update.
  
- I assumed that the application will be used with different databases, which is why I implemented a Database Access Object Pattern using MySQL.


## Total Time Spent
[10 hours]
