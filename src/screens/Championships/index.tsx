import {
  CategoriesContainer,
  MenuContainer,
  SearchInput,
  SearchContainer,
} from "./styles";
import { Categories } from "../../components/Categories";
import { Menu } from "../../components/Menu";

export function Championships() {
  return (
    <>
      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>
      <SearchContainer>
        <SearchInput placeholder="Faça sua busca aqui"></SearchInput>
      </SearchContainer>

      <MenuContainer>
        <Menu />
      </MenuContainer>
    </>
  );
}
