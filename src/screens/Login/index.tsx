import { useState } from "react";
import { Button } from "../../components/Button";
import { Text } from "../../components/Text";
import { Ionicons } from "@expo/vector-icons";

import {
  Container,
  TextInput,
  Submit,
  ForgotPassword,
  GoogleContainer,
  Icon,
  Image,
  ImageContainer,
} from "./style";

export function Login() {
  return (
    <Container>
      <ImageContainer>
        <Icon>
          <Image source={require("../../assets/DaiveLogo.png")}></Image>
        </Icon>
      </ImageContainer>
      <TextInput placeholder="E-mail"></TextInput>
      <TextInput placeholder="Senha"></TextInput>
      <Submit></Submit>
      <Button>Enviar</Button>
      <ForgotPassword>
        <Text size={14} color="#133a4e">
          esqueceu a senha?
        </Text>
      </ForgotPassword>

      <GoogleContainer>
        <Button>
          <Ionicons name="logo-google" size={32} color="white" />
        </Button>
      </GoogleContainer>
    </Container>
  );
}
