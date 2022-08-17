import * as request from './requester';

const baseUrl= 'https://softuni-custom-server-test.herokuapp.com/data/books';

export const getAll = async () =>await request.get(baseUrl);

export const getOne = async ( bookId ) => await request.get(`${baseUrl}/${bookId}`);

export const create = async ( data ) => await request.post(baseUrl, data);

export const update = async ( bookId, data ) => await request.put(`${baseUrl}/${bookId}`, data);

export const deleteBook = async ( bookId ) => await request.deleteItem(`${baseUrl}/${bookId}`);

export const getMyBooks =  async ( userId ) =>  await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);