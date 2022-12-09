import { Text } from "../Text";
import { Container } from "./style";
import { ReactElement } from "react";

interface ButtonProps {
  children: string | ReactElement;
  onPress?: () => void;
  disabled?: boolean;
}

export function Button({ children, onPress, disabled }: ButtonProps) {
  return (
    <Container onPress={onPress} disabled={disabled}>
      <Text weight="600" color="#fff">
        {children}
      </Text>
    </Container>
  );
}
