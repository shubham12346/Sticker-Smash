import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: string;
  selectedImage?: string | undefined;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
  const hasSelectedImage = selectedImage ? selectedImage : imgSource;
  console.log(selectedImage);
  return <Image source={hasSelectedImage} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});
