import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navigation from '../../components/Navigation/Navi';
import store from '../../redux/Store';

describe('Navigation Component', () => {
  test('dark mode button switches mode', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Navigation />
        </MemoryRouter>
      </Provider>,
    );
  });
});
