import {Title} from '../Title/Title';
import {Categories} from './Categories/Categories';
import {Search} from './Search/Search';
import {useFilterPanel} from './useFilterPanel';

export const FilterPanel = () => {
  const {handleChangeCategory, handleSearch, handleKeyDown, selectedCategory, searchValue} = useFilterPanel();

  return (
    <div>
      <Title text="Filter by category" />
      <Categories
        onChange={handleChangeCategory}
        selectedCategory={selectedCategory}
      />
      <Search
        searchValue={searchValue}
        onSearch={handleSearch}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
