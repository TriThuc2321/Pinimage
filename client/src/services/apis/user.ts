import { INewUser } from '~/interfaces';
import { request } from '../request';

const url = 'user';
const createUser = async (user: INewUser) => await request(url, 'POST', user);
const getUserByEmail = async (email: string) => await request(`${url}/${email}`);

export { createUser, getUserByEmail };
