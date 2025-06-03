import { View, Text, ScrollView, Button, Dimensions } from "react-native";
import styles from "../../../styles";
import { PropsD } from "../../../my_routes";
import ViewModulesList from "./view_modules_list";
import CarouselComponent from "./carousel";
// import Carousel from 'react-native-snap-carousel';


export default function Home({ navigation }: PropsD<"Home">) {
    return (
        <ScrollView style={styles.header}>
            <Text style={styles.label}>Home</Text>
            <View style={styles.sizedBox16} />
            <Text style={styles.largeText}>What do you want to do today ?</Text>
            <View style={styles.sizedBox16} />
            <ViewModulesList />
            <View style={styles.sizedBox16} />
            <CarouselComponent />
            {/* <Button
                title="Go to Profile"
                onPress={() => navigation.push("Profile", { name: "Salma" })}
            /> */}

        </ScrollView>
    );
}