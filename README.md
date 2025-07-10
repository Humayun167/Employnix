# Employnix - Job Portal Application
Link link - https://employnix-a2w2.vercel.app/
A modern, full-stack job portal application that connects job seekers with employers. Built with React.js frontend and Node.js backend, featuring authentication, job management, and application tracking.

## 🚀 Features

### For Job Seekers
- **Job Search & Filtering**: Search jobs by title, location, category, and more
- **Apply for Jobs**: Submit applications with resume upload
- **Application Tracking**: View and manage your job applications
- **User Authentication**: Secure login/registration with Clerk
- **Responsive Design**: Mobile-friendly interface

### For Recruiters/Employers
- **Job Management**: Create, edit, and delete job postings
- **Application Review**: View and manage job applications
- **Dashboard**: Comprehensive recruiter dashboard
- **Analytics**: Track job posting performance

### General Features
- **Modern UI**: Built with Tailwind CSS and DaisyUI
- **Real-time Updates**: Dynamic content updates
- **Cloud Storage**: Resume and document storage via Cloudinary
- **Secure**: JWT authentication and data protection

## 🛠️ Tech Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and context
- **Vite** - Fast build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind
- **Clerk** - Authentication and user management
- **Quill** - Rich text editor for job descriptions
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **Bcrypt** - Password hashing
- **Cloudinary** - Cloud storage for files
- **Multer** - File upload middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Employnix/
├── client/                     # Frontend React application
│   ├── public/                # Static files
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   │   ├── AppDownload.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── JobCard.jsx
│   │   │   ├── JobListing.jsx
│   │   │   ├── Loading.jsx
│   │   │   ├── Navbar.jsx
│   │   │   └── RecruiterLogin.jsx
│   │   ├── context/           # React Context for state management
│   │   │   └── AppContext.jsx
│   │   ├── pages/             # Page components
│   │   │   ├── AddJob.jsx
│   │   │   ├── Applications.jsx
│   │   │   ├── ApplyJobs.jsx
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── ManageJobs.jsx
│   │   │   └── ViewApplication.jsx
│   │   ├── assets/            # Images, icons, and static data
│   │   ├── App.jsx            # Main app component
│   │   └── main.jsx           # App entry point
│   ├── package.json
│   ├── vite.config.js
│   └── tailwind.config.js
│
└── server/                     # Backend Node.js application
    ├── config/                # Configuration files
    │   └── db.js              # Database connection
    ├── controllers/           # Route controllers (to be implemented)
    ├── middleware/            # Custom middleware (to be implemented)
    ├── models/               # Database models (to be implemented)
    ├── routes/               # API routes (to be implemented)
    ├── utils/                # Utility functions (to be implemented)
    ├── server.js             # Server entry point
    └── package.json
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud)
- Cloudinary account (for file uploads)
- Clerk account (for authentication)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Employnix
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install
   
   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Environment Setup**
   
   Create `.env` file in the server directory:
   ```env
   PORT=5000
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ```
   
   Create `.env.local` file in the client directory:
   ```env
   VITE_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   VITE_API_URL=http://localhost:5000
   ```

4. **Start the development servers**
   
   ```bash
   # Start the backend server (from server directory)
   npm run server
   
   # Start the frontend development server (from client directory)
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📖 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication Endpoints
- `POST /auth/register` - User registration
- `POST /auth/login` - User login
- `GET /auth/profile` - Get user profile

### Job Endpoints
- `GET /jobs` - Get all jobs with filtering
- `POST /jobs` - Create new job (recruiter only)
- `GET /jobs/:id` - Get specific job
- `PUT /jobs/:id` - Update job (recruiter only)
- `DELETE /jobs/:id` - Delete job (recruiter only)

### Application Endpoints
- `POST /applications` - Submit job application
- `GET /applications/user/:userId` - Get user's applications
- `GET /applications/job/:jobId` - Get job applications (recruiter only)
- `PUT /applications/:id/status` - Update application status

## 🎯 Available Scripts

### Client Scripts
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

### Server Scripts
```bash
npm run server     # Start development server with nodemon
npm start          # Start production server
```

## 🔧 Configuration

### Tailwind CSS Configuration
The project uses Tailwind CSS with DaisyUI components. Configuration can be found in `client/tailwind.config.js`.

### Vite Configuration
Frontend build configuration is in `client/vite.config.js`.

### ESLint Configuration
Code linting rules are configured in `client/eslint.config.js`.

## 🔐 Authentication

The application uses Clerk for authentication, providing:
- Social login (Google, GitHub, etc.)
- Email/password authentication
- User management
- Session handling
- Protected routes

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🔄 State Management

Uses React Context API for global state management:
- **AppContext**: Handles job data, search filters, authentication state
- Local component state for UI interactions

## 🎨 UI Components

### Key Components
- **Hero**: Landing page hero section with job search
- **JobListing**: Job listing with filtering and pagination
- **JobCard**: Individual job display component
- **Navbar**: Navigation with user authentication
- **Dashboard**: Recruiter dashboard for job management

## 📊 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  clerkId: String,
  email: String,
  name: String,
  role: String, // 'jobseeker' or 'recruiter'
  createdAt: Date,
  updatedAt: Date
}
```

### Jobs Collection
```javascript
{
  _id: ObjectId,
  title: String,
  company: String,
  location: String,
  category: String,
  level: String,
  salary: Number,
  description: String,
  requirements: Array,
  recruiterId: ObjectId,
  createdAt: Date,
  updatedAt: Date
}
```

### Applications Collection
```javascript
{
  _id: ObjectId,
  jobId: ObjectId,
  userId: ObjectId,
  resume: String, // Cloudinary URL
  coverLetter: String,
  status: String, // 'pending', 'reviewed', 'accepted', 'rejected'
  appliedAt: Date,
  updatedAt: Date
}
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables

### Backend (Railway/Heroku)
1. Set up environment variables
2. Deploy from the `server` directory
3. Ensure MongoDB connection is configured

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- React community for excellent documentation
- Tailwind CSS for the utility-first approach
- Clerk for seamless authentication
- All open-source contributors

## 📞 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

## 🔮 Future Enhancements

- [ ] Real-time notifications
- [ ] Advanced job matching algorithm
- [ ] Video interview integration
- [ ] Company profiles
- [ ] Job alerts and notifications
- [ ] Analytics dashboard
- [ ] Mobile app development
- [ ] Advanced search filters
- [ ] Salary insights
- [ ] Career resources section

---

**Made with ❤️ by the Employnix Team**
