import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://inrhxwfbuogxeabggrjw.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imlucmh4d2ZidW9neGVhYmdncmp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI5MjE4MzgsImV4cCI6MjAxODQ5NzgzOH0.1TWQ6ZfeQ7sYcxeqm0Ezi0GE9MblxhrzCe287YA7Uts')

export { supabase }