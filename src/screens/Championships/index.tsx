import { CategoriesContainer, MenuContainer } from "./styles";
import { Header } from "../../components/Header";
import { Categories } from "../../components/Categories";
import { Menu } from "../../components/Menu";

export function Championships() {
  return (
    <>
      <Header />

      <CategoriesContainer>
        <Categories />
      </CategoriesContainer>

      <MenuContainer>
        <Menu />
      </MenuContainer>
    </>
  );
}
