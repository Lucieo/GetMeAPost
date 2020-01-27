import React from 'react';
import {mount} from 'enzyme';
import moxios from 'moxios';
import Root from 'root';
import App from 'components/App';


beforeEach(()=>{
  moxios.install();
  //if moxios sees request should attempts to auto reply (url called, fake response obj)
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{name:'Fetched #1'}, {name:'Fetched #2'}]
  });
});

afterEach(()=>{
  moxios.uninstall();
});

//We need more time for moxios call to perfom - only consider test finished when we call done callback
it('can fetch a list of comments and display them', (done)=>{
  const wrapped = mount(
    <Root>
      <App/>
    </Root>
  )

  wrapped.find('.fetch-comments').simulate('click');
  //need more ime to catch moxios response
  moxios.wait(()=>{
    wrapped.update();
    expect(wrapped.find('li').length).toEqual(2);
    done(); //set test as finished
    wrapped.unmount();
  }, 100);
});
