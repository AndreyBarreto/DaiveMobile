// import { Container } from "./styles";
// import { CategoriesContainer, MenuContainer } from "./styles";
// import { Header } from "../../components/Header";
// import { Categories } from "../../components/Categories";
import { Ionicons } from "@expo/vector-icons";

import { Text } from "../../components/Text";
import { Container, Icon, ProfileImage, About, Label, Info } from "./style";

export function Profile() {
  return (
    <>
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
      <About>
        <Label>
          <Ionicons name="person-sharp" size={36} color="#8AB2FF" />
          <Text size={14}>Nome</Text>
          <Info>
            <Text weight="600" size={20}>
              Daive
            </Text>
          </Info>
        </Label>
        <Label>
          <Ionicons name="person-sharp" size={36} color="#8AB2FF" />
          <Text size={14}>Sobrenome</Text>
          <Info>
            <Text weight="600" size={20}>
              Daive
            </Text>
          </Info>
        </Label>
        <Label>
          <Ionicons name="mail-sharp" size={36} color="#8AB2FF" />
          <Text size={14}>Email</Text>
          <Info>
            <Text weight="600" size={20}>
              Daive@daive.com
            </Text>
          </Info>
        </Label>
      </About>
    </>
  );
}
