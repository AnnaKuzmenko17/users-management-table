import {ApiEndpoint} from '@users/constants/constants';
import {httpService} from '@users/services/httpService/httpService';
import {AxiosResponse} from 'axios';

import {User} from './types';

export const getUsers = (): Promise<AxiosResponse<User[]>> =>
  httpService.get(ApiEndpoint.USERS);
