import {ApiEndpoint} from '@users/constants/constants';
import {httpService} from '@users/services/httpService/httpService';
import {User} from '@users/types/types';
import {type AxiosResponse} from 'axios';

export const getUsers = (): Promise<AxiosResponse<User[]>> => httpService.get(ApiEndpoint.USERS);
