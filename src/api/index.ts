import { get, post } from './server';
function getGroups() {
  return get('/api/getGroups');
}

function getBlogs() {
  return get('/api/getBlogs');
}

function getBlog(ids: number[]) {
  // ids = [1, 2]
  return get(`/api/getBlog?id=${ids.join(',')}`);
}

function getBlogDetails(id: number) {
  return get(`/api/getBlogDetails?id=${id}`);
}

function createBlogGroup(data: {parent_id: number, level: number, name: string}) {
  return post(`/api/createBlogGroup`, data);
}

function updateBlog(data: any) {
  return post(`/api/updateBlog`, data);
}

function createBlog(data: any) {
  return post(`/api/createBlog`, data);
}


export const api = {
  getGroups,
  getBlogs,
  getBlog,
  getBlogDetails,
  createBlogGroup,
  updateBlog,
  createBlog,
};


export interface Api {
getGroups: () => any;
getBlogs: () => any;
getBlog: (ids: number[]) => any;
getBlogDetails: (id: number) => any;
createBlogGroup: (data: {parent_id: number, level: number, name: string}) => any;
updateBlog: (data: any) => any;
createBlog: (data: any) => any;
}

