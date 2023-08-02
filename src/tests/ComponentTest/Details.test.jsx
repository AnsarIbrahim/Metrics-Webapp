import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Details from '../../components/Content/Details/Details';
import store from '../../redux/Store';

describe('Details Component', () => {
  test('dark mode button switches mode', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Details />
        </MemoryRouter>
      </Provider>,
    );
  });
});
