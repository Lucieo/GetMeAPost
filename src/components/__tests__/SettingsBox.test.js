import React from 'react';
import {mount} from 'enzyme';
import SettingsBox from 'components/SettingsBox';
import Root from 'Root';

let wrapped

beforeEach(()=>{
  wrapped = mount(
    <Root>
      <SettingsBox/>
    </Root>
  );
});
afterEach(()=>{
  wrapped.unmount();
});

it('has a text area and 3 button', ()=>{
  expect(wrapped.find('button').length).toEqual(3);
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
