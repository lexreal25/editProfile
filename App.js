import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import coder from './assets/coder.jpg'
import { AntDesign, Entypo } from '@expo/vector-icons'



export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.headerWrapper}>
        <Text style={styles.text}>Edit Profile</Text>
      </View>

      <View style={styles.imageWrapper}>
        <Image source={coder} style={styles.thumb} />
        <View style={styles.cameraWrapper}>
          <AntDesign style={styles.camera} name='camera' size={20} color='#fff' />
        </View>
        
      </View>

      <View style={styles.details}>
        <View style={styles.detailsWrapper}>
          <Text style={styles.detailsLabel}>School</Text>
          <TextInput style={styles.textInput}
            underlineColorAndroid='transparent'
            editable= {true}
            placeholder='enter school name'
            placeholderTextColor='#0c0003'
          />
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.detailsLabel}>Email Address</Text>
          <TextInput style={styles.textInput}
            underlineColorAndroid='transparent'
            editable= {true}
            keyboardType='email-address'
            placeholder='email address'
            placeholderTextColor='#0c0003'
          />
        </View>
        <View style={styles.detailsWrapper}>
          <Text style={styles.detailsLabel, styles.color}>Name</Text>
          <TextInput style={styles.textInput}
            underlineColorAndroid='transparent'
            editable= {true}
            placeholder='enter name'
            placeholderTextColor='#0c0003'
          />
        </View>
       
        <View style={styles.detailsWrapper}>
          <Text style={styles.detailsLabel, styles.color}>Nick Name</Text>
          <TextInput style={styles.textInput}
            underlineColorAndroid='transparent'
            editable= {true}
            placeholder='enter nick name'
            placeholderTextColor='#0c0003'
          />
        </View>
        
        <View style={styles.detailsWrapper}>
          <Text style={styles.detailsLabel, styles.color}>Emergency Contact</Text>
          <TextInput style={styles.textInput}
            underlineColorAndroid='transparent'
            keyboardType= 'numeric'
            editable= {true}
            placeholder='enter contact'
            placeholderTextColor='#0c0003'
          />
          <Entypo style={styles.phone} name= 'phone' size={24} color='silver' />
        </View>

        <View style={styles.detailsWrapper}>
          <Button style={styles.button}
            color= '#68BBE3' //'#ADD8E6' //'#996600' 
           // style={styles.buttonText}  
            title="UPDATE PROFILE" 
           onPress= {() => Alert.alert('no functionalities added yet')}
          />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    margin: 5
   // alignItems: 'center',
    //justifyContent: 'center',
  },
  headerWrapper: {
    flex: 0.45,
    marginVertical: 17,
    borderBottomWidth: 3,
    borderBottomColor: 'silver'
  },
  text: {
    textAlign: 'center',
    fontSize: 15,
    fontStyle: 'normal',
    fontWeight: 'normal'
  },
  thumb: {
    width:170,
    height: 170,
    alignSelf: 'center',
    borderRadius: 100
  },
  details: {
 //   backgroundColor: '#0c0003',
    alignSelf: 'flex-start',
    marginTop: 20,
    marginHorizontal:35,
    width: 280
  }, 
  detailsLabel: {
    marginTop: 10,
    color: 'grey',
    fontSize: 15
  },
  detailsWrapper: {
    margin: 8,
  },
  color: {
    color: '#68BBE3',
    fontSize: 15
  },
  textInput: {
    borderBottomWidth: 2,
    borderBottomColor: 'silver',
    fontStyle:'normal',
    fontSize: 16
  },
  button: {
    borderRadius: 2
  //   height: 50,
  //   fontStyle: 'normal'
  },
  cameraWrapper: {
    position: 'absolute',
    top: 125,
    left: 225,
    backgroundColor:'#68BBE3',
    width:30,
    height: 30,
    borderRadius:100
  },
  camera: {
    alignSelf: 'center',
    margin:5
  },
  phone: {
    position: 'absolute',
    top: 27,
    left: 240,
    fontSize: 16
  }
});
