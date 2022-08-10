import * as request from './request';

export const getAll = () => request.get('/data/characters');

export const getOne = (id) => request.get(`/data/characters/${id}`);

export const createOne = (data) => request.post('/data/characters', data);

export const updateOne = (id, data) => request.put(`/data/characters/${id}`, data);

export const deleteOne = (id) => request.del(`/data/characters/${id}`, id);

export const getLikes = (charId) => request.get(`/data/likes?where=charId%3D%22${charId}%22&distinct=_ownerId&count`);

export const like = (charId) => request.post(`/data/likes`, charId);

export const getUserLikes = (charId, userId) => request.get(`/data/likes?where=charId%3D%22${charId}%22%20and%20_ownerId%3D%22${userId}%22&count`)

export const getLikesId = (charId) => request.get(`/data/likes?where=charId%3D%22${charId}%22`);

export const dislike = (likeId) => request.del(`/data/likes/${likeId}`); 

export const getMostLiked = (charId) => request.get(`/data/likes/?where=charId%3D%22${charId}%22&load=author%3D$_ownerId%3Ausers&count`);

export const getRecentlyAdded = () => request.get('/data/characters?sortBy=_createdOn%20desc');

//http://localhost:3030/data/likes/?where=charId%3D%22126777f5-3277-42ad-b874-76d043b069cb%22&load=author%3D_ownerId%3Ausers&count