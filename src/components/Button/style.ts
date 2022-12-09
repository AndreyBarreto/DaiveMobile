import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background: ${({ disabled }) => (disabled ? " #999" : "#93ccea")};
  border-radius: 48px;
  padding: 14px 24px;
  align-items: center;
  justify-content: center;
  margin: 0px 48px;
`;
