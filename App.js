import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Modal, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';

export default function App() {

  const[modalVisible, setModalVisible] = useState(false)


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
