import { Text, View, Image, ScrollView } from "react-native";
import { styles } from "./style";


export default function Informatica() {
    return (
        <View style={styles.aifb}>
            <ScrollView horizontal={false}>

           
            <View style={styles.caixa04}>
            <Text style={styles.txttitulo}>Confira os cursos livres</Text>
            </View>

            <View style={styles.caixa05}>
                <View style={styles.caixa06}>
                <Image source={require('./imagem/21831_01-01-2020.jpg')} style={styles.imaginfor}/>
                <Text style={styles.txtaifb}>AutoCAD - projetos em 2D</Text>
                </View>

                <View style={styles.caixa06}>
                <Image style={styles.imaginfor} source={{uri:"https://hotmart.s3.amazonaws.com/product_contents/03039887-e2cb-4220-bc42-8ff47c429d93/WhatsAppImage20200915at152642.jpeg"}}/>
                </View>

            </View>

            </ScrollView>
          

            <Text style={styles.txtaifb}>
            
                - Excel 2019 - Avançado {'\n'}
                - Formação de Analista de treinamento{'\n'}
                e Desenvolvimento {'\n'}
                - Lógica de Programação {'\n'}
            </Text>

        </View>
    )
}