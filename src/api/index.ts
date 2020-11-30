import { get } from './server';
function getGroups() {
  return get('/api/getGroups');
}

function getBlogs() {
  return get('/api/getBlogs');
}

function getBlog(id: number) {
  return get(`/api/getBlog?id=${id}`);
}


export const api = {
  getGroups,
  getBlogs,
  getBlog,
};


export interface Api {
getGroups: () => any;
getBlogs: () => any;
getBlog: (id: number) => any;
}

