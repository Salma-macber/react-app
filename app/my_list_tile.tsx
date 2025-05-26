import { View, Text, Image } from "react-native";
import { Icon } from "react-native-elements";
import { styles } from ".";

export function MyListTile({ label, myIcon }: { label: string, myIcon: any }) {
    return <View style={styles.column}>
        <View style={[styles.row, styles.padding16]}>
            <Image source={myIcon} />
            <View style={styles.sizedBox16} />
            <Text style={styles.text}>{label}</Text>
            <View style={styles.flex} />
            <Icon name="chevron-right" size={24} color="#01174F" />
        </View>  <View style={styles.sizedBox8} />
        <View style={styles.divider} />
    </View>;
}
