import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal, Image} from 'react-native';
import styles from '../style/Lainnya_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Lainnya({navigation}){
    const [modal,setModal]= useState(false);
    const [modal2,setModal2] = useState(false);

    return(
        <View style={[{marginTop:20}]}>
            <View style={[{ marginTop:20, padding:10, alignContent:'center', justifyContent:'center'}]}>
                <View style={[{flexDirection:'row', alignContent:'center', justifyContent:'center',marginTop:25}]}>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]} onPress={()=> setModal(!modal)}>
                            <Image
                                source={require('../assets/profil.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center'}]}>
                                Detail Profile
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
                <View style={[{flexDirection:'row', alignContent:'center', justifyContent:'center',marginTop:25}]}>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]} onPress={()=> setModal2(!modal2)}>
                            <Image
                                source={require('../assets/hubungi.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center'}]}>
                                Hubungi Kami
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]}  onPress={()=>navigation.navigate('Daftar Pesanan')}>
                            <Image
                                source={require('../assets/history.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center'}]}>
                                Riwayat Pesanan
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[{width:180, alignContent:'center', justifyContent:'center', margin:3}]}>
                        <TouchableOpacity style={[{padding:30, borderColor:'black', elevation:1, borderRadius:5}]} onPress={()=>navigation.navigate('Beranda')}>
                            <Image
                                source={require('../assets/hd-tickets-49018.png' )}
                                style={{ width:50, height:50, alignSelf:'center', marginBottom:10 }}
                            />
                            <Text style={[{textAlign:'center'}]}>
                                Pesan Tiket
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal(!modal);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={[{color:'#FFF', textAlign:'center', fontSize:20, marginLeft:100, marginRight:100}]}>
                                Aulia Thomi Fikriansyah - NIM 119140183
                            </Text>
                        </View>
                        <View style={[{padding:20,flexDirection:'row', alignContent:'center', justifyContent:'center'}]}>
                            <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#61A4BC', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={() => {setModal(!modal)}}>
                                <Text style={[{ fontSize:15 }]}>
                                    Kembali
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modal2}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModal2(!modal2);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={styles.modalHeader}>
                            <Text style={[{color:'#FFF', textAlign:'center', fontSize:20, marginLeft:100, marginRight:100}]}>
                                Teknik Informatika
                            </Text>
                        </View>
                        <View style={[{padding:20,flexDirection:'row', alignContent:'center', justifyContent:'center'}]}>
                            <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#61A4BC', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={() => {setModal2(!modal2)}}>
                                <Text style={[{ fontSize:15 }]}>
                                    OK
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}