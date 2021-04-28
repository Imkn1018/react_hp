import { memo } from 'react';
import { BrowserRouter, Router } from 'react-router-dom';

export const Home = memo(() => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
});
