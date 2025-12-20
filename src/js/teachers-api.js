import axios from 'axios';

const API_TEACHERS =
  'https://learnlingo-12-25-default-rtdb.firebaseio.com/.json';

export async function fetchTeachers() {
  const response = await axios.get(API_TEACHERS);
  if (!response.data) {
    return [];
  }

  return Object.values(response.data);
}
