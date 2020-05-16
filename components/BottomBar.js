import React from 'react';
import { StyleSheet, View, TouchableHighlight, Dimensions, Image } from 'react-native';
import settings from '../assets/Settings.png';
import chart from '../assets/Chart.png';
import home from '../assets/Home.png';
import person from '../assets/Person.png';
import calendar from '../assets/Calendar.png';

const Button = (props) => {
  const here = props.currPage === props.id;
  return (
    <View style={styles.ButtonContainer}>
      <TouchableHighlight
        underlayColor="#666666"
        style={[
          styles.BottomButton,
          {
            backgroundColor: here ? '#666666' : '#444444'
          }
        ]}
        onPress={() => props.setPage(props.id)}>
        <Image source={props.img} style={styles.ButtonImg} />
      </TouchableHighlight>
    </View>
  );
};

export default function BottomBar(props) {
  return (
    <View style={styles.BottomBarContainer}>
      <Button img={settings} id="appSettings" setPage={props.setPage} currPage={props.currPage} />
      <Button img={calendar} id="calendar" setPage={props.setPage} currPage={props.currPage} />
      <Button img={home} id="main" setPage={props.setPage} currPage={props.currPage} />
      <Button img={person} id="userSettings" setPage={props.setPage} currPage={props.currPage} />
      <Button img={chart} id="stats" setPage={props.setPage} currPage={props.currPage} />
    </View>
  );
}

const styles = StyleSheet.create({
  BottomBarContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  BottomButton: {
    backgroundColor: '#444444',
    width: Dimensions.get('window').width / 5,
    height: Dimensions.get('window').width / 5,
    paddingBottom: 20
  },
  ButtonImg: {
    resizeMode: 'cover',
    flex: 2,
    alignSelf: 'center',
    width: '70%',
    height: '50%'
  }
});
