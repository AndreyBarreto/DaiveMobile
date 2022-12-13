import styled from "styled-components/native";
import { Platform } from "react-native";
const isAndroid = Platform.OS === "android";

export const Container = styled.View`
  align-items: center;
  margin-top: 32px;
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

export const ProfileImage = styled.Image`
  width: 176px;
  height: 176px;
  border-radius: 88px;
`;

export const About = styled.View`
  margin-top: 32px;
  justify-content: space-between;
`;
export const Label = styled.View`
  align-items: center;
  margin: 12px 0;
`;

export const Info = styled.View`
  margin-top: 2px;
`;
