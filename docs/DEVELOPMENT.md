# Development Guide

This guide will help you set up and contribute to the Employnix project.

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**
- **VS Code** (recommended)

## Development Environment Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Employnix
```

### 2. Install Dependencies
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### 3. Environment Configuration

#### Server Environment (.env)
Create a `.env` file in the `server` directory:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Database
MONGODB_URI=mongodb://localhost:27017/employnix
# OR for MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/employnix

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-here
JWT_EXPIRES_IN=7d

# Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your-cloudinary-cloud-name
CLOUDINARY_API_KEY=your-cloudinary-api-key
CLOUDINARY_API_SECRET=your-cloudinary-api-secret

# Email Configuration (optional)
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
EMAIL_FROM=noreply@employnix.com

# Webhook Configuration
CLERK_WEBHOOK_SECRET=your-clerk-webhook-secret
```

#### Client Environment (.env.local)
Create a `.env.local` file in the `client` directory:

```env
# Clerk Configuration
VITE_CLERK_PUBLISHABLE_KEY=pk_test_your-clerk-publishable-key

# API Configuration
VITE_API_URL=http://localhost:5000/api
VITE_APP_URL=http://localhost:5173

# Feature Flags
VITE_ENABLE_ANALYTICS=false
VITE_ENABLE_CHAT=false
```

### 4. Database Setup

#### Local MongoDB
```bash
# Start MongoDB service
sudo systemctl start mongod  # Linux
brew services start mongodb  # macOS
# Or run MongoDB manually
mongod --dbpath /path/to/your/db
```

#### MongoDB Atlas (Cloud)
1. Create a cluster at [MongoDB Atlas](https://cloud.mongodb.com/)
2. Create a database user
3. Whitelist your IP address
4. Get the connection string and add to `.env`

### 5. Start Development Servers

#### Method 1: Separate Terminals
```bash
# Terminal 1: Start backend server
cd server
npm run server

# Terminal 2: Start frontend server
cd client
npm run dev
```

#### Method 2: Using Concurrently (recommended)
```bash
# Install concurrently globally
npm install -g concurrently

# From root directory
concurrently "cd server && npm run server" "cd client && npm run dev"
```

## Code Style and Standards

### ESLint Configuration
The project uses ESLint for code linting. Configuration is in `client/eslint.config.js`.

```bash
# Run linting
cd client
npm run lint

# Fix auto-fixable issues
npm run lint -- --fix
```

### Prettier Configuration
Create `.prettierrc` in the root directory:

```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### Git Hooks
Install husky for pre-commit hooks:

```bash
# Install husky
npm install -D husky

# Setup pre-commit hook
npx husky install
npx husky add .husky/pre-commit "npm run lint"
```

## Project Structure Explained

### Frontend Structure
```
client/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # Basic UI components
│   │   └── forms/      # Form components
│   ├── pages/          # Page components
│   ├── context/        # React Context
│   ├── hooks/          # Custom hooks
│   ├── utils/          # Utility functions
│   ├── services/       # API services
│   ├── constants/      # Constants
│   └── assets/         # Images, icons
├── package.json
└── vite.config.js
```

### Backend Structure
```
server/
├── config/             # Configuration files
├── controllers/        # Route controllers
├── middleware/         # Custom middleware
├── models/            # Database models
├── routes/            # API routes
├── services/          # Business logic
├── utils/             # Utility functions
├── validators/        # Request validators
├── tests/             # Test files
├── package.json
└── server.js
```

## Development Workflow

### 1. Feature Development
```bash
# Create a new branch
git checkout -b feature/job-search-enhancement

# Make your changes
# ... code ...

# Test your changes
npm run test

# Commit your changes
git add .
git commit -m "feat: add advanced job search filters"

# Push to remote
git push origin feature/job-search-enhancement
```

### 2. Code Review Process
1. Create a Pull Request
2. Ensure CI/CD checks pass
3. Request review from team members
4. Address review comments
5. Merge after approval

### 3. Branch Naming Convention
- `feature/description` - New features
- `bugfix/description` - Bug fixes
- `hotfix/description` - Urgent fixes
- `docs/description` - Documentation updates
- `refactor/description` - Code refactoring

### 4. Commit Message Convention
Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
feat: add job application tracking
fix: resolve authentication redirect issue
docs: update API documentation
style: format code with prettier
refactor: optimize database queries
test: add unit tests for job service
```

## Testing

### Frontend Testing
```bash
cd client

# Install testing dependencies
npm install -D vitest @testing-library/react @testing-library/jest-dom

# Run tests
npm run test

# Run tests with coverage
npm run test:coverage
```

### Backend Testing
```bash
cd server

# Install testing dependencies
npm install -D jest supertest

# Run tests
npm run test

# Run tests with watch mode
npm run test:watch
```

### Testing Structure
```
tests/
├── unit/              # Unit tests
├── integration/       # Integration tests
├── e2e/              # End-to-end tests
├── fixtures/         # Test data
└── helpers/          # Test utilities
```

## Database Development

### MongoDB Schema Design
```javascript
// User Schema
{
  clerkId: String,
  email: String,
  name: String,
  role: String,
  profile: {
    avatar: String,
    resume: String,
    skills: [String],
    experience: Number
  },
  createdAt: Date,
  updatedAt: Date
}

// Job Schema
{
  title: String,
  company: String,
  location: String,
  category: String,
  level: String,
  salary: {
    min: Number,
    max: Number,
    currency: String
  },
  description: String,
  requirements: [String],
  benefits: [String],
  recruiterId: ObjectId,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}

// Application Schema
{
  jobId: ObjectId,
  userId: ObjectId,
  resume: String,
  coverLetter: String,
  status: String,
  appliedAt: Date,
  reviewedAt: Date,
  updatedAt: Date
}
```

### Database Migrations
```javascript
// migrations/001_create_indexes.js
db.jobs.createIndex({ title: "text", description: "text" });
db.jobs.createIndex({ category: 1, location: 1 });
db.applications.createIndex({ jobId: 1, userId: 1 }, { unique: true });
```

## API Development

### Creating New Endpoints
1. **Define the route** in `routes/`
2. **Create controller** in `controllers/`
3. **Add validation** in `validators/`
4. **Write tests** in `tests/`
5. **Update documentation** in `docs/`

### Example: Adding a New Endpoint
```javascript
// routes/jobs.js
router.get('/featured', getFeaturedJobs);

// controllers/jobController.js
export const getFeaturedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ isFeatured: true })
      .sort({ createdAt: -1 })
      .limit(10);
    
    res.json({
      success: true,
      data: { jobs },
      message: 'Featured jobs retrieved successfully'
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};
```

## Frontend Development

### Component Development
```jsx
// components/JobCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const JobCard = ({ job }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-lg font-semibold mb-2">{job.title}</h3>
      <p className="text-gray-600 mb-4">{job.company}</p>
      <Link 
        to={`/jobs/${job._id}`}
        className="btn btn-primary"
      >
        View Details
      </Link>
    </div>
  );
};

export default JobCard;
```

### State Management
```jsx
// context/AppContext.jsx
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const appReducer = (state, action) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_JOBS':
      return { ...state, jobs: action.payload };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, {
    loading: false,
    jobs: [],
    user: null
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
```

## Performance Optimization

### Frontend Optimization
```jsx
// Use React.memo for components
const JobCard = React.memo(({ job }) => {
  // Component code
});

// Use useMemo for expensive calculations
const filteredJobs = useMemo(() => {
  return jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase())
  );
}, [jobs, searchTerm]);

// Use useCallback for event handlers
const handleSearch = useCallback((term) => {
  setSearchTerm(term);
}, []);
```

### Backend Optimization
```javascript
// Database indexing
db.jobs.createIndex({ title: "text", description: "text" });

// Pagination
const getJobs = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  const jobs = await Job.find()
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
  return jobs;
};

// Caching with Redis
const redis = require('redis');
const client = redis.createClient();

const getCachedJobs = async () => {
  const cached = await client.get('jobs');
  if (cached) return JSON.parse(cached);
  
  const jobs = await Job.find();
  await client.setex('jobs', 3600, JSON.stringify(jobs));
  return jobs;
};
```

## Deployment

### Environment Setup
```bash
# Production environment variables
NODE_ENV=production
PORT=5000
MONGODB_URI=mongodb+srv://...
JWT_SECRET=production-secret
```

### Build Process
```bash
# Build client
cd client
npm run build

# The built files will be in client/dist/
```

### Docker Configuration
```dockerfile
# Dockerfile
FROM node:16-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

EXPOSE 5000

CMD ["npm", "start"]
```

## Debugging

### Frontend Debugging
```jsx
// React DevTools
// Install React Developer Tools browser extension

// Debug with console
console.log('Component rendered with props:', props);

// Debug with React DevTools Profiler
import { Profiler } from 'react';

const onRenderCallback = (id, phase, actualDuration) => {
  console.log('Render time:', actualDuration);
};

<Profiler id="App" onRender={onRenderCallback}>
  <App />
</Profiler>
```

### Backend Debugging
```javascript
// Debug with console
console.log('Request received:', req.body);

// Debug with debugger
debugger;

// Debug with VS Code
// Add breakpoints in VS Code
// Run with: node --inspect server.js
```

## Contributing Guidelines

### Code Review Checklist
- [ ] Code follows project style guide
- [ ] Tests are written and passing
- [ ] Documentation is updated
- [ ] No console.log statements in production code
- [ ] Error handling is implemented
- [ ] Security best practices are followed

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Unit tests pass
- [ ] Integration tests pass
- [ ] Manual testing completed

## Checklist
- [ ] Code follows style guide
- [ ] Self-review completed
- [ ] Documentation updated
```

## Troubleshooting

### Common Issues

#### MongoDB Connection Issues
```bash
# Check MongoDB status
sudo systemctl status mongod

# Check connection string
# Ensure IP whitelist in MongoDB Atlas
```

#### Port Already in Use
```bash
# Find process using port
lsof -i :5000

# Kill process
kill -9 <PID>
```

#### CORS Issues
```javascript
// server.js
app.use(cors({
  origin: process.env.CLIENT_URL || 'http://localhost:5173',
  credentials: true
}));
```

## Resources

### Documentation
- [React Documentation](https://reactjs.org/docs)
- [Node.js Documentation](https://nodejs.org/docs)
- [MongoDB Documentation](https://docs.mongodb.com)
- [Express.js Documentation](https://expressjs.com)

### Tools
- [VS Code](https://code.visualstudio.com)
- [Postman](https://www.postman.com)
- [MongoDB Compass](https://www.mongodb.com/products/compass)
- [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools)

### Community
- [Stack Overflow](https://stackoverflow.com)
- [GitHub Issues](https://github.com/your-repo/issues)
- [Discord/Slack Community](https://discord.gg/your-channel)

## Getting Help

If you encounter issues:
1. Check this documentation
2. Search existing issues
3. Create a new issue with detailed description
4. Ask on the community channel
5. Contact the maintainers

Happy coding! 🚀
