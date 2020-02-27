const Mock = require('mockjs');

// let Random = Mock.Random();
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

Mock.mock('/getStatistics',{
  "error-code":0,
  source:[
    ['Jan',34,20,'XX',52],
    ['Feb',28,14,'yy',54],
    ['Mar',45,32,'zz',42],
    ['Apr',69,46],
    ['May',39,24],
    ['Jun',43,23],
    ['Jul',33,13],
    ['Aug',23,16],
    ['Sep',23,20],
    ['Oct',33,24],
    ['Nov',39,15],
    ['Dec',22,15],
  ]

})