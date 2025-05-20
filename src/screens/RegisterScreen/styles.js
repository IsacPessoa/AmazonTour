import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  inputContainer: {
    width: "100%",
    position: "relative",
    marginBottom: 15,
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    borderColor: colors.gray,
    borderWidth: 1,
    paddingRight: 40,
  },
  showHideButton: {
    position: "absolute",
    right: 15,
    top: "50%",
    transform: [{ translateY: -3 }],
    padding: 5,
  },
  showHideText: {
    fontSize: 18,
    color: colors.darkGreen,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500",
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: colors.softBlack,
    fontWeight: "500",
  },
});
