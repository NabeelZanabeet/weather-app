import React from 'react';
import {
  View, Text, AppRegistry, StyleSheet, ScrollView
} from 'react-native';
import PlusIcon from '../icons/PlusIcon';

const NotesSection = props => (
  <View>
    <View style={styles.header}>
      <Text style={styles.section_title}>Notes</Text>
      <PlusIcon style={styles.plus_icon} size={30} color="#282828" />
    </View>
    <ScrollView style={styles.scroll_view}>
      {props.notes.map(note => (
        <Text key={note.id.toString()} style={styles.note}>
          {note.text}
        </Text>
      ))}
    </ScrollView>
  </View>
);

const styles = StyleSheet.create({
  scroll_view: {
    height: 200,
    marginBottom: 20
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    margin: 20,
    marginBottom: 30,
    justifyContent: 'center',
  },
  section_title: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
  },
  note: {
    fontSize: 10,
    padding: 10,
    textAlign: 'center',
    marginBottom: 10
  },
  plus_icon: {
    padding: 10,
    alignSelf: 'center'
  }
});

export default NotesSection;
AppRegistry.registerComponent('NotesSection', () => NotesSection);
