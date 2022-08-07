import * as request from './request';

export const getAll = () => request.get('/data/char');

export const getOne = (id) => request.get(`/data/char/${id}`);

export const createOne = (data) => request.post('/data/char', data);

export const updateOne = (id, data) => request.put(`/data/char/${id}`, data);

export const deleteOne = (id) => request.del(`/data/char/${id}`, id);

export const getLikes = (charId) => request.get(`/data/likes?where=charId%3D%22${charId}%22&distinct=_ownerId&count`);

export const like = (charId) => request.post(`/data/likes`, charId);

export const getUserLikes = (charId, userId) => request.get(`/data/likes?where=charId%3D%22${charId}%22%20and%20_ownerId%3D%22${userId}%22&count`)

export const getLikesId = (charId) => request.get(`/data/likes?where=charId%3D%22${charId}%22`);

export const dislike = (likeId) => request.del(`/data/likes/${likeId}`); 