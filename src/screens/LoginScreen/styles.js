import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  registerText: {
    color: colors.lightGreen,
  },
  showHideButton: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -16 }],
    padding: 5,
  },
});
