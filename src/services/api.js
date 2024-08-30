import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' }); // Adjust the baseURL as needed

export const fetchActivationRoutines = () => API.get('/activation-routines');
export const fetchRecoveryRoutines = () => API.get('/recovery-routines');
