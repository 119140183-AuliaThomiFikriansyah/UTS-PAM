import React, {useState, Component} from 'react';
import { Text, View, Button, TextInput, SafeAreaView, TouchableOpacity,ScrollView, Image } from 'react-native';
import styles from '../style/Daftar_Pembatalan_Style.js';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Daftar_Pembatalan({navigation,route}){
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
                </View>
            </SafeAreaView>
        );

    }
    catch{
        return(
            <SafeAreaView style={styles.container}>
                <Image
                    source={require('../assets/tiket.png' )}
                    style={{ width:150, height:150, alignSelf:'center', marginBottom:10 }}
                    />
                <Text style={[{fontSize:19, fontWeight:'bold', color:'#00579C', textAlign:'center', }]}>
                    Tidak ada Aktivitas Pembatalan Tiket
                </Text>
                
            </SafeAreaView>
        );
    };
}
