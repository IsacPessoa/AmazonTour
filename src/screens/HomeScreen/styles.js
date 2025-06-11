import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: colors.offWhite,
  },
  card: {
    padding: 6,
    marginBottom: 15,
    marginTop: 25,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: colors.forestGreen,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    height: 200,
    width: "100%",
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    color: colors.white,
    fontWeight: "bold",
    padding: 10,
  },

  categoriasContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 12,
    paddingTop: 12,
  },

  tabButton: {
    paddingVertical: 6,
    paddingHorizontal: 20,
    borderRadius: 3,
    marginHorizontal: 5,
    backgroundColor: colors.gray,
  },

  tabButtonAtivo: {
    backgroundColor: colors.forestGreen,
  },

  tabTexto: {
    fontSize: 16,
    color: colors.softBlack,
    fontWeight: "500",
  },

  tabTextoAtivo: {
    color: colors.white,
    fontWeight: "bold",
  },
});

export default styles;
