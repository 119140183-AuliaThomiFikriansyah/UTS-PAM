import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Modal, FlatList } from 'react-native';
import styles from '../style/Menu_Awal_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import  DateTimePicker from '@react-native-community/datetimepicker';
import {Pelabuhan, Pemesan, Pesanan} from '../database/data.js';

export default function Halaman_Utama({navigation}){
    // Modal Section
    const [modal,setModal] = useState(false);
    const [modal2,setModal2] = useState(false);
    const [modal3,setModal3] = useState(false);

    const [layanan,setLayanan] = useState('Pilih Layanan')
    const [awal,setAwal] = useState('Pilih Pelabuhan Awal');
    const [tujuan,setTujuan] = useState('Pilih Pelabuhan Tujuan');
    const [date,setDate] = useState(new Date());
    const [orang,setOrang] = useState();

    const [show,setShow] = useState(false);
    const [mode,setMode] = useState('date');
    const [dateText,setDateText] = useState('Tanggal Masuk');
    const [timeText,setTimeText] = useState('Jam Masuk');
    const onChange = (even, selectedDate) =>{
        if(mode=='date'){
            const currentDate = selectedDate || dateText;
            setShow(false);
            if(currentDate!=dateText){
                setDate(currentDate);
                let temp = new Date(currentDate);
                let fDate = temp.getDate() + '/' + (temp.getMonth()+1) + '/' + temp.getFullYear();
                setDateText(fDate);
            }
        }
        else if(mode == 'time'){
            const currentDate = selectedDate || timeText;
            setShow(false);
            if(currentDate!=timeText){
                setDate(currentDate);
                let temp = new Date(currentDate);
                let fTime = temp.getHours() + '.' + temp.getMinutes();
                setTimeText(fTime);
            }
        }
    };
    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    }
    const showDatePicker = () => {
        showMode('date');
    }
    const showTimePicker = () => {
        showMode('time');
    }

    return(
        <SafeAreaView style={styles.container}>

            {/* Batas Header - Body */}
            <ScrollView style={styles.scrollView}>
                <View style={styles.body}>
                    <View style={styles.content_container}>
                        <Text style={[{color:'#00579C', fontWeight:'bold', fontSize:30, lineHeight:35, marginBottom:50, textAlign:'center', marginTop:10}]}>
                            Kapalzy
                        </Text>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'1A132F', fontSize:17, lineHeight:19,}]}>
                                Keberangkatan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="ship" size={24} color="#00579C" />

                                <TouchableOpacity style={styles.touchableContainer} onPress={()=> setModal(!modal)}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19}]}>
                                        {awal}
                                    </Text>
                                    
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'1A132F', fontSize:17, lineHeight:19,}]}>
                                Tujuan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="ship" size={24} color="#00579C" />
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=> setModal2(!modal2)}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19}]}>
                                        {tujuan}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'1A132F', fontSize:17, lineHeight:19,}]}>
                                Kelas Layanan
                            </Text>
                            <View style={styles.input_container2}>
                            <Ionicons name="people" size={24} color="#00579C" />
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=> setModal3(!modal3)}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19}]}>
                                        {layanan}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <Text style={[{color:'1A132F', fontSize:17, lineHeight:19,}]}>
                                Jadwal Masuk Pelabuhan
                            </Text>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="calendar" size={24} color="#00579C"/>
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=>{showDatePicker()}}>
                                    <Text style={[{color:'black', fontSize:14, lineHeight:19}]}>
                                        {dateText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.input_container1}>
                            <View style={styles.input_container2}>
                            <FontAwesome5 name="clock" size={24} color="#00579C" />
                                <TouchableOpacity style={styles.touchableContainer} onPress={()=>{showTimePicker()}}>
                                    <Text style={[{color:'00579C', fontSize:14, lineHeight:19}]}>
                                        {timeText}
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        {show && (
                            <DateTimePicker testID='dateTimePicker'
                            value={date}
                            mode={mode} is24Hour={true}  onChange={onChange} on/>
                        )}
                        <View style={styles.juml}>
                            <Text >Dewasa</Text>
                            <View style={[{flexDirection:'row'}]}>
                                <TextInput placeholder={'1'}  style={[{marginRight:3, fontWeight:'bold'}]} onChangeText={(val)=>setOrang(val)}/>
                                <Text >Orang</Text>
                            </View>      
                        </View>
                        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('Menu Konfirmasi Pesanan',{Awal:awal,Tujuan:tujuan,Layanan:layanan,Tanggal:dateText,Jam:timeText,Orang:orang, Harga:layanan})}>
                            <AntDesign name="search1" size={24} color="#1A132F" />
                            <Text style={[{color:'1A132F', fontSize:18, lineHeight:15,fontWeight:'bold'}]}>
                                CARI JADWAL
                            </Text>
                        </TouchableOpacity>
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
                                    <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                        PILIH PELABUHAN AWAL
                                    </Text>
                                </View>
                                <View style={[{padding:20,}]}>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Bakauheni, Lampung')}}>
                                        <Text style={[{ fontSize:11 }]}>
                                            Lampung
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Bakauheni
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Merak, Banten')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Banten
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Merak
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Tanjung Mas, Semarang')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Semarang
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Tanjung Mas
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Kalimas, Surabaya')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Surabaya
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Kalimas
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Dwikora Harbour, Pontianak')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Pontianak
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Dwikora Harbour
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
                                    <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                        PILIH PELABUHAN TUJUAN
                                    </Text>
                                </View>
                                <View style={[{padding:20,}]}>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal2(!modal2); setTujuan('Bakauheni, Lampung')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Lampung
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Bakauheni
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal2(!modal2); setTujuan('Merak, Banten')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Banten
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Merak
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Tanjung Mas, Semarang')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Semarang
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Tanjung Mas
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Kalimas, Surabaya')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Surabaya
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Kalimas
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal(!modal); setAwal('Dwikora Harbour, Pontianak')} }>
                                        <Text style={[{ fontSize:11 }]}>
                                            Pontianak
                                        </Text>
                                        <Text style={[{ fontSize:16 }]}>
                                            Dwikora Harbour
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modal3}
                        onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                        setModal3(!modal3);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <View style={styles.modalHeader}>
                                    <Text style={[{color:'#FFF', textAlign:'center', fontSize:13, marginLeft:100, marginRight:100, fontWeight:'bold'}]}>
                                        PILIH LAYANAN
                                    </Text>
                                </View>
                                <View style={[{padding:20,}]}>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal3(!modal3); setLayanan('Express')} }>
                                        <Text style={[{ fontSize:16 }]}>
                                            Express
                                        </Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[{marginBottom:15,}]} onPress={() => {setModal3(!modal3); setLayanan('Reguler')} }>
                                        <Text style={[{ fontSize:16 }]}>
                                            Reguler
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
            </ScrollView>
        </SafeAreaView>
    );
}