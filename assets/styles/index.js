import { StyleSheet } from "react-native";
import theme from "./theme";
import colors from "./colors.js";

const style = StyleSheet.create({
  largeHeaderText: {
    fontSize: theme.FONT_SIZE_LARGE,
    alignSelf: "center",
  },
  mediumHeaderText: {
    fontSize: theme.FONT_SIZE_MEDIUM,
    color: theme.PRIMARY_COLOR,
  },
  lineBreak: {
    height: theme.SEPARATOR_HEIGHT,
  },
  separator: {
    height: 2,
    backgroundColor: colors.LIGHT,
  },
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
    paddingHorizontal: 10,
  },
  textInput: {
    backgroundColor: colors.LIGHT,
    borderColor: colors.PRIMARY,
    borderWidth: 2,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontSize: theme.FONT_SIZE_MEDIUM,
    flex: 1.5,
  },
  row: {
    flexDirection: "row",
  },
});

export default {
  style,
  colors,
};
