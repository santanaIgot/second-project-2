import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, StyleSheet, Text, View,TextInput, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const[modalVisible, setModalVisible] = useState(false)
  const [speed, setSpeed] = useState(0)
  const [time, setTime] = useState(0)
  const [distance, setDistance] = useState(0);



  function calcOfDistance() {
    setDistance(speed * time)
  }

  return (
    <View style={styles.container}>
      <Modal
        animationType='slice'
        transparent={true}
        visible={modalVisible}
        onRequestClose={()=>{setModalVisible(!modalVisible)}}
      >
          <View style={[styles.container, {backgroundColor :'lightseagreen'}]}>
              <Text>Exemplo modal</Text>
              <Text>Time</Text>
                <TextInput
                placeholder="set your time in hours"
                style={styles.input}
                value={time}
                placeholderTextColor='#999'
                onChangeText={(e) => setTime(e)}
                />

          <Text>Speed:</Text>
                <TextInput
                style={styles.input}
                placeholder="set your speed in KM"
                value={speed}
                placeholderTextColor='#999'
                onChangeText={(e) => setSpeed(e)}
                />

              <Button
                      style={styles.button}
                      title = 'Calc'
                      onPress={()=>calcOfDistance()}
                    />


<Text style={styles.button}>Distance: {distance}</Text>
              <TouchableOpacity
                onPress={()=> setModalVisible(!modalVisible)}>
                <Text>
                    Fechar
                </Text>
              </TouchableOpacity>
              
          </View>
      </Modal>
      <TouchableOpacity onPress={()=> setModalVisible(!modalVisible)}>
        <Text> clique para abrir modal</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
