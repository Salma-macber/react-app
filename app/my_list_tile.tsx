import { View, Text, Image, ImageSourcePropType } from "react-native";
import { Icon } from "react-native-elements";
import styles from "./styles";

export default function MyListTile({ label, myIcon }: { label: string, myIcon: ImageSourcePropType }) {
    return <View style={styles.column}>
        <View style={[styles.row, styles.padding16]}>
            <Image source={myIcon} />
            <View style={styles.sizedBox16Horizontal} />
            <Text style={styles.text}>{label}</Text>
            <View style={styles.flex} />
            <Icon name="chevron-right" size={24} color="#01174F" />
        </View>  <View style={styles.sizedBox8} />
        <View style={styles.divider} />
    </View>;
}
