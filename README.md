##  Yogasana Community App

## Frontend deployed site link

    https://yoga-wellness-community-app.netlify.app/

## Backend deployed link URL

    https://yoga-backend-m6ew.onrender.com


## Video Presentation google drive link

https://drive.google.com/file/d/14grBoQHCK-PsDGh6NcHryArSXHNfZAbL/view?usp=sharing




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
### Clone the Repository
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
## Mount Page 
![Screenshot 2025-04-12 102833](https://github.com/user-attachments/assets/6ae01e40-d9ce-4d4a-aaa8-9407863887dd)


## SignUp and Login pages
![Screenshot 2025-04-12 102910](https://github.com/user-attachments/assets/06ae5b16-c07d-4dca-b94a-ea07ce183069)
![Screenshot 2025-04-12 102932](https://github.com/user-attachments/assets/e3726ce1-c93d-4066-9012-d9ba43bc40be)

## Home page
![Screenshot 2025-04-12 103132](https://github.com/user-attachments/assets/a5c57228-da54-40ba-9a0b-41be6bb045a2)

## LeaderShip Board
![Screenshot 2025-04-12 103157](https://github.com/user-attachments/assets/dcda25b1-af41-4cce-a32f-2763b1764475)

## Yogasana Page
![Screenshot 2025-04-12 103218](https://github.com/user-attachments/assets/3d3dc679-6e63-4317-9c7e-0748979accec)




## Future Improvements
- Better UI/UX enhancements
- Mobile-responsive design
- Social sharing features

