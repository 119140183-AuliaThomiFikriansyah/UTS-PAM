import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
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
        backgroundColor:'#61A4BC',
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
      }
});
export default styles;