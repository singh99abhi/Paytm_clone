# Paytm Clone - Digital Payment Application

A full-stack digital payment application built with React.js frontend and Node.js backend, inspired by Paytm's core functionality. This project demonstrates modern web development practices with a focus on user authentication, money transfers, and account management.

## Build a basic version of PayTM

[![Paytm Clone Demo](https://img.youtube.com/vi/EBAh1f4GyQI/maxresdefault.jpg)](https://www.youtube.com/watch?v=EBAh1f4GyQI)

## 🚀 Features

### Core Functionality

- **User Authentication**: Secure signup and signin with JWT tokens
- **Dashboard**: Real-time balance display and user management
- **Money Transfer**: Send money to other users in the system
- **Account Management**: View and manage user accounts
- **Responsive Design**: Modern UI built with Tailwind CSS

### Technical Features

- **Frontend**: React.js with Vite for fast development
- **Backend**: Node.js with Express.js REST API
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT-based secure authentication
- **Styling**: Tailwind CSS for modern, responsive design
- **Routing**: React Router for client-side navigation
- **HTTP Client**: Axios for API communication

## 🛠️ Tech Stack

### Frontend

- **React 18.2.0** - UI library
- **Vite 5.0.8** - Build tool and dev server
- **React Router DOM 7.4.0** - Client-side routing
- **Axios 1.8.4** - HTTP client
- **Tailwind CSS 4.0.15** - Utility-first CSS framework

### Backend

- **Node.js** - Runtime environment
- **Express.js 4.21.2** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose 8.12.1** - MongoDB ODM
- **JWT 9.0.2** - Authentication tokens
- **CORS 2.8.5** - Cross-origin resource sharing
- **Zod 3.24.2** - Schema validation

## 📁 Project Structure

```
Paytm_clone/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── App.jsx         # Main app component
│   │   └── main.jsx        # App entry point
│   ├── public/             # Static assets
│   └── package.json        # Frontend dependencies
├── backend/                # Node.js backend application
│   ├── routes/            # API route handlers
│   ├── config.js          # Configuration files
│   ├── db.js              # Database connection
│   ├── middleware.js      # Custom middleware
│   ├── index.js           # Server entry point
│   └── package.json       # Backend dependencies
├── Dockerfile             # MongoDB container setup
└── README.md             # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- MongoDB (local installation or MongoDB Atlas)

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Paytm_clone
   ```

2. **Install Frontend Dependencies**

   ```bash
   cd frontend
   npm install
   ```

3. **Install Backend Dependencies**

   ```bash
   cd ../backend
   npm install
   ```

4. **Set up MongoDB**

   - Option 1: Use Docker (recommended)
     ```bash
     docker run -d -p 27017:27017 --name mongodb mongo:4.4.7
     ```
   - Option 2: Install MongoDB locally
   - Option 3: Use MongoDB Atlas (cloud service)

5. **Configure Environment Variables**
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=mongodb://localhost:27017/paytm_clone
   JWT_SECRET=your_jwt_secret_key_here
   PORT=3000
   ```

### Running the Application

1. **Start the Backend Server**

   ```bash
   cd backend
   npm run dev
   ```

   The backend will start on `http://localhost:3000`

2. **Start the Frontend Development Server**

   ```bash
   cd frontend
   npm run dev
   ```

   The frontend will start on `http://localhost:5173`

3. **Access the Application**
   Open your browser and navigate to `http://localhost:5173`

## 📱 Application Pages

### 1. Signup Page (`/signup`)

- User registration with email and password
- Form validation and error handling
- Redirects to signin after successful registration

### 2. Signin Page (`/signin`)

- User authentication with existing credentials
- JWT token generation and storage
- Redirects to dashboard after successful login

### 3. Dashboard (`/dashboard`)

- Displays user's current balance
- Shows list of all users in the system
- Navigation to other features

### 4. Send Money (`/send`)

- Transfer money to other users
- Real-time balance updates
- Transaction history

## 🔧 API Endpoints

### Authentication

- `POST /api/v1/user/signup` - User registration
- `POST /api/v1/user/signin` - User login

### Account Management

- `GET /api/v1/accounts/balance` - Get user balance
- `POST /api/v1/accounts/transfer` - Transfer money

### User Management

- `GET /api/v1/user/bulk` - Get all users

## 🐳 Docker Support

The project includes a Dockerfile for MongoDB setup:

```bash
# Build and run MongoDB container
docker build -t paytm-mongodb .
docker run -d -p 27017:27017 --name mongodb paytm-mongodb
```

## 🧪 Development

### Available Scripts

**Frontend:**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

**Backend:**

- `npm run dev` - Start development server

### Code Structure

The application follows a clean architecture pattern:

- **Components**: Reusable UI elements
- **Pages**: Main application views
- **Routes**: API endpoint handlers
- **Middleware**: Request processing and validation

## 🔒 Security Features

- JWT-based authentication
- Password hashing (implemented in backend)
- CORS configuration
- Input validation with Zod
- Secure HTTP headers

## 🎨 UI/UX Features

- Modern, responsive design
- Clean and intuitive interface
- Mobile-friendly layout
- Smooth navigation transitions
- Loading states and error handling

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Inspired by Paytm's digital payment platform
- Built with modern web technologies
- Designed for learning and demonstration purposes

## 📞 Support

For support or questions, please open an issue in the repository or contact the development team.

---

**Note**: This is a demonstration project and should not be used for actual financial transactions. Always use official payment gateways for real-world applications.
