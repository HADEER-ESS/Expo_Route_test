import Page from '@/app';
import * as React from 'react';
import renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = renderer.create(<Page />).toJSON();

  expect(tree).toMatchSnapshot();
});
