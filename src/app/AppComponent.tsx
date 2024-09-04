import {FilterPanel} from '@users/components/FilterPanel/FilterPanel';
import {UserTable} from '@users/components/UserTable/UserTable';

export const AppComponent = () => {
  return (
    <div>
      <FilterPanel />
      <UserTable />
    </div>
  );
};
