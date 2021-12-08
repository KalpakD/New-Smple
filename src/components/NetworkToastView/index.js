import React, {useEffect, useState} from 'react';
import {View, Text, Modal, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import NetInfo from '@react-native-community/netinfo';
import styles from './styles';

const ToastView = () => {
  const [isNetworkAvailable, setNetworkAvailable] = useState(true);
  useEffect(() => {
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
      setNetworkAvailable(state.isConnected && state.isInternetReachable);
    });
    return () => unsubscribe();
  }, []);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!isNetworkAvailable}>
      <SafeAreaView style={styles.centeredView}>
        <View style={styles.modalView}>
          <Image
            source={require('../../images/information.png')}
            style={styles.image}
          />
          <Text style={styles.modalText}>
            Please check your internet connection
          </Text>
        </View>
      </SafeAreaView>
    </Modal>
  );
};

export default ToastView;
