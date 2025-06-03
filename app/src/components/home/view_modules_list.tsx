
import { View, Image, Text, FlatList } from "react-native";
import styles from "../../../styles";
import ModulesList from "./modules_data.json";

export default function ViewModulesList() {
    return (
        <FlatList
            horizontal
            data={ModulesList}
            renderItem={({ item, index }) => {
                console.log(item.icon);
                return (<View style={[styles.row, styles.padding16H8V, styles.whiteBox, styles.mergeBox16]}>
                    <Image source={require('../../../../assets/images/mybooking.png')} />
                    <View style={styles.sizedBox16Horizontal} />
                    <Text style={styles.text}>{item.title}</Text>
                </View>
                );
            }}
        />
        // <View style={styles.row}>
        //     {ModulesList.map((module, index) => (
        //         <View style={[styles.row, styles.padding16]}>
        //             {/* <Image source={require('../../../../assets/images/mybooking.png')} /> */}
        //             <View style={styles.sizedBox16Horizontal} />
        //             <Text style={styles.text}>{module.title}</Text>
        //         </View>
        //     ))}
        // </View>
    );
}