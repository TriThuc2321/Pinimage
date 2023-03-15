import { request } from '../request';

const url = 'openAI';
const createImage = async (prompt: string) => await request(url, 'POST', { prompt });

export { createImage };
