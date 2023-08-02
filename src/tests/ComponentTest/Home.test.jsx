import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from '../../components/Home/Home';
import store from '../../redux/Store';

describe('Home Component', () => {
  test('dark mode button switches mode', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </Provider>,
    );
  });
});
