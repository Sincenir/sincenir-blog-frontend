import { userApi, UserApi } from './path/userApi';
import { blogApi, BlogApi } from './path/blogApi';

export const api = {
  ...userApi,
  ...blogApi,
};

export interface Api extends
  UserApi,
  BlogApi {}

