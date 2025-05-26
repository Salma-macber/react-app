import { View, Text, StyleSheet, ScrollView } from "react-native";
import MyListTile from "../../../my_list_tile";
import BookingWithPlan from "../../../booking_with_plan";
import styles from "../../../styles";
import { PropsD } from "../../../my_routes";


export default function Account({ route, navigation }: PropsD<"Profile">) {
    const { name } = route.params;
    return (
        <ScrollView >
            <Text style={styles.label}>Hi {name}</Text>
            <Text style={styles.label}>Account</Text>
            <View style={styles.sizedBox16} />
            <BookingWithPlan />
            <View style={styles.sizedBox24} />
            <MyListTile label="My Events" myIcon={require('../../../../assets/images/event.png')} />
            <View style={styles.sizedBox24} />
            <MyListTile label="My Fitness Club" myIcon={require('../../../../assets/images/MyFitnessClub.png')} />
            <View style={styles.sizedBox24} />
            <MyListTile label="My Courses" myIcon={require('../../../../assets/images/My Courses.png')} />
            <View style={styles.sizedBox24} />
            <MyListTile label="Favorite" myIcon={require('../../../../assets/images/Favorite.png')} />
            <View style={styles.sizedBox24} />
            <MyListTile label="Issue Reporting" myIcon={require('../../../../assets/images/Issue Reporting.png')} />
            <View style={styles.sizedBox24} />
            <MyListTile label="Contact Admin" myIcon={require('../../../../assets/images/Contact Admin.png')} />
            <View style={styles.sizedBox24} />
            <MyListTile label="Get direction" myIcon={require('../../../../assets/images/Get direction.png')} />
        </ScrollView>
    )
}