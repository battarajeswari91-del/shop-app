import { render, screen } from '@testing-library/react';
import AppRouter from './router/AppRouter';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';

test('renders online shopping header', () => {
  render(
    <Provider store={store}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </Provider>
  );
  const linkElement = screen.getByText(/OnlineShopping/i);
  expect(linkElement).toBeInTheDocument();
});
