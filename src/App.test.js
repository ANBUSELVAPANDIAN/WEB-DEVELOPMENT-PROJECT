import { render, screen } from '@testing-library/react';
import App from './App';

// Test to check if the Home page banner text is rendered
test('renders Home page with banner text', () => {
  render(<App />);
  const bannerText = screen.getByText(/Your Health, Our Priority/i);
  expect(bannerText).toBeInTheDocument();
});

// Test to check if navigation links are rendered correctly
test('renders navigation links', () => {
  render(<App />);
  
  // Check for the navigation links
  const homeLink = screen.getByRole('link', { name: /Home/i });
  const aboutLink = screen.getByRole('link', { name: /About/i });
  const loginLink = screen.getByRole('link', { name: /Login/i });

  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
});

// Test to check if navigation links are clickable
test('navigates to correct pages when links are clicked', () => {
  render(<App />);
  
  // Simulate clicking on the Home link and checking the URL change
  const homeLink = screen.getByRole('link', { name: /Home/i });
  homeLink.click();
  expect(window.location.pathname).toBe('/'); // Assuming the Home page is the root
  
  // Simulate clicking on the About link and checking the URL change
  const aboutLink = screen.getByRole('link', { name: /About/i });
  aboutLink.click();
  expect(window.location.pathname).toBe('/about'); // Assuming the About page is at /about
  
  // Simulate clicking on the Login link and checking the URL change
  const loginLink = screen.getByRole('link', { name: /Login/i });
  loginLink.click();
  expect(window.location.pathname).toBe('/login'); // Assuming the Login page is at /login
});
