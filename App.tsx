

// import React from 'react';
import { View, Text, Button, StyleSheet, StatusBar } from 'react-native';
import CompanyData from './component/CompanyData';
import Input from './component/Input';
import ReactForm from './component/ReactForm';
import ReactNativeList from './component/ReactNativeList';
import ListMapFunc from './component/ListMapFunc';
import GridView from './component/GridView';
import SelectionListView from './component/SelectionList';
import ClassComponent from './component/ClassComponent';
import Responsive from './component/Responsive';
import StyleButton from './component/StyleButton';
import RadioButton from './component/RadioButton';
import DynamicRadio from './component/DynamicRadio';
import Loader from './component/Loader';
import Modal from './component/Modal';
import Pressable from './component/Pressable';
import StatusBars from './component/StatusBar';
import OsCheck from './component/OsCheck';
import MyWebComponent from './component/WebView';
import CustomModal from './component/CustomModal';
import StackNav from './component/StackNav';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
const Stack = createNativeStackNavigator()


const Home = (props: any) => {
  return (
    <View>
      <Text >Home screen</Text>
      <Button title='Go to Login page' onPress={() => props.navigation.navigate("Login",{name:"Ramesh Banakar",age:24})} />
    </View>
  );
};

const LogIn = (props: any) => {
  return (
    <View>
      <Text >Login screen</Text>
      <Button title='Go to Home page' onPress={() => props.navigation.navigate("Home")} />
    </View>
  );
};

function App(): React.JSX.Element {
  const lefttClick = () => {
    console.warn("left click")
  }
  return (

    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        title: "Home page",
        headerStyle: {
          backgroundColor: "orange"
        },
        headerTitleStyle: {
          fontSize: 10
        }
      }}>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <Button title='left' onPress={lefttClick} />, headerRight: () => <Button title='right' onPress={() => console.warn("right click")} /> }} />
        <Stack.Screen name="Login" component={Loader} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
const style = StyleSheet.create({
  someStyle: {
    fontSize: 30
  }
})



export default App;



// {/* <CompanyData />
//       <Text style={style.someStyle}>hello world</Text>
//       <Button title='press here' onPress={hello}></Button>
//       <Input /> */}
// {/* <ReactForm/> */ }
// {/* <ReactNativeList/> */ }
// {/* <ListMapFunc/> */ }
// {/* <GridView/> */ }
// {/* <SelectionListView /> */ }
// {/* <ClassComponent/> */ }
// {/* <Responsive/> */ }
// {/* <StyleButton/> */ }
// {/* <RadioButton/> */ }
// {/* <DynamicRadio/> */ }
// {/* <Loader/> */ }
// {/* <Modal/> */ }
// {/* <Pressable/> */ }
// {/* <StatusBars /> */ }
// {/* <OsCheck/> */ }
// {/* <MyWebComponent /> */ }
// {/* <CustomModal/> */ }