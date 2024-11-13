import axios from 'axios';

// Define the base URL for your API
const BASE_URL = 'https://your-api-url.com'; // Change this to your actual backend API URL

// Create an axios instance with default settings
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Function to handle GET requests
export const get = async (endpoint: string) => {
  try {
    const response = await api.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('GET Request Failed', error);
    throw new Error('Failed to fetch data');
  }
};

// Function to handle POST requests
export const post = async (endpoint: string, data: object) => {
  try {
    const response = await api.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST Request Failed', error);
    throw new Error('Failed to send data');
  }
};

// Function to handle PUT requests
export const put = async (endpoint: string, data: object) => {
  try {
    const response = await api.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('PUT Request Failed', error);
    throw new Error('Failed to update data');
  }
};

// Function to handle DELETE requests
export const del = async (endpoint: string) => {
  try {
    const response = await api.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE Request Failed', error);
    throw new Error('Failed to delete data');
  }
};

export default api;
