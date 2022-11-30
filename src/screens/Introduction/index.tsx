import { Text } from "../../components/Text";
import { Container, Image } from "./style";
import AppIntroSlider from "react-native-app-intro-slider";
import { sliderItems } from "../../mocks/introduction";
import WaveTop from "../../components/Waves/WaveTop";
import WaveBot from "../../components/Waves/WaveBot";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export function Introduction() {
  const navigation = useNavigation();

  function renderSlides({ item }: any) {
    return (
      <>
        <Container>
          <Image source={item.image} />
          <Text size={24} weight="600">
            {`${item.title}\n`}
            {`${item.title2}\n`}
          </Text>
          {/* <Text>
            {`${item.subtitle}\n`}
            {`${item.subtitle2}\n`}
          </Text> */}
        </Container>
      </>
    );
  }

  const goToLogin = () => {
    // @ts-ignore
    navigation.navigate("Championships");
  };

  return (
    <>
      <WaveTop />
      <AppIntroSlider
        renderItem={renderSlides}
        data={sliderItems}
        activeDotStyle={{
          backgroundColor: "#93ccea",
          width: 40,
        }}
        onDone={goToLogin}
      />
      <WaveBot />
    </>
  );
}
