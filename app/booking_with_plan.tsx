import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function BookingWithPlan() {
    return <View style={styles.row}>
        <View key="1" style={[styles.container, styles.boxShadow, styles.column]}>
            <Image source={require('../assets/images/mybooking.png')} />
            <View style={styles.sizedBox16} />
            <Text style={styles.text}>My Booking</Text>
        </View>
        <View style={styles.sizedBox16Horizontal} />
        <View key="2" style={[styles.container, styles.boxShadow, styles.column]}>
            <Image source={require('../assets/images/myplan.png')} />
            <View style={styles.sizedBox16} />
            <Text style={styles.text}>My plan</Text>
        </View>,

    </View>;
}