import { Button, TouchableOpacity, View, Text,Image } from "react-native";
import { AntDesign, FontAwesome5, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import {styles} from "./style"

export default function Home({ navigation }) {
    return (
        <View style={styles.caixa01}>

            <View style={styles.caixa03}>
            <Image style={styles.imagem} source={{uri:"https://www.comotrabalhar.org/wp-content/uploads/2017/11/logo-SENAC.png"}}/>
            </View>

            <View style={styles.caixa02}>

                <TouchableOpacity onPress={() => navigation.navigate("Administracao")}
                    style={styles.icons}>
                    <FontAwesome5 name="user-tie" size={24} color="#eeb600" />
                    <Text style={{ color: "#eeb600", fontSize:10 }}>Administração</Text>

                </TouchableOpacity>



                <TouchableOpacity onPress={() => navigation.navigate("Informatica")}
                    style={styles.icons}>
                    <MaterialIcons name="computer" size={24} color="#eeb600" />
                    <Text style={{ color: "#eeb600", fontSize:10}}>Informática</Text>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("BemEstar")}
                    style={styles.icons}>
                   <FontAwesome5 name="hand-holding-heart" size={24} color="#eeb600" />
                    <Text style={{ color: "#eeb600", fontSize:10}}>Bem-Estar</Text>
                   


                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate("Fotografia")}
                    style={styles.icons}>
                    <FontAwesome name="photo" size={24} color="#eeb600" />
                    <Text style={{ color: "#eeb600", fontSize:10 }}>Fotografia</Text>



                </TouchableOpacity>
               
   


            </View>

        </View>
    )
}