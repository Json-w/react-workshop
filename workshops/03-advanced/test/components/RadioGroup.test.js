import React from "react";
import test from "ava";
import sinon from "sinon";
import { shallow } from "enzyme";
import RadioGroup from "../../components/RadioGroup";

test('Test 2 options in RadioGroup', t => {
  const options = ['male', 'female'];
  const wrapper = shallow(<RadioGroup options={options}/>)
  wrapper.find('span').nodes.map((ele,index)=>{
    t.is(ele.props.children,options[index]);
  })
})


