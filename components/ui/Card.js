import {View, StyleSheet} from "react-native"
import Colors from "../../constants/colors"

function Card({children}) {
return <View style={styles.card}>{children}</View>
}

export default Card

const styles = StyleSheet.create({
    card: {
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        marginTop: 30,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary800,
        elevation: 4,
        shadowColor: "black",
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.25,
      },
})