import React from 'react';
import MainPage from './pages/MainPage'

export default function App() {
  let page = "main"
  switch(page) {
    case "main":
      return <MainPage />;
    default:
      return <MainPage />;
  }
}

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Workout Pal</Text>
//       <Text style={styles.todaysWorkout}>Today's Workout: Back Day</Text>
//       <View style={styles.rectangle} />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     flex: 1,
//     backgroundColor: '#181818',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//   },
//   header: {
//     color: '#f0d4d4',
//     paddingTop: '20%',
//     paddingHorizontal: '5%',
//     fontSize: 50,
//     textAlign: "center",
//   },
//   todaysWorkout: {
//     color: '#f0d4d4',
//     paddingHorizontal: '5%',
//     fontSize: 30,
//     paddingBottom: '15%',
//     textAlign: "center",
//   },
//   rectangle: {
//     backgroundColor: '#838383',
//     width: '80%',
//     height: '10%',
//   }
// });