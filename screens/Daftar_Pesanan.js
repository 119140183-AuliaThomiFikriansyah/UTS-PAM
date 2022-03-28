import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal } from 'react-native';
import styles from '../style/Daftar_Pesanan_Style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Daftar_Pesanan({navigation,route}){
    try{
        const [awal,setAwal] = useState(route.params.Awal);
        const [tujuan,setTujuan] = useState(route.params.Tujuan);
        const [tanggal,setTanggal] = useState(route.params.Tanggal);
        const [jam,setJam] = useState(route.params.Jam);
        const [layanan,setLayanan] = useState(route.params.Layanan);
        const [orang,setOrang] = useState(route.params.Orang);
        const [harga,setHarga] = useState(route.params.Harga);

        const [modal,setModal] = useState(false);

        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity onLongPress={()=> setModal(!modal)}>
                        <View style={styles.content_container}>
                            <View style={styles.travelRoute}>
                                <Text style={[{fontWeight:'bold', fontSize:15, marginRight:50}]}>
                                    {JSON.stringify(awal).replace(/"/g, '')}
                                </Text>
                                <Entypo name="arrow-right" size={24} color="black" />
                                <Text style={[{fontWeight:'bold', fontSize:15, marginLeft:50}]}>
                                    {JSON.stringify(tujuan).replace(/"/g, '')}
                                </Text>
                            </View>
                            <View style={styles.travelSchedule}>
                                <Text style={[{fontWeight:'bold', fontSize:12}]}>
                                    Jadwal Masuk Pelabuhan
                                </Text>
                                <Text style={[{fontSize:12}]}>
                                    {JSON.stringify(tanggal).replace(/"/g, '')}
                                </Text>
                                <Text style={[{fontSize:12}]}>
                                    {JSON.stringify(jam).replace(/"/g, '')} WIB
                                </Text>
                            </View>
                            <View style={styles.travelService}>
                                <Text style={[{fontWeight:'bold', fontSize:12}]}>
                                    Layanan
                                </Text>
                                <Text style={[{fontSize:12}]}>
                                    {JSON.stringify(layanan).replace(/"/g, '')}
                                </Text>
                            </View>
                            <View style={styles.line}></View>
                            <View style={styles.result}>
                                <Text>
                                    Dewasa x {JSON.stringify(orang).replace(/"/g, '')}
                                </Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    
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
                                        <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                            Batalkan Pemesanan?
                                        </Text>
                                    </View>
                                    <View style={[{padding:20,flexDirection:'row', alignContent:'center', justifyContent:'center'}]}>
                                        <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#EE9E54', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={() => {setModal(!modal)}}>
                                            <Text style={[{ fontSize:15 }]}>
                                                Tidak
                                            </Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={[{marginBottom:15, backgroundColor:'#EE9E54', borderRadius:5, elevation:5, padding:12, margin:10,}]} onPress={()=>navigation.navigate('Daftar Pembatalan',{Awal:awal,Tujuan:tujuan,Tanggal:tanggal,Jam:jam,Layanan:layanan,Orang:orang,Harga:harga})}>
                                            <Text style={[{ fontSize:15, marginLeft:7,marginRight:7, }]}>
                                                Ya
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </Modal>
                </View>
            </SafeAreaView>
        );

    }
    catch{

        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.body}>
                    <TouchableOpacity >
                        <View style={styles.content_container}>
                            <Text style={[{textAlign:'center'}]}>
                                Belum Ada Riwayat Pesanan
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }
    
}
