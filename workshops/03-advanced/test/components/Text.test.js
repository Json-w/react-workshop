import React from "react";
import test from "ava";
import sinon from "sinon";
import { shallow } from "enzyme";
import Text from "../../components/Text";

test('Test shallow render', t => {
  const wrapper = shallow(<Text />)
  t.is(wrapper.find('label').length, 1)
  t.is(wrapper.find('input').length, 1)
})

test('Test onChange callback', t => {
  const onChange = sinon.spy()
  const wrapper = shallow(<Text onChange={onChange}/>)
  wrapper.find('input').simulate('change', {target: {value: 0}})
  t.is(onChange.called, true)
  t.is(onChange.callCount, 1)
  t.is(onChange.calledWith(0), true)
})

test('Test onBlur callback', t => {
  const onBlur = sinon.spy();
  const wrapper = shallow(<Text onBlur={onBlur}/>)
  wrapper.find('input').simulate('blur')
  t.is(onBlur.called, true)
  t.is(onBlur.callCount, 1)
})

test('test label can be inject', t => {
  const wrapper = shallow(<Text label="testLabel"/>)
  t.is(wrapper.find('label').contains('testLabel'), true);
})

test('test name can be set into input',t=>{
  const wrapper = shallow(<Text name="testName"/>)
  t.is(wrapper.find('input').props().name,'testName');
})
