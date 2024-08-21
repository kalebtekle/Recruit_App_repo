<template>
    <section class="post-job-section">
      <div class="container">
        <h2 class="section-title">Post a Job</h2>
        <form @submit.prevent="submitJob">
          <div class="form-group">
            <label for="title">Job Title</label>
            <input 
              v-model="jobPost.title" 
              type="text" 
              id="title" 
              required 
              placeholder="Enter job title"
            />
          </div>
  
          <div class="form-group">
            <label for="description">Job Description</label>
            <textarea 
              v-model="jobPost.description" 
              id="description" 
              required 
              placeholder="Enter job description"
            ></textarea>
          </div>
  
          <div class="form-group">
            <label for="company">Company</label>
            <select v-model="jobPost.company" id="company" required>
              <option v-for="company in companies" :key="company.id" :value="company.id">
                {{ company.name }}
              </option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="location">Location</label>
            <input 
              v-model="jobPost.location" 
              type="text" 
              id="location" 
              required 
              placeholder="Enter location"
            />
          </div>
  
          <div class="form-group">
            <label for="salary">Salary Range</label>
            <input 
              v-model="jobPost.salary_range" 
              type="text" 
              id="salary" 
              placeholder="Enter salary range"
            />
          </div>
  
          <div class="form-group">
            <label for="job_type">Job Type</label>
            <select v-model="jobPost.job_type" id="job_type">
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
  
          <div class="form-group">
            <label for="skills">Skills Required</label>
            <input 
              v-model="jobPost.skills_required" 
              type="text" 
              id="skills" 
              placeholder="Enter required skills (comma-separated)"
            />
          </div>
  
          <div class="form-group">
            <label for="experience">Experience Required (Years)</label>
            <input 
              v-model="jobPost.experience_required" 
              type="number" 
              id="experience" 
              required 
              placeholder="Enter experience required"
            />
          </div>
  
          <div class="form-group">
            <label for="expiry_date">Expiry Date</label>
            <input 
              v-model="jobPost.expiry_date" 
              type="date" 
              id="expiry_date" 
              required 
            />
          </div>
  
          <div class="form-group">
            <label for="status">Status</label>
            <select v-model="jobPost.status" id="status">
              <option value="open">Open</option>
              <option value="closed">Closed</option>
              <option value="filled">Filled</option>
            </select>
          </div>
  
          <button type="submit" class="submit-button">Post Job</button>
        </form>
  
        <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </div>
    </section>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useMutation, useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag';
  
  // Define GraphQL queries and mutations
  const GET_COMPANIES_QUERY = gql`
    query GetCompanies {
      companies {
        id
        name
      }
    }
  `;
  
  const POST_JOB_MUTATION = gql`
    mutation PostJob(
      $title: String!
      $description: String!
      $company: ID!
      $location: String!
      $salary_range: String
      $job_type: String
      $skills_required: [String]
      $experience_required: Int!
      $expiry_date: String!
      $status: String
    ) {
      createJobPost(
        input: {
          title: $title
          description: $description
          company: $company
          location: $location
          salary_range: $salary_range
          job_type: $job_type
          skills_required: $skills_required
          experience_required: $experience_required
          expiry_date: $expiry_date
          status: $status
        }
      ) {
        jobPost {
          id
          title
        }
      }
    }
  `;
  
  const jobPost = ref({
    title: '',
    description: '',
    company: '',
    location: '',
    salary_range: 'Not Disclosed',
    job_type: 'Full-time',
    skills_required: [],
    experience_required: 0,
    expiry_date: '',
    status: 'open',
  });
  
  const companies = ref([]);
  const successMessage = ref('');
  const errorMessage = ref('');
  
  // Fetch companies to populate the dropdown
  const { result: companiesResult, error: companiesError } = useQuery(GET_COMPANIES_QUERY);
  
  onMounted(() => {
    if (companiesResult.value) {
      companies.value = companiesResult.value.companies;
    }
    if (companiesError.value) {
      console.error('Error fetching companies:', companiesError.value);
      errorMessage.value = 'Failed to load companies.';
    }
  });
  
  const { mutate: postJob, error: postJobError } = useMutation(POST_JOB_MUTATION);
  
  const submitJob = async () => {
    try {
      await postJob({
        variables: {
          title: jobPost.value.title,
          description: jobPost.value.description,
          company: jobPost.value.company,
          location: jobPost.value.location,
          salary_range: jobPost.value.salary_range,
          job_type: jobPost.value.job_type,
          skills_required: jobPost.value.skills_required.split(',').map(skill => skill.trim()),
          experience_required: jobPost.value.experience_required,
          expiry_date: jobPost.value.expiry_date,
          status: jobPost.value.status,
        },
      });
      successMessage.value = 'Job posted successfully!';
      errorMessage.value = '';
      // Reset the form
      jobPost.value = {
        title: '',
        description: '',
        company: '',
        location: '',
        salary_range: 'Not Disclosed',
        job_type: 'Full-time',
        skills_required: [],
        experience_required: 0,
        expiry_date: '',
        status: 'open',
      };
    } catch (error) {
      console.error('Error posting job:', error);
      errorMessage.value = 'Failed to post the job. Please try again.';
      successMessage.value = '';
    }
  };
  </script>
  
  <style scoped>
.post-job-section {
  padding: 40px 20px;
  background-color: #f9f9f9;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
}

input, textarea, select {
  width: calc(100% - 24px); /* Adjusted width to include padding and borders */
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

textarea {
  resize: vertical;
  min-height: 150px;
}

.submit-button {
  padding: 12px 20px;
  font-size: 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  transition: background-color 0.3s;
}

.submit-button:hover {
  background-color: #0056b3;
}

.success-message {
  color: #28a745;
  font-weight: 500;
  margin-top: 20px;
  text-align: center;
}

.error-message {
  color: #dc3545;
  font-weight: 500;
  margin-top: 20px;
  text-align: center;
}
</style>