// import React from "react";
// import { View, Text, StyleSheet } from "react-native";

// export default function Services() {
//   return (
//     <View style={Styles.container}>
//       <View style={Styles.row}>
//         <Text style={Styles.serfont}>item 1</Text>
//       </View>
//       <View style={Styles.row}>
//         <Text style={Styles.seeAll}>item 2</Text>
//       </View>
//       <View style={Styles.row}>
//         <Text style={Styles.latest}>item 3</Text>
//       </View>
//     </View>
//   );
// }

// const Styles = StyleSheet.create({
//   container: {
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   row: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     marginVertical: 0,
//   },
//   serfont: {
//     textTransform: "capitalize",
//     fontWeight: "bold",
//     fontSize: 16,
//   },
//   latest:{
//     textTransform:'capitalize',
//     fontSize:12
//   },
//   seeAll: {
//     textTransform: "capitalize",
//     fontSize: 12,
//     padding:10,
//     marginTop:10
//   },
// });


import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Services() {
  return (
    <View style={Styles.container}>
      <View style={Styles.row}>
        <View style={Styles.cell1}>
          <Text style={Styles.serfont}>Our Available Services</Text>
        </View>
        <View style={Styles.cell2}>
          <Text style={Styles.latest}>Item 3</Text>
        </View>
      </View>
      <View style={Styles.row}>
       
        <View style={Styles.cell2}>
          <Text style={Styles.seeAll}>item 3</Text>
        </View>
      </View>
      <View style={Styles.row}>
        <View style={Styles.cell2}>
          <Text style={Styles.seeAll}>Check our latest service list update</Text>
        </View>
      </View>
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin:5
  },
  cell1: {
    flex: 1,
  },
  cell2: {
    flex: 1,
  },
  serfont: {
    textTransform: "capitalize",
    fontWeight: "bold",
    fontSize: 16,
  },
  latest: {
    textTransform: "capitalize",
    fontSize: 12,
  },
  seeAll: {
    textTransform: "capitalize",
    fontSize: 12,
    padding: 10,
  },
});


