// import { Container } from "./styles";
// import { CategoriesContainer, MenuContainer } from "./styles";
// import { Header } from "../../components/Header";
// import { Categories } from "../../components/Categories";

import { Text } from "../../components/Text";
import { Container, Icon, ProfileImage } from "./style";

export function Profile() {
  return (
    <Container>
      <Icon>
        <ProfileImage
          source={require("../../assets/DaiveLogo.png")}
        ></ProfileImage>
      </Icon>
      <Text weight="600" size={32}>
        Daive
      </Text>
      <Text size={16}>Aprendiz</Text>
    </Container>
  );
}
