import {Categories} from './Categories/Categories';
import {Search} from './Search/Search';
import {useFilterPanel} from './useFilterPanel';

export const FilterPanel = () => {
  const {handleChangeCategory, handleSearch, handleKeyDown, selectedCategory, searchValue} = useFilterPanel();

  return (
    <div>
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
