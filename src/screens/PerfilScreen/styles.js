import { StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.darkGreen,
    textAlign: "center",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  value: {
    fontWeight: "normal",
    color: "#333",
  },
  message: {
    textAlign: "center",
    color: "#888",
    fontSize: 16,
  },
});
