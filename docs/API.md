# API Documentation

This document provides detailed information about the Employnix API endpoints.

## Base URL
```
http://localhost:5000/api
```

## Authentication

The API uses JWT (JSON Web Tokens) for authentication. Include the token in the Authorization header:

```
Authorization: Bearer <your-jwt-token>
```

## Response Format

All API responses follow this structure:

```json
{
  "success": true,
  "message": "Description of the result",
  "data": {}, // Response data
  "error": null // Error message if any
}
```

## Error Handling

Error responses include:
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Endpoints

### Authentication

#### Register User
```http
POST /api/auth/register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword",
  "role": "jobseeker" // or "recruiter"
}
```

**Response:**
```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "jobseeker"
    },
    "token": "jwt_token"
  }
}
```

#### Login User
```http
POST /api/auth/login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Login successful",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "jobseeker"
    },
    "token": "jwt_token"
  }
}
```

#### Get User Profile
```http
GET /api/auth/profile
```

**Headers:**
```
Authorization: Bearer <token>
```

**Response:**
```json
{
  "success": true,
  "message": "Profile retrieved successfully",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "jobseeker",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  }
}
```

### Jobs

#### Get All Jobs
```http
GET /api/jobs
```

**Query Parameters:**
- `page` (optional) - Page number for pagination
- `limit` (optional) - Number of jobs per page
- `category` (optional) - Filter by job category
- `location` (optional) - Filter by location
- `title` (optional) - Search by job title
- `level` (optional) - Filter by experience level

**Example:**
```
GET /api/jobs?page=1&limit=10&category=Technology&location=New York
```

**Response:**
```json
{
  "success": true,
  "message": "Jobs retrieved successfully",
  "data": {
    "jobs": [
      {
        "_id": "job_id",
        "title": "Software Engineer",
        "company": "Tech Corp",
        "location": "New York",
        "category": "Technology",
        "level": "Mid-level",
        "salary": 80000,
        "description": "Job description...",
        "requirements": ["JavaScript", "React", "Node.js"],
        "recruiterId": "recruiter_id",
        "createdAt": "2024-01-15T10:30:00Z"
      }
    ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalJobs": 50,
      "hasNext": true,
      "hasPrev": false
    }
  }
}
```

#### Get Job by ID
```http
GET /api/jobs/:id
```

**Response:**
```json
{
  "success": true,
  "message": "Job retrieved successfully",
  "data": {
    "job": {
      "_id": "job_id",
      "title": "Software Engineer",
      "company": "Tech Corp",
      "location": "New York",
      "category": "Technology",
      "level": "Mid-level",
      "salary": 80000,
      "description": "Detailed job description...",
      "requirements": ["JavaScript", "React", "Node.js"],
      "recruiterId": "recruiter_id",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  }
}
```

#### Create Job (Recruiter Only)
```http
POST /api/jobs
```

**Headers:**
```
Authorization: Bearer <recruiter_token>
```

**Request Body:**
```json
{
  "title": "Software Engineer",
  "company": "Tech Corp",
  "location": "New York",
  "category": "Technology",
  "level": "Mid-level",
  "salary": 80000,
  "description": "Job description...",
  "requirements": ["JavaScript", "React", "Node.js"]
}
```

**Response:**
```json
{
  "success": true,
  "message": "Job created successfully",
  "data": {
    "job": {
      "_id": "new_job_id",
      "title": "Software Engineer",
      "company": "Tech Corp",
      "location": "New York",
      "category": "Technology",
      "level": "Mid-level",
      "salary": 80000,
      "description": "Job description...",
      "requirements": ["JavaScript", "React", "Node.js"],
      "recruiterId": "recruiter_id",
      "createdAt": "2024-01-15T10:30:00Z"
    }
  }
}
```

#### Update Job (Recruiter Only)
```http
PUT /api/jobs/:id
```

**Headers:**
```
Authorization: Bearer <recruiter_token>
```

**Request Body:**
```json
{
  "title": "Senior Software Engineer",
  "salary": 90000,
  "description": "Updated job description..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Job updated successfully",
  "data": {
    "job": {
      "_id": "job_id",
      "title": "Senior Software Engineer",
      "company": "Tech Corp",
      "location": "New York",
      "category": "Technology",
      "level": "Mid-level",
      "salary": 90000,
      "description": "Updated job description...",
      "requirements": ["JavaScript", "React", "Node.js"],
      "recruiterId": "recruiter_id",
      "updatedAt": "2024-01-16T10:30:00Z"
    }
  }
}
```

#### Delete Job (Recruiter Only)
```http
DELETE /api/jobs/:id
```

**Headers:**
```
Authorization: Bearer <recruiter_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Job deleted successfully",
  "data": null
}
```

### Applications

#### Submit Application
```http
POST /api/applications
```

**Headers:**
```
Authorization: Bearer <user_token>
Content-Type: multipart/form-data
```

**Request Body (Form Data):**
- `jobId` - ID of the job to apply for
- `coverLetter` - Cover letter text
- `resume` - Resume file (PDF, DOC, DOCX)

**Response:**
```json
{
  "success": true,
  "message": "Application submitted successfully",
  "data": {
    "application": {
      "_id": "application_id",
      "jobId": "job_id",
      "userId": "user_id",
      "resume": "https://cloudinary.com/resume.pdf",
      "coverLetter": "Cover letter text...",
      "status": "pending",
      "appliedAt": "2024-01-15T10:30:00Z"
    }
  }
}
```

#### Get User Applications
```http
GET /api/applications/user/:userId
```

**Headers:**
```
Authorization: Bearer <user_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Applications retrieved successfully",
  "data": {
    "applications": [
      {
        "_id": "application_id",
        "jobId": {
          "_id": "job_id",
          "title": "Software Engineer",
          "company": "Tech Corp"
        },
        "status": "pending",
        "appliedAt": "2024-01-15T10:30:00Z"
      }
    ]
  }
}
```

#### Get Job Applications (Recruiter Only)
```http
GET /api/applications/job/:jobId
```

**Headers:**
```
Authorization: Bearer <recruiter_token>
```

**Response:**
```json
{
  "success": true,
  "message": "Applications retrieved successfully",
  "data": {
    "applications": [
      {
        "_id": "application_id",
        "userId": {
          "_id": "user_id",
          "name": "John Doe",
          "email": "john@example.com"
        },
        "resume": "https://cloudinary.com/resume.pdf",
        "coverLetter": "Cover letter text...",
        "status": "pending",
        "appliedAt": "2024-01-15T10:30:00Z"
      }
    ]
  }
}
```

#### Update Application Status (Recruiter Only)
```http
PUT /api/applications/:id/status
```

**Headers:**
```
Authorization: Bearer <recruiter_token>
```

**Request Body:**
```json
{
  "status": "reviewed" // pending, reviewed, accepted, rejected
}
```

**Response:**
```json
{
  "success": true,
  "message": "Application status updated successfully",
  "data": {
    "application": {
      "_id": "application_id",
      "status": "reviewed",
      "updatedAt": "2024-01-16T10:30:00Z"
    }
  }
}
```

## File Upload

### Resume Upload
Files are uploaded to Cloudinary. Supported formats:
- PDF
- DOC
- DOCX
- Maximum size: 5MB

The API returns the secure URL of the uploaded file.

## Rate Limiting

- Authentication endpoints: 5 requests per minute
- Job endpoints: 100 requests per minute
- Application endpoints: 20 requests per minute

## Webhook Support

The API supports webhooks for real-time updates:

### Job Status Updates
```http
POST /webhooks/job-status
```

### Application Status Updates
```http
POST /webhooks/application-status
```

## SDK Examples

### JavaScript/Node.js
```javascript
const API_BASE_URL = 'http://localhost:5000/api';

// Login
const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
  
  const data = await response.json();
  return data;
};

// Get Jobs
const getJobs = async (token, filters = {}) => {
  const queryString = new URLSearchParams(filters).toString();
  const response = await fetch(`${API_BASE_URL}/jobs?${queryString}`, {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  });
  
  const data = await response.json();
  return data;
};
```

### cURL Examples
```bash
# Login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email": "john@example.com", "password": "password"}'

# Get Jobs
curl -X GET "http://localhost:5000/api/jobs?category=Technology&location=New York" \
  -H "Authorization: Bearer YOUR_TOKEN"

# Submit Application
curl -X POST http://localhost:5000/api/applications \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -F "jobId=JOB_ID" \
  -F "coverLetter=Your cover letter text" \
  -F "resume=@/path/to/resume.pdf"
```

## Testing

Use tools like Postman, Insomnia, or curl to test the API endpoints. A Postman collection is available in the `docs` folder.

## Support

For API support:
- Check the status page
- Review error codes
- Contact the development team
