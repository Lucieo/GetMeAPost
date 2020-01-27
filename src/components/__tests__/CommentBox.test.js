import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from 'Root';

let wrapped

beforeEach(()=>{
  //fullDOM render needed for interactivity
  wrapped = mount(
    <Root>
      <CommentBox/>
    </Root>
  );
});
afterEach(()=>{
  wrapped.unmount();
});

it('has a text area and 2 button', ()=>{
  //Look for raw html elements
  expect(wrapped.find('button').length).toEqual(2);
  expect(wrapped.find('textarea').length).toEqual(1);
})

describe('the text area', ()=>{
  beforeEach(()=>{
    wrapped.find('textarea').simulate('change', {
      target:{value:'new comment'}
    });
    wrapped.update();
  })

  it('has a text area that users can type in', ()=>{
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment')
  });

  it('clicking submit empties value', ()=>{
    wrapped.find('form').simulate('submit');
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('')
  });
})
