import React, { Component } from 'react';
import {
  View, Text, AppRegistry, StyleSheet, ScrollView, TouchableHighlight, TextInput
} from 'react-native';
import PlusIcon from '../icons/PlusIcon';

export default class NotesSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputtext: ''
    };
  }

  render() {
    const { notes, addNote } = this.props;
    const { inputtext } = this.state;
    return (
      <View>
        <Text style={styles.section_title}>Notes</Text>
        <TextInput
          style={styles.text_input}
          placeholder="Type a note .."
          onChangeText={(text) => this.setState({ inputtext: text })}
          value={inputtext}
        />
        <TouchableHighlight
          underlayColor="white"
          style={styles.plus_icon}
          onPress={() => { if (inputtext) { addNote(inputtext); } }}
        >
          <PlusIcon size={30} color="#282828" />
        </TouchableHighlight>

        <ScrollView style={styles.scroll_view}>
          {notes.map(note => (
            <Text key={note.id.toString()} style={styles.note}>
              {note.text}
            </Text>
          ))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll_view: {
    height: 150,
    marginBottom: 20
  },
  section_title: {
    fontSize: 15,
    color: 'black',
    alignSelf: 'center',
    marginBottom: 10
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
  },
  text_input: {
    height: 40,
    width: 250,
    borderColor: 'gray',
    borderWidth: 1,
    alignSelf: 'center'
  }
});

AppRegistry.registerComponent('NotesSection', () => NotesSection);
