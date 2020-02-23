const Mock = require('mockjs');

Mock.mock('/getUserToken', {
  "error_code": 0,
  "data": [{
    "id": '1',
    "usertitle": "管理员",
    "username": "admin",
    "password": "123456",
    "token": "123133123",
  },
  {
    "id": '2',
    "usertitle": "用户",
    "username": "root",
    "password": "root",
    "token": "65454634",
  }]
});