##  Yogasana Community App

### Overview
The **Yogasana Community App** is a platform for yoga enthusiasts to log the number of yogasanas performed and rate their difficulty. It helps users track progress, interact with the community, and gain insights into various yoga poses.

### Features
-  **Yoga Tracking**: Users can log their daily yoga practice.
-  **Difficulty Rating**: Rate and review yoga poses.
-  **Dashboard**: View statistics on yoga progress.
- **LeaderShipBoard**: We can see Top perfomers.
-  **Authentication**: Secure login and registration.
- **MongoDB Database**: Stores user and yoga data efficiently.
- **Deployed on Netlify**: Frontend hosted on Netlify; Backend on a cloud-based service.

---

##  Tech Stack
### Frontend:
- **React.js (Vite)**
- **React Router** (for navigation)
- **Axios** (for API requests)

### Backend:
- **Node.js** (Server-side scripting)
- **Express.js** (API routing)
- **MongoDB** (Database)
- **Mongoose** (ODM for MongoDB)
- **JWT Authentication** (for user security)
- **Dotenv** (for environment variables)

---

##  Folder Structure
```
 Yogasana-Hackthan
 ┣ community-app (Frontend)
 ┃ ┣ src
 ┃ ┃ ┣ assets
 ┃ ┃ ┣ pages
 ┃ ┃ ┣ styles
 ┃ ┃ ┣ YogaComponents
 ┃ ┃ ┃ ┣ Dashboard.jsx
 ┃ ┃ ┃ ┣ SearchBar.jsx
 ┃ ┃ ┃ ┣ YogasanaDetail.jsx
 ┃ ┃ ┣ App.jsx
 ┃ ┃ ┣ main.jsx
 ┃ ┣ index.html
 ┃ ┣ vite.config.js
 ┃ ┣  package.json
 ┃ ┣ README.md
 ┣ prac
 ┃ ┣ config
 ┃ ┃ ┣ db.js
 ┃ ┣ models
 ┃ ┃ ┣ user.model.js
 ┃ ┃ ┣ yoga.model.js
 ┃ ┣ routes
 ┃ ┃ ┣ auth.route.js
 ┃ ┃ ┣ yoga.route.js
 ┃ ┣ server.js
 ┃ ┣ .env
 ┃ ┣ package.json
 ┃ ┣ README.md
```

---

##  Setup Instructions
### 1️Clone the Repository
```bash
git clone https://github.com/Naveen05-lang/NBJ-Hack
cd NBJ-Hack
```

### Install Dependencies
#### **Frontend**
```bash
cd community-app
npm install
```
#### **Backend**
```bash
cd prac
npm install
```

###  Configure Environment Variables
Create a `.env` file inside the `backend` folder and add:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=8080
```

###  Run the Development Servers
#### **Frontend**
```bash
cd community-app
npm run dev
```
#### **Backend**
```bash
cd prac
node server.js
```



## Future Improvements
- Better UI/UX enhancements
- Mobile-responsive design
- Social sharing features
