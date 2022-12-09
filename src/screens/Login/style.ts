import styled from "styled-components/native";
import { Platform } from "react-native";
const isAndroid = Platform.OS === "android";

export const Container = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
`;

export const TextInput = styled.TextInput`
  color: black;
  border-radius: 24px;
  background-color: white;
  margin: 0px 36px;
  height: 45px;
  padding: 0px 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
`;

export const ForgotPassword = styled.View`
  margin-top: 8px;
  align-items: center;
`;

export const Submit = styled.View``;

export const GoogleContainer = styled.TouchableOpacity`
  margin-top: 24px;
  /* align-items: center; */
`;

export const Icon = styled.View`
  background: #fff;
  width: 176px;
  height: 176px;
  border-radius: 88px;
  align-items: center;
  justify-content: center;
  margin-bottom: 8px;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, ${isAndroid ? 1 : 0.1});
  elevation: 2;
`;

export const Image = styled.Image`
  width: 176px;
  height: 176px;
  border-radius: 88px;
`;
export const ImageContainer = styled.View`
  align-items: center;
  margin-top: 32px;
  margin-bottom: 64px;
`;
