import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';

function SelectionListView() {
  const userData = [
    {
      id: 1,
      name: 'Ramesh',
      data: ['javascript', 'python'],
    },
    {
      id: 2,
      name: 'Ramesh',
      data: ['javascript', 'python'],
    },
  ];

  return (
    <View>
      <Text style={styles.title}>Selection list from react-native</Text>
      <SectionList
        sections={userData}
        renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
        renderSectionHeader={({section: {name}}) => (
          <Text style={styles.header}>{name}</Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  title: {
    fontSize: 20,
    color: 'red',
    textAlign: 'center',
    marginBottom: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 5,
  },
  item: {
    marginLeft:10,
    fontSize: 16,
    padding: 5,
  },
});

export default SelectionListView;
