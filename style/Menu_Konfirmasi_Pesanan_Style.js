import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        padding:20,
      },
      body: {
        flex:1,
        backgroundColor: '#F2F2F2',
      },
      
  
      content_container: {
        backgroundColor: '#FFF',
        borderRadius:8,
        elevation: 5,
        padding:20,
      },

      summaryContainer:{
        backgroundColor:'#F0F0F0',
        elevation: 5,
        padding:20,
        borderRadius:5,
        marginTop:10,
        marginBottom:20,
      },

      travelRoute:{
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
      },

      travelSchedule:{
        marginTop:18,
      },

      travelService:{
        marginTop:15,
      },

      line:{
          borderBottomColor:'black',
          borderBottomWidth:1,
          marginTop:10,
          marginBottom:20,
      },
      
      endPrice:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
      },
      buttonContainer:{
       flexDirection:'row',
       paddingLeft:5,
       paddingRight:5,
       alignContent:'center',
       justifyContent:'center',
      },
      result:{
        flexDirection:'row',
        alignContent:'center',
        justifyContent:'center',
      },

      buttonKembali:{
        margin:15,
        marginRight:20,
        padding:10,
        flexDirection:'row',
        backgroundColor:'#FFF',
        borderColor:'#00579C',
        borderWidth:2,
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        width:145,
      },

      buttonLanjutkan:{
        margin:15,
        marginLeft:20,
        padding:10,
        flexDirection:'row',
        backgroundColor:'#00579C',
        borderColor:'#00579C',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        width:145,
      }
});
export default styles;