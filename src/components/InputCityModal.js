import React from 'react';
import {
  View, Text, AppRegistry, Button, StyleSheet, ScrollView, TouchableHighlight, Modal
} from 'react-native';
import { AVILABLE_CITY_LIST } from '../ApiConfig';

const filterAddedCities = (AvilableCities, addedCities) => (
  AvilableCities.filter(f => !addedCities.some(el => f.name === el.name))
);

const InputCityModal = props => {
  const {
    modalVisible, cities, addCity, setModalVisible
  } = props;
  const InputCities = filterAddedCities(AVILABLE_CITY_LIST, cities);
  return (
    <Modal
      animationType="none"
      transparent
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}
    >
      <View style={styles.modal_container}>
        <View style={styles.modal_content}>
          <View style={styles.scroll_container}>
            <ScrollView>
              {InputCities.length
                ? InputCities.map(city => (
                  <TouchableHighlight
                    key={city.id.toString()}
                    style={styles.content_item}
                    underlayColor="white"
                    onPress={() => {
                      addCity(city.id);
                      setModalVisible(false);
                    }}
                  >
                    <Text style={styles.city_name}>{city.name}</Text>
                  </TouchableHighlight>
                ))
                : <Text style={styles.city_name}>No More Cities</Text>
              }
            </ScrollView>
          </View>
          <View style={styles.close_btn}>
            <Button
              title="Close"
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal_container: {
    top: 250,
    alignSelf: 'center',
  },
  modal_content: {
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC'
  },
  scroll_container: {
    height: 250
  },
  content_item: {
    padding: 5
  },
  city_name: {
    width: 150,
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
    margin: 10
  },
  close_btn: {
    width: 100,
    margin: 15,
    justifyContent: 'center',
    alignSelf: 'center'
  }
});

export default InputCityModal;
AppRegistry.registerComponent('InputCityModal', () => InputCityModal);
