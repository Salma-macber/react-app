import { View, Text, ScrollView, Button } from "react-native";
import styles from "../../../styles";
import { PropsD } from "../../../my_routes";

export default function Home({ navigation }: PropsD<"Home">) {
    return (
        <ScrollView>
            <Text style={styles.label}>Home</Text>
            <View style={styles.sizedBox16} />
            <Button
                title="Go to Profile"
                onPress={() => navigation.push("Profile", { name: "Salma" })}
            />
        </ScrollView>
    );
}
