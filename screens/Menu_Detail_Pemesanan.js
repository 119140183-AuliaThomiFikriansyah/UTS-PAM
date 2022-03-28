import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal } from 'react-native';
import styles from '../style/Menu_Detail_Pemesanan_Style';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Menu_Detail_Pemesanan({navigation,route}){
    const [awal,setAwal] = useState(route.params.Awal);
    const [tujuan,setTujuan] = useState(route.params.Tujuan);
    const [tanggal,setTanggal] = useState(route.params.Tanggal);
    const [jam,setJam] = useState(route.params.Jam);
    const [layanan,setLayanan] = useState(route.params.Layanan);
    const [orang,setOrang] = useState(route.params.Orang);
    const [harga,setHarga] = useState(route.params.Harga);

    //Modal
    const [modal,setModal] = useState(false);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                
            </View>
            <ScrollView style={styles.body}>
                <View style={styles.content_container}>
                    <Text style={[{color:'#00579C', fontWeight:'bold', fontSize:30, lineHeight:35, marginBottom:40, textAlign:'center', marginTop:10}]}>
                        Kapalzy
                    </Text>
                    <Text style={[{color:'black', fontWeight:'bold', fontSize:16, marginBottom:10}]}>
                        Informasi Pemesanan
                    </Text>
                    <View style={styles.summaryContainer}>
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
                    <Text style={[{color:'black', fontWeight:'bold', fontSize:16, textAlign:'left'}]}>
                        Data Pemesan
                    </Text>
                    <View style={styles.input_container1}>
                        <Text style={[{fontSize:12, lineHeight:12}]}>
                            Nama Lengkap
                        </Text>
                        <TextInput style={styles.textInput} placeholder={'Fulan Ahmad'}>

                        </TextInput>
                    </View>
                    <View style={styles.input_container1}>
                        <Text style={[{fontSize:12, lineHeight:12}]}>
                            Identitas
                        </Text>
                        <TextInput style={styles.textInput} placeholder={'Laki-laki'}>

                        </TextInput>
                    </View>
                    <View style={styles.input_container1}>
                        <Text style={[{fontSize:12, lineHeight:12}]}>
                            Umur
                        </Text>
                        <TextInput style={styles.textInput} placeholder={'15 Tahun'}>

                        </TextInput>
                    </View>

                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.buttonSubmit} onPress={()=> setModal(!modal)}>
                        {/* ()=>navigation.navigate('Menu Detail Pemesanan') */}
                            <Text style={[{color:'#FFF', fontSize:19, lineHeight:19, fontWeight:'bold'}]}>
                                Submit
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
                                Pembayaran
                            </Text>
                        </View>
                        <View style={[{padding:20,}]}>
                            <Text style={[{fontWeight:'bold', textAlign:'center'}]}>
                                SILAHKAN TRASNFER KE REK
                            </Text>
                            <Text style={[{fontWeight:'bold', textAlign:'center'}]}>
                                0913396948
                            </Text>
                            <View style={[{flexDirection:'row', alignSelf:'center', marginTop:10}]}>
                                <Text style={[{fontWeight:'bold'}]}>
                                    BANK
                                </Text>
                                <Text style={[{marginLeft:2, fontWeight:'bold'}]}>
                                    BNI
                                </Text>
                            </View>
                            <TouchableOpacity style={[{backgroundColor:'#00579C', borderRadius:5, width:100, padding:5, alignSelf:'center', marginTop:10}]} onPress={()=>navigation.navigate('Daftar Pemesanan',{Awal:awal,Tujuan:tujuan,Tanggal:tanggal,Jam:jam,Layanan:layanan,Orang:orang,Harga:harga})}>
                                <Text style={[{color:'#FFF', textAlign:'center', fontWeight:'bold'}]}>
                                    Selesai
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}
