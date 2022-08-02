import * as request from './request';

export const getAll = () => request.get('/data/char');

export const getOne = (id) => request.get(`/data/char/${id}`);

export const createOne = (data) => request.post('/data/char', data);

export const updateOne = (id, data) => request.put(`/data/char/${id}`, data);

export const deleteOne = (id) => request.del(`/data/char/${id}`, id);