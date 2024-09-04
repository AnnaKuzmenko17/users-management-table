import {Container} from '@users/components/Container/Container';
import {FilterPanel} from '@users/components/FilterPanel/FilterPanel';
import {UserTable} from '@users/components/UserTable/UserTable';

export const AppComponent = () => {
  return (
    <Container>
      <FilterPanel />
      <UserTable />
    </Container>
  );
};
