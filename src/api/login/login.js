import { Service } from '../../util/server';

export function getUserToken() {
  return Service({
    method:'GET',
    url:'/getUserToken'
  });
}