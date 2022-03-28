import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        // marginTop: StatusBar.currentHeight,
        padding:20,
        // backgroundColor:"#F2F2F2",
      },
      scrollView:{
        // backgroundColor: '#FFF',
        // borderRadius:20,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
        // elevation: 5,
      },
  
      header: {
        // flexDirection: 'row',
        // marginTop: 25,
        // justifyContent: 'space-between',
        // height:50,
        // backgroundColor: '#464E2E',
        // padding:5,
      },
  
      body: {
        flex:1,
        // alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#F2F2F2',
      },
      
  
      content_container: {
        backgroundColor: '#FFF',
        borderRadius:8,
        // shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 4,
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
      
      buttonContainer:{
       flexDirection:'row',
       paddingLeft:5,
       paddingRight:5,
       alignContent:'center',
       justifyContent:'center',
      },
      input_container1:{
        marginTop:10,
      },
      buttonSubmit:{
        margin:15,
        marginRight:20,
        padding:13,
        flexDirection:'row',
        backgroundColor:'#00579C',
        borderRadius:4,
        alignItems:'center',
        justifyContent:'center',
        width:250,

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
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        
      },
      modalView: {
        margin: 20,
        backgroundColor: "#C4C4C4",
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        
      },
      modalHeader:{
        backgroundColor:'#00579C',
        padding:10,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
      },
      button1: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        width:100,
        alignSelf:'center',
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      },
      textInput: {
        paddingLeft:10,
        width:300,
        height:37,
        padding: 8,
        borderRadius:4,
        margin: 10,
        elevation:3,
        backgroundColor:'#EFF4F4',
      }
});
export default styles;