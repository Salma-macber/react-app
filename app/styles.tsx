import { StyleSheet } from 'react-native';
  const styles = StyleSheet.create({
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
    sizedBox24: {
        height: 24,
    },
    sizedBox16Horizontal: {
        width: 16,
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
    padding16: {
        paddingHorizontal: 16,
    },
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
    tabBarLabelStyle: {
      fontSize: 16,
      fontFamily: 'Georgia',
      fontWeight: 300,
    },
})


export default styles;




// export const styles = StyleSheet.create({
//     alternativeLayoutButtonContainer: {
//         margin: 20,
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//     },
//     scrollViewContent: {
//         // flexGrow: 1, // This ensures the ScrollView takes up all available space
//     },
//     container: {
//         flex: 1,
//         justifyContent: 'center', // Centers content vertically
//         alignItems: 'center',     // Centers content horizontally
//         padding: 20,
//     },
//     row: {
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         gap: 20, // This adds space between items (modern approach)
//     },
//     input: {
//         height: 44,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         backgroundColor: '#d58d9f',
//         borderRadius: 10,
//         // width: '80%',
//     },
//     button: {
//         paddingHorizontal: 8,
//         paddingVertical: 6,
//         borderRadius: 4,
//         backgroundColor: 'oldlace',
//         alignSelf: 'flex-start',
//         marginHorizontal: '1%',
//         marginBottom: 6,
//         // minWidth: '48%',
//         textAlign: 'center',
//     },
//     selected: {
//         backgroundColor: 'coral',
//         borderWidth: 0,
//     },
//     buttonLabel: {
//         fontSize: 12,
//         fontWeight: '500',
//         color: 'coral',
//     },
//     selectedLabel: {
//         color: 'white',
//     },
//     label: {
//         textAlign: 'center',
//         marginBottom: 10,
//         fontSize: 24,
//     },
//     box: {
//         width: 50,
//         height: 50,
//     },
//     view: {
//         flex: 1,
//         backgroundColor: '#e8b9c5',
//         justifyContent: "center",
//         alignItems: "center",
//     },
// }); 