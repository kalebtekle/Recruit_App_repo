# Recruit App: Designing a Vue and Django App for a Resume-Job Post Matching Platform

“Recruit App” Team:
1. Kaleab Tekle Woldemariam, gis10kwo@gmail.com
2. Ling Yui Qian, 000yuqian@gmail.com
3. Thirza Ahmad, thirzahmad@gmail.com
4. Karthik Sudheer, karthiksudheer7272@gmail.com
   
Date: August 6, 2024

# Requirements
## 1. User Authentication:
User registration and login (both applicants and employers).
Profile management (update personal information, resumes, and company details).
## 2. Job Posting:
Employers can create, update, and delete job posts.
Job posts should include details like job title, description, requirements, location, application
deadline and salary.
## 3. Resume Submission:
Applicants can create, update, and delete resumes.
Resumes should include personal information, skills, education, work experience, and
references.
## 4. Job Matching:
Automated job matching based on resume skills and job requirements.
Notifications for new matches for both applicants and employers.
## 5. Search and Filter:
Applicants can search for jobs by title, location, company, etc.
Employers can search for applicants by skills, education, experience, etc.
## 6. Application Management:
Applicants can apply for jobs.
Employers can manage applications (view, shortlist, reject).
## 7. Admin Panel:
Manage users, job posts, and resumes.
Site-wide settings and analytics.

#Functionalities
## 1. User Authentication and Profile Management:
Vue: Create login and registration components.
Django: Implement authentication backend using Django's built-in auth system.
## 2. Job Posting and Management:
Vue: Create components for job post creation, updating, and deletion.
Django: Create models for job posts and views to handle CRUD operations.
## 3. Resume Creation and Management:
Vue: Create components for resume creation, updating, and deletion.
Django: Create models for resumes and views to handle CRUD operations.
## 4. Automated Job Matching:
Vue: Create components to display matched jobs and applicants.
Django: Implement logic to match jobs and resumes based on skills and requirements.
## 5. Search and Filter:
Vue: Create search and filter components for jobs and applicants.
Django: Implement search functionality in views and optimize database queries.
## 6. Application Management:
Vue: Create components for job applications (apply, view status).
Django: Implement application submission and management in views.
## 7. Admin Panel:
Vue: Create admin dashboard components.
Django: Use Django admin or create custom views for managing site content.

# Architecture and Workflow
## 1. Frontend (Vue 3):
Use Vue 3 Composition API for state management.
Use Vue Router for navigation.
Use Pinia for centralized state management.
Use Apollo Client for making HTTP or GraphQL requests to the backend.
## 2. Backend (Django):
Use Graphene-Django for creating API endpoints.
Define models for Users, JobPosts, Resumes, and Applications.
Create serializers for data validation and transformation.
Implement views for handling API requests.
## 3. Database:
Use PostgreSQL for storing data.
Define relationships between models (e.g., Users and JobPosts, Users and Resumes).
## 4. Deployment:
Use Docker for containerization.
Use Nginx as a reverse proxy.
Deploy on cloud platforms like TiDB serverless.

# Implementation Steps
## 1. Set Up Project:
Initialize Vue and Django projects.
Set up Docker for local development.
## 2. User Authentication:
Implement registration and login views in Django.
Create corresponding components in Vue.
Use JWT for authentication and authorization.
## 3. Job and Resume Models:
Define JobPost and Resume models in Django.
Create CRUD views for managing job posts and resumes.
Implement API endpoints using Django REST Framework or GraphQL.
## 4. Frontend Components:
Create components for job posts, resumes, search, and applications.
Implement state management using Vuex or Pinia.
## 5. Job Matching Algorithm:
Implement job matching logic in Django.
Create endpoints to fetch matched jobs and applicants.
Display matched results in Vue components.
## 6. Admin Panel:
Use Django admin for initial management.
Create custom admin views if needed.
## 7. Testing and Deployment:
Write unit and integration tests for both frontend and backend.
Set up CI/CD pipeline for automated testing and deployment.
Deploy the application to a production server.

## Contributing
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Open a Pull Request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries, please contact [Your Name] at [Your Email].
