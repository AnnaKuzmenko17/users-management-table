import {BASE_URL} from '@users/constants/constants';
import axios from 'axios';

export const httpService = axios.create({
  baseURL: BASE_URL,
});
