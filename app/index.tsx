import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { MyListTile } from "./my_list_tile";

export default function App() {
    return (
        <ScrollView >

            <Text style={styles.label}>Account</Text>
            <View style={styles.sizedBox16} />
            <View style={styles.row}>
                <View key="1" style={[styles.container, styles.boxShadow, styles.column]}>
                    <Image source={require('../assets/images/mybooking.png')} />
                    <View style={styles.sizedBox16} />
                    <Text style={styles.text}>My Booking</Text>
                </View>,
                <View key="2" style={[styles.container, styles.boxShadow, styles.column]}>
                    <Image source={require('../assets/images/myplan.png')} />
                    <View style={styles.sizedBox16} />
                    <Text style={styles.text}>My plan</Text>
                </View>,

            </View>
            <View style={styles.sizedBox16} />
            <MyListTile label="My Events" myIcon={require('../assets/images/event.png')} />

        </ScrollView>
    )


}
export const styles = StyleSheet.create({
    label: {
        color: '#01174F',
        fontWeight: '700',
        fontSize: 32,
    },
    text: {
        color: '#01174F',
        fontWeight: '700',
        fontSize: 14,
    },
    scrollView: {
        flex: 1,
        backgroundColor: '#F9F9FC',
        alignItems: 'stretch',
        paddingVertical: 20,
        paddingHorizontal: 16,
    },
    flex: {
        flex: 1
    },
    divider: {
        height: 1,
        width: '100%',
        backgroundColor: 'lightgray',
    },
    sizedBox16: {
        height: 16,
    },
    sizedBox8: {
        height: 8,
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        // alignItems: 'stretch',
        paddingVertical: 32,
        paddingHorizontal: 16,

    },
    padding16: { paddingHorizontal: 16, },
    boxShadow: {
        shadowColor: '#000000',
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.6,
        shadowRadius: 4,
        elevation: 3,
    },
    column: {
        flexDirection: 'column',
        // alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        // flex: 1,
        // flexShrink: 1,
        alignItems: 'center',
        rowGap: 16,
    },
})