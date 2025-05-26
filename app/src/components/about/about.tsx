import { View, Text, ScrollView, Button } from "react-native";
import styles from "../../../styles";

export default function About() {
    return (
        <ScrollView>
            <Text style={styles.label}>About</Text>
            <View style={styles.sizedBox16} />
        </ScrollView>
    );
}
