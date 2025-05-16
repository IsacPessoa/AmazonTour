import { StyleSheet } from "react-native";
import colors from "./colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.softBlack,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderColor: colors.gray,
    borderWidth: 1,
  },
  button: {
    width: "100%",
    height: 50,
    backgroundColor: colors.darkGreen,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 900,
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "stretch",
  },
  text: {
    fontSize: 14,
    marginTop: 16,
  },
});
