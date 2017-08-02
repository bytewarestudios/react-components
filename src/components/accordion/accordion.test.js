import React from 'react';
import renderer from 'react-test-renderer';
import ReactDOM from 'react-dom';
import { Accordion } from './accordion';

const accordion = [
  {
    id: 'accordion-id-1',
    title: 'accordion title 1',
    content: 'I am the contents of tab 1'
  },
  {
    id: 'accordion-id-2',
    title: 'accordion title 2',
    content: 'I am the contents of tab 2'
  }
];


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Accordion />, div);

})


it('renders a snapshot', () => {
  const tree = renderer.create(<Accordion />).toJSON();
  console.log(tree);
  // expect(tree).toMatchSnapshot();
});


