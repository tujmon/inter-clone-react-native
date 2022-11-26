import {
  FiltersContainer,
  FilterContainer,
  Filter,
  FilterImage,
  FilterImageContainer,
  FilterName,
  SearchImage} from './styles'

import searchBlack from "../../../../../assets/search-black.png"
import chevronBlackDown from "../../../../../assets/chevron-black-down.png"

export default function Filters() {
  return (
  <FiltersContainer>
    <FilterContainer>
      <Filter>
        <FilterImageContainer>
          <SearchImage
            source={searchBlack}
          />
        </FilterImageContainer>
      </Filter>
    </FilterContainer>
    <FilterContainer>
      <Filter>
        <FilterName>Datas</FilterName>
        <FilterImageContainer>
          <FilterImage
            source={chevronBlackDown}
          />
        </FilterImageContainer>
      </Filter>
    </FilterContainer>
    <FilterContainer>
      <Filter>
        <FilterName>Tipos</FilterName>
        <FilterImageContainer>
          <FilterImage
            source={chevronBlackDown}
          />
        </FilterImageContainer>
      </Filter>
    </FilterContainer>
    <FilterContainer>
      <Filter>
        <FilterName>Lancamentos</FilterName>
        <FilterImageContainer>
          <FilterImage
            source={chevronBlackDown}
          />
        </FilterImageContainer>
      </Filter>
    </FilterContainer>
  </FiltersContainer>)
}