import { View, Text, TextInput } from "react-native";
import styles from "./styles";
import { useState } from "react";
import Button from "../../components/button";


export default function Home(){

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [classficacao, setClassificacao] = useState('');

    const handleIMC = () => {
        const pesoNum = parseFloat(peso);
        const alturaNum = parseFloat(altura);
        if (!pesoNum || !alturaNum) {
          setImc(null);
          setClassificacao('Preencha os campos adequadamente');
          return;
        }
      
        const resultado = pesoNum / (alturaNum * alturaNum);
        const imcCalculado = resultado.toFixed(2);
        setImc(imcCalculado);
      
        let texto = '';
        if (resultado < 18.5) texto = 'Abaixo do peso';
        else if (resultado < 24.9) texto = 'Peso normal';
        else if (resultado < 29.9) texto = 'Sobrepeso';
        else if (resultado < 34.9) texto = 'Obesidade grau I';
        else if (resultado < 39.9) texto = 'Obesidade grau II';
        else texto = 'Obesidade grau III ou Mórbida';
      
        setClassificacao(texto);
        
      };
      

      return (
        <View style={styles.container}>
            <Text style={styles.titulo}>Calculo do IMC </Text>
            <Text style={styles.resultado}>
                {imc ? `IMC: ${imc}` : 'Preencha os campos'}
            </Text>

            <TextInput style={styles.input} placeholder=" Peso (kg)" keyboardType="numeric" value={peso} onChangeText={setPeso} />
            <TextInput style={styles.input} placeholder=" Altura (m)" keyboardType="numeric" value={altura} onChangeText={setAltura} />

            <Button title="Calcular IMC" onPress={handleIMC} />
            <Text style={styles.classificacao}>
            {classficacao}
            </Text>

        </View>

        
      )
}