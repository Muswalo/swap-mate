import React from "react";
import {
  StatusBar,
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useConstants } from "../../styles/StylesContext";

interface HeaderProps {
  logo: any;
  heading: string;
  headingText: string;
  backgroundImage?: any;
}

const Header: React.FC<HeaderProps> = ({
  logo,
  heading,
  headingText,
  backgroundImage,
}) => {
  const constantStyles = useConstants();

  const headingTextStyle =
    headingText.length > 20 ? styles.smallHeadingText : styles.headingText;

  return (
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={backgroundImage}
        style={[
          styles.header,
          { backgroundColor: constantStyles.BLACK_BACKGROUND },
        ]}
      >
        <Image source={logo} resizeMode="contain" style={styles.logo} />

        <View style={styles.textContainer}>
          <Text style={styles.heading}>{heading}</Text>
          <Text style={headingTextStyle}>{headingText}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  header: {
    height: 145,
    paddingHorizontal: 20,
    paddingTop: StatusBar.currentHeight,
  },
  logo: {
    height: 30,
    width: 30,
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
  textContainer: {
    marginTop: 10,
  },
  headingText: {
    color: "white",
    fontSize: 26,
    fontWeight: "100",
  },
  smallHeadingText: {
    color: "white",
    fontSize: 20,
    fontWeight: "100",
  },
});

export default Header;
