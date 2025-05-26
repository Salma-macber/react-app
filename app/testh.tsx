
// import React, { useState } from 'react';
// import { Text, View, KeyboardAvoidingView, TextInput, Keyboard } from 'react-native';
// import { FlatList, TouchableOpacity, StyleSheet, } from 'react-native';
// import AddTask from './AddTask';

// type Task = {
//   title: string;
//   taskDone: boolean;
// };

// const Task = (prop: any) => {

//   return (
//     <View style={taskStyles.item}>
//       <View style={taskStyles.itemLeft}>

//         <View style={taskStyles.circular}></View>
//         <Text style={taskStyles.itemText}>{prop.title}</Text>
//       </View>
//       <View style={taskStyles.square}></View>
//       {/* <TouchableOpacity onPress = {prop.title.taskDone}>
//        <View style={taskStyles.square}></View> 
//    </TouchableOpacity> */}

//     </View>
//   );
// }

// export default function App() {
//   let [todoList, setTodoList] = useState<Task[]>([]);
//   let [dones, setDones] = useState(0);
//   let [tasks, setTasks] = useState(0);
//   const taskAdded = (newTask: Task) => {
//     setTodoList([...todoList, newTask])
//     setTasks(todoList.length + 1)
//   }

//   let taskDone = (index: any) => {

//     let tempList = [...todoList];
//     tempList.splice(index, 1);
//     setTodoList(tempList);
//     setDones(++dones)
//     setTasks(--tasks)

//   }

//   return (
//     <View style={styles.container}>
//       <View style={styles.HeaderStyleWrapper}>
//         <Text style={styles.HeaderStyleText}>Today's Tasks </Text>
//         <View style={styles.tasks}>
//           <Text style={{ color: 'orange', fontWeight: 'bold', fontSize: 15, }}> Tasks : {tasks}</Text>
//           <Text style={{ color: 'green', fontWeight: 'bold', fontSize: 15, }}> Done : {dones}</Text>

//         </View>

//         <View style={styles.items}>
//           <FlatList
//             data={todoList}
//             renderItem={({ item, index }) => {
//               return (
//                 <TouchableOpacity key={index} onPress={taskDone}>
//                   <Task key={index} title={item.title} done={item.taskDone}></Task>
//                 </TouchableOpacity>

//               )
//             }}
//             ListEmptyComponent={() => {
//               return <Text style={styles.EmptyListStyleText}>
//                 Please Add Task
//               </Text>
//             }}
//             initialNumToRender={5}
//           >

//           </FlatList>

//         </View>

//       </View>
//       <AddTask onTaskAdd={taskAdded} />
//     </View>

//   );
// }


// const addTaskStyles = StyleSheet.create({
//   writeTaskWrapper: {
//     position: 'absolute',
//     bottom: 60,
//     width: '100%',
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//   },
//   input: {
//     paddingVertical: 15,
//     paddingHorizontal: 15,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//     width: 250,
//     //bottom:-400,
//   },
//   addWrapper: {
//     width: 60,
//     height: 60,
//     backgroundColor: '#FFF',
//     borderRadius: 60,
//     justifyContent: 'center',
//     alignItems: 'center',
//     borderColor: '#C0C0C0',
//     borderWidth: 1,
//     //bottom:-400,
//   },
//   addText: {
//     fontSize: 30,
//     color: '#4382f7',
//   },
// });


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#E8EAED',

//   },
//   HeaderStyleWrapper: {
//     paddingTop: 80,
//     paddingHorizontal: 20,
//   },
//   HeaderStyleText: {
//     color: '#4db8ff',
//     fontSize: 24,
//     fontWeight: 'bold'
//   },
//   EmptyListStyleText: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     alignItems: 'center',
//     margin: 50,
//     color: '#ff6666',
//   },
//   items: { marginTop: 30, },
//   tasks: {
//     flexDirection: 'row',
//     paddingHorizontal: 50,
//     marginTop: 10,
//     justifyContent: 'space-between',
//   }
// });


// const taskStyles = StyleSheet.create({
//   item: {
//     backgroundColor: '#FFF',
//     padding: 15,
//     borderRadius: 10,
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   itemLeft: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     flexWrap: 'wrap'
//   },
//   square: {
//     width: 24,
//     height: 24,
//     backgroundColor: '#55BCF6',
//     opacity: 0.4,
//     borderRadius: 5,
//     marginRight: 15,
//   },
//   itemText: {
//     maxWidth: '80%',
//   },
//   circular: {
//     width: 12,
//     height: 12,
//     borderColor: '#55BCF6',
//     borderWidth: 2,
//     borderRadius: 5,
//     marginRight: 15,
//   },
// });

// //////////////////////////////////////////////////////

// import React from 'react';
// import {
//   SafeAreaView,
//   View,
//   Text,
//   Image,
//   FlatList,
//   TouchableOpacity,
//   ScrollView,
//   StyleSheet,
// } from 'react-native';
// import Icon from 'react-native-vector-icons/Ionicons';

// const App = () => {
//   const upcomingEvents = [
//     {
//       id: '1',
//       title: 'Summer Music Festival',
//       date: 'Mar 15, 2025',
//       location: 'Golden Gate Park',
//       image: require('../assets/images/upcoming1.jpg'),
//     },
//     {
//       id: '2',
//       title: 'Tech Conference',
//       date: 'Mar 20, 2025',
//       location: 'Convention Center',
//       image: require('../assets/images/upcoming1.jpg'),
//     },
//   ];

//   const pastEvents = [
//     {
//       id: '1',
//       title: 'Jazz Night Special',
//       date: 'Mar 25, 2025',
//       location: 'Blue Note Jazz Club',
//       image: require('../assets/images/art.jpg'),
//     },
//     {
//       id: '2',
//       title: 'Modern Art Exhibition',
//       date: 'Mar 30, 2025',
//       location: 'Contemporary Arts Museum',
//       image: require('../assets/images/art.jpg'),
//     },
//   ];

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView>
//         {/* Header */}
//         <View style={styles.header}>
//           <View>
//             <Text style={styles.hello}>Hello,</Text>
//             <Text style={styles.username}>Mohamed</Text>
//           </View>
//           <View style={styles.headerIcons}>
//             <Icon name="notifications-outline" size={24} color="#fff" style={{ marginRight: 10 }} />
//             <Image source={{ uri: 'https://i.pravatar.cc/300' }} style={styles.avatar} />
//           </View>
//         </View>

//         {/* Banner */}
//         <Image source={require('../assets/images/banner.jpg')} style={styles.banner} />

//         {/* Upcoming Events */}
//         <View style={styles.sectionHeader}>
//           <Text style={styles.sectionTitle}>Upcoming Events</Text>
//           <TouchableOpacity>
//             <Text style={styles.seeAll}>See all</Text>
//           </TouchableOpacity>
//         </View>

//         <FlatList
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           data={upcomingEvents}
//           keyExtractor={item => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.card}>
//               <Image source={item.image} style={styles.eventImage} />
//               <Text style={styles.eventTitle}>{item.title}</Text>
//               <Text style={styles.eventDetails}>
//                 {item.date} • {item.location}
//               </Text>
//               <TouchableOpacity style={styles.interestBtn}>
//                 <Text style={styles.interestBtnText}>I'm Interested</Text>
//               </TouchableOpacity>
//             </View>
//           )}
//         />

//         {/* Past Events */}
//         <Text style={styles.sectionTitle}>Past Events</Text>
//         {pastEvents.map(item => (
//           <View key={item.id} style={styles.card}>
//             <Image source={item.image} style={styles.eventImage} />
//             <View style={styles.pastEventHeader}>
//               <Text style={styles.eventTitle}>{item.title}</Text>
//               <Text style={styles.checkedIn}>Checked In</Text>
//             </View>
//             <Text style={styles.eventDetails}>
//               {item.date} • {item.location}
//             </Text>
//           </View>
//         ))}
//       </ScrollView>

//       {/* Bottom Navigation */}
//       <View style={styles.bottomNav}>
//         <Icon name="home" size={24} color="#6a1b9a" />
//         <Icon name="calendar-outline" size={24} color="#999" />
//         <Icon name="person-outline" size={24} color="#999" />
//         <Icon name="menu-outline" size={24} color="#999" />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   header: {
//     backgroundColor: '#6a1b9a',
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     padding: 16,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   hello: { color: '#fff', fontSize: 14 },
//   username: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
//   headerIcons: { flexDirection: 'row', alignItems: 'center' },
//   avatar: { width: 35, height: 35, borderRadius: 18 },
//   banner: {
//     margin: 16,
//     height: 150,
//     borderRadius: 12,
//     resizeMode: 'cover',
//   },
//   sectionHeader: {
//     marginHorizontal: 16,
//     marginTop: 10,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//   },
//   sectionTitle: { fontSize: 18, fontWeight: '600', marginHorizontal: 16, marginTop: 20 },
//   seeAll: { color: '#6a1b9a', marginRight: 16 },
//   card: {
//     margin: 16,
//     backgroundColor: '#f9f9f9',
//     borderRadius: 12,
//     padding: 12,
//     width: 250,
//   },
//   eventImage: {
//     width: '100%',
//     height: 120,
//     borderRadius: 10,
//   },
//   eventTitle: {
//     fontSize: 16,
//     fontWeight: '600',
//     marginTop: 10,
//   },
//   eventDetails: {
//     color: '#777',
//     marginTop: 4,
//   },
//   interestBtn: {
//     backgroundColor: '#6a1b9a',
//     paddingVertical: 8,
//     marginTop: 10,
//     borderRadius: 8,
//     alignItems: 'center',
//   },
//   interestBtnText: {
//     color: '#fff',
//     fontWeight: 'bold',
//   },
//   pastEventHeader: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   checkedIn: {
//     backgroundColor: '#eee',
//     color: '#6a1b9a',
//     paddingHorizontal: 8,
//     paddingVertical: 2,
//     borderRadius: 12,
//     fontSize: 12,
//   },
//   bottomNav: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     padding: 12,
//     borderTopWidth: 1,
//     borderColor: '#eee',
//   },
// });

// export default App;


// //////////////////////////////////////////////////////

// import React from 'react';
// import { Alert, StyleSheet, Text, View, FlatList } from 'react-native';

// const LotsOfStyles = () => {

//     return (
//         <View style={styles.container}>
//             <Text style={styles.red} minimumFontScale={0.01}>just red</Text>
//             <Text style={styles.bigBlue} >just bigBlue</Text>
//             <Text style={[styles.bigBlue, styles.red]} onPress={() => Alert.alert('Alert Title', 'My Alert Msg')} selectable={false} >bigBlue, then red</Text>
//             <Text style={[styles.red, styles.bigBlue]} numberOfLines={1}>red, then bigBlue bigBlue bigBlue bigBlue bigBlue bigBlue</Text>
//             {/* <FlatList   */}
//         </View>
//     );
// };

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 50,
//         marginBottom: 10,
//         // justifyContent: 'center', //to center item inside container
//         alignItems: 'center', //to center item inside container
//     },
//     bigBlue: {
//         color: 'blue',
//         fontWeight: 'bold',
//         fontSize: 30,
//         paddingHorizontal: 16,
//         paddingTop: 10,
//     },
//     red: {
//         color: 'red',
//     },
// });
// export default function App() {
//     return LotsOfStyles()
// }

// //////////////////////////////////////////////////////
// import React, { useState, PropsWithChildren } from "react";
// import { Text, ScrollView, Image, TextInput, View, StyleSheet, TouchableOpacity } from "react-native";
// import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

// export default function App() {
//   const [text, onChangeText] = useState('Salma');
//   const [number, onChangeNumber] = useState('');
//   const logo = {
//     uri: 'https://reactnative.dev/img/tiny_logo.png',
//     width: 64,
//     height: 64,
//   };
//   const [flexDirection, setflexDirection] = useState('column');

//   return (
//     <>
//       <SafeAreaProvider style={styles.view}>
//         <ScrollView contentContainerStyle={styles.scrollViewContent}>
//           <h1>Edit app/index.tsx to edit this screen.</h1>
//           <Spacer height={32} />
//           <Text>Edit app/index.tsx to edit this screen.</Text>
//           <Spacer height={8} />
//           <SafeAreaView>
//             <TextInput
//               style={styles.input}
//               onChangeText={onChangeText}
//               value={text}
//             />
//             <TextInput
//               style={styles.input}
//               onChangeText={onChangeNumber}
//               value={number}
//               placeholder="Enter your number"
//               keyboardType="numeric"
//             />
//           </SafeAreaView>
//           <Spacer height={32} />
//           <View style={styles.row}>
//             <Image source={logo} />
//             <Image source={logo} />
//             <Image source={logo} />
//             <Image source={logo} />
//             <Image source={logo} />
//           </View>
//           <Spacer height={16} />
//           <Text style={{ fontSize: 16 }}>Scrolling down</Text>
//           <br />
//           <Text style={{ fontSize: 18 }}>What's the best</Text>
//           <br />
//           <Text style={{ fontSize: 20 }}>React Native</Text>

//           <PreviewLayout
//             label="flexDirection"
//             values={['column', 'row', 'column-reverse', 'row-reverse']}
//             selectedValue={flexDirection}
//             setSelectedValue={setflexDirection}>
//             <View style={[styles.box, { backgroundColor: 'powderblue' }]} />
//             <View style={[styles.box, { backgroundColor: 'skyblue' }]} />
//             <View style={[styles.box, { backgroundColor: 'steelblue' }]} />
//           </PreviewLayout>
//         </ScrollView>
//       </SafeAreaProvider>

//     </>

//   );
// }




// // Create a reusable Spacer component
// const Spacer = ({ height = 0, width = 0 }) => (
//   <View style={{ height, width }} />
// );

// type PreviewLayoutProps = PropsWithChildren<{
//   label: string;
//   values: string[];
//   selectedValue: string;
//   setSelectedValue: (value: string) => void;
// }>;

// const PreviewLayout = ({
//   label,
//   children,
//   values,
//   selectedValue,
//   setSelectedValue,
// }: PreviewLayoutProps) => (<ScrollView horizontal>
//   <View style={{ padding: 10 }}>
//     <Text style={styles.label}>{label}</Text>

//     <View style={styles.row}>
//       {values.map(value => (
//         <TouchableOpacity
//           key={value}
//           onPress={() => setSelectedValue(value)}
//           style={[styles.button, selectedValue === value && styles.selected]}>
//           <Text
//             style={[
//               styles.buttonLabel,
//               selectedValue === value && styles.selectedLabel,
//             ]}>
//             {value}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>

//     <View style={[styles.container, { [label]: selectedValue }]}>{children}</View>
//   </View>  </ScrollView>
// );

