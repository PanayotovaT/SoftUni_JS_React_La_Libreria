import * as request from './requester';

const baseUrl= 'https://softuni-custom-server-test.herokuapp.com/data/books';

export const getAll = async () =>await request.get(baseUrl);

export const getOne = async ( postId ) => await request.get(`${baseUrl}/${postId}`);

export const create = async ( data ) => await request.post(baseUrl, data);

export const update = async ( postId, data ) => await request.put(`${baseUrl}/${postId}`, data);

export const deleteBook = async ( postId ) => await request.deleteItem(`${baseUrl}/${postId}`);

export const getMyBooks =  async ( userId ) =>  await request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22`);