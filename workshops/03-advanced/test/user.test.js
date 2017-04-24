import test from 'ava'
import User from '../Obj/User'

var user = new User(1,'pei');

test('hello',t=>{
  t.is(user.hello('react'),'Hello react, I am pei');
});

test('report',t=>{
  t. (user.report(),user);
});

test('addFavor',t=>{
  user.addFavor('myfavor')
  t.is('myfavor',user.favors[0]);
});
