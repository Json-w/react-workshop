import sinon from 'sinon'
import test from 'ava'

function doSomething(callback) {
  callback();
}

test('spy',t => {
  const callback = sinon.spy()
  doSomething(callback)
  t.true(callback.called)
  t.is(callback.callCount, 1)
})


test('count',t => {
  var count = sinon.stub();
  count.withArgs(1, 2).returns(3)
  t.is(count(1, 2), 3)
})

test(t => {
  const getStub = sinon.stub()
  getStub.withArgs('key').returns('value')
  const localStorage = { get: getStub };
  t.is(localStorage.get('key'), 'value')
})
