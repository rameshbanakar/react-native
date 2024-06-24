

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
function App(): React.JSX.Element {
  const hello=()=>{
    console.warn("button pressed")
  }
  return (
    <View>
      {/* <CompanyData />
      <Text style={style.someStyle}>hello world</Text>
      <Button title='press here' onPress={hello}></Button>
      <Input /> */}
      {/* <ReactForm/> */}
      {/* <ReactNativeList/> */}
      {/* <ListMapFunc/> */}
      {/* <GridView/> */}
      {/* <SelectionListView /> */}
      {/* <ClassComponent/> */}
      {/* <Responsive/> */}
      {/* <StyleButton/> */}
      {/* <RadioButton/> */}
      {/* <DynamicRadio/> */}
      {/* <Loader/> */}
      {/* <Modal/> */}
      {/* <Pressable/> */}
      {/* <StatusBars /> */}
      {/* <OsCheck/> */}
       {/* <MyWebComponent /> */}
       <CustomModal/>
    </View>
  );
}
const style=StyleSheet.create({
  someStyle:{
    fontSize:30
  }
})



export default App;
