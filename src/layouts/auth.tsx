import { View, Text, StyleSheet } from "react-native";

export default function Auth() {
    return (
      <View style={styles.screen}>
        <View style={styles.con}>
          <Text style={styles.textbox1}>Glad To Meet You!</Text>
          <Text style={styles.textbox2}>Select how you'll register</Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: '#0a1029',
        flex: 1,
    },
    con :{
        backgroundColor: '#373954',
        paddingHorizontal: 40,
        paddingVertical: 10,
        position: 'static',
        left: 9,
        top: 195,
        borderRadius: 20,
    },
    textbox1:{
        color: '#eeeeee',
        fontSize: 24,
    },
    textbox2: {
        color: '#eeeeee'
    }
});
