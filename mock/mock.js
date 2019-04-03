import Mock from 'mockjs';
 
Mock.mock('/api/user', {
    'name': '@cname',
    'intro': '@word(20)'
});