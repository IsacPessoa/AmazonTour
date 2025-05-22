import { Button, StyleSheet } from "react-native";
import colors from "../../colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
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
  button: {
    backgroundColor: "red",
    width: "50%",
    borderRadius: 6,
    marginTop: 15,
  },
  text: {
    color: colors.white,
    fontSize: 18,
    textAlign: "center",
    fontWeight: "bold",
  },
});
