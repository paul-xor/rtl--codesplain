import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RepositoriesListItem from './RepositoriesListItem';

// jest.mock('../tree/FileIcon', () => {
//   return () => {
//     return 'File Icon Component'
//   }
// })


function renderComponent() {
  const repository = {
    full_name: 'facebook/react',
    language: 'Javascript',
    description: 'A js library',
    owner: 'facebook',
    name: 'react',
    html_url: '/repositories/facebook/react'
  }
  render(
    <MemoryRouter>
      <RepositoriesListItem repository={repository} />
    </MemoryRouter>
  );

  return { repository };
}

test('shows a link to the github homepage for this repository', async () => {
  const { repository } = renderComponent();

  await screen.findByRole('img', { name: 'Javascript' });
  const link = screen.getByRole('link');
  expect(link).toHaveAttribute('href', repository.html_url);
});
