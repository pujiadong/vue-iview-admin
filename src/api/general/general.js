import {Service} from '../../util/server';

export function getGeneralData(){
  return Service({
    method:'GET',
    url:'/getStatistics'
  })
}