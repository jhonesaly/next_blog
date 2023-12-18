import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://inrhxwfbuogxeabggrjw.supabase.co/rest/v1/',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlucmh4d2ZidW9neGVhYmdncmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjE4MzgsImV4cCI6MjAxODQ5NzgzOH0.1TWQ6ZfeQ7sYcxeqm0Ezi0GE9MblxhrzCe287YA7Uts",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlucmh4d2ZidW9neGVhYmdncmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjE4MzgsImV4cCI6MjAxODQ5NzgzOH0.1TWQ6ZfeQ7sYcxeqm0Ezi0GE9MblxhrzCe287YA7Uts"
    }
})