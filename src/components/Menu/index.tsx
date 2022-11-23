import { FlatList } from "react-native";
import { products } from "../../mocks/product";
import { Text } from "../Text";
import { Product, ProductImage, ProductDetails, Separator } from "./styles";

export function Menu() {
  return (
    <FlatList
      style={{ marginTop: 32 }}
      data={products}
      contentContainerStyle={{ paddingHorizontal: 24 }}
      keyExtractor={(product) => product._id}
      ItemSeparatorComponent={Separator}
      renderItem={({ item: product }) => (
        <Product>
          <ProductImage source={require("./DaiveLogo.png")} />
          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color="#666" style={{ marginVertical: 8 }}>
              {product.description}
            </Text>
            <Text weight="600" size={14}>
              {product.price}
            </Text>
          </ProductDetails>
        </Product>
      )}
    />
  );
}
