import react from 'react';
import renderer from 'react-test-renderer';
import expectExport from 'expect';
import App from '../components/App';

test('Premier test', () => {
  const component = renderer.create(<span>Lol</span>);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
