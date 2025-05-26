// import React, { useState } from 'react';
// import { TouchableOpacity, StyleSheet, Text, View, ImageBackground, ScrollView, FlatList, Modal, Switch, Image, Button, Alert } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Svg, { Circle, Rect } from 'react-native-svg';
// import { styles } from './styles';

// function MyButton(props: { title: string, onPress: () => void }) {
//     return (
//         <TouchableOpacity onPress={props.onPress}>
//             <Text>{props.title}</Text>
//         </TouchableOpacity>
//     );
// }
// const MyHomeScreen = () => {
//     const [isEnabled, setIsEnabled] = useState(false);
//     const toggleSwitch = () => setIsEnabled(previousState => !previousState);
//     const onPress = () => {
//         //for mobile
//         // Alert.alert('You tapped the button!');
//         //for web
//         alert('You tapped the button!');
//     };
//     return (<ScrollView contentContainerStyle={styles.scrollViewContent} >
//         <SafeAreaView>
//             <View>
//                 <MyButton title="Press Me" onPress={() => alert('Button pressed')} />
//                 <View style={{ height: 50, backgroundColor: 'blue' }} >
//                     <Svg height="100%" width="100%" viewBox="0 0 100 100">
//                         <Circle cx="50" cy="50" r="45" stroke="black" strokeWidth="3" fill="red" />
//                         {/* <Rect x="50" y="50" width="10" height="10" fill="black" /> */}
//                     </Svg>
//                 </View>
//                 <Switch
//                     trackColor={{ false: "#767577", true: "#81b0ff" }}
//                     thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
//                     ios_backgroundColor="#3e3e3e"
//                     onValueChange={toggleSwitch}
//                     value={isEnabled}
//                 />
//                 <View>
//                     <FlatList
//                         // scrollEnabled={false}
//                         data={['item1', 'item2', 'item3']}
//                         renderItem={({ item }) => <Text>{item}</Text>}
//                         keyExtractor={item => item}
//                     />
//                 </View>
//                 <ImageBackground source={require('../assets/images/banner.jpg')} style={{ width: '100%', height: 150 }}>
//                     <Text>Hello</Text>
//                     <Text>Hello</Text>
//                     <Text>Hello</Text>
//                     <Text>Hello</Text>
//                 </ImageBackground>
//                 <View>
//                     <Text>Hello</Text>
//                     <Text>Hello</Text>
//                 </View>
//                 <Modal
//                     visible={false}
//                     animationType="slide"
//                     onRequestClose={() => { console.log('Modal closed') }}
//                 >
//                     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//                         <Text>This is a Modal</Text>
//                     </View>
//                 </Modal>
//             </View>
//             <View
//                 style={{
//                     width: 50,
//                     height: 50,
//                     backgroundColor: 'powderblue',
//                 }}
//             />
//             <View
//                 style={{
//                     width: 100,
//                     height: 100,
//                     backgroundColor: 'skyblue',
//                 }}
//             />
//             <View
//                 style={{
//                     width: 150,
//                     height: 150,
//                     backgroundColor: 'steelblue',
//                 }}
//             />
//             <View style={{ height: '100%' }}>
//                 <View
//                     style={{
//                         height: '15%',
//                         backgroundColor: '#778899',
//                     }}
//                 />
//                 <View
//                     style={{
//                         width: '66%',
//                         height: '35%',
//                         backgroundColor: 'skyblue',
//                     }}
//                 />
//                 <View
//                     style={{
//                         width: '33%',
//                         height: '50%',
//                         backgroundColor: 'steelblue',
//                     }}
//                 >   <Image source={{ uri: 'https://reactjs.org/logo-og.png' }}
//                     style={{ width: '100%', height: '100%' }} /></View>
//             </View>
//             <Button
//                 onPress={() => {
//                     console.log('You tapped the button!');
//                 }}
//                 title="Press Me"
//             />
//             <View style={styles.alternativeLayoutButtonContainer}>
//                 <Button onPress={onPress} title="This looks great!" />
//                 <Button onPress={onPress} title="OK!" color="#841584" />
//             </View>
//         </SafeAreaView>  </ScrollView>);
// };
// export default MyHomeScreen;