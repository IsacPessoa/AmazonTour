import { StyleSheet } from "react-native";
import colors from "../../colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingTop: 15,
    paddingBottom: 10,
    backgroundColor: colors.offWhite,
  },

  categoriasContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 16,
    paddingVertical: 10,
  },

  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 22,
    borderRadius: 20,
    marginHorizontal: 6,
    backgroundColor: colors.gray,
    shadowColor: colors.softBlack,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },

  tabButtonAtivo: {
    backgroundColor: colors.darkGreen,
    shadowOpacity: 0.4,
    elevation: 5,
  },

  tabTexto: {
    fontSize: 16,
    color: colors.softBlack,
    fontWeight: "500",
  },

  tabTextoAtivo: {
    color: colors.mentaGreen,
    fontWeight: "700",
  },

  card: {
    backgroundColor: colors.darkGreen,
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 4,
    shadowColor: colors.softBlack,
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  image: {
    height: 200,
    width: "100%",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },

  title: {
    fontSize: 20,
    color: colors.mentaGreen,
    fontWeight: "bold",
    paddingHorizontal: 12,
    paddingVertical: 10,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  emptyText: {
    fontSize: 18,
    color: colors.darkGreen,
    textAlign: "center",
    fontWeight: "600",
  },
});

export default styles;
