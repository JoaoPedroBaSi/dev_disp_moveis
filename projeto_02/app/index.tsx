import { View, Button, Text, TextInput, Image, StyleSheet } from "react-native";

export default function index() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('@/assets/images/tutuwigui.jpg')}
          style={styles.logo}
        ></Image>
      </View>
        <View style={styles.textBoxContainer}>
          <Text style={styles.legenda}>LOGIN</Text>
          <TextInput 
            placeholder="Digite seu login"
            style={styles.textBox}
          />
          <Text style={styles.legenda}>SENHA</Text>
          <TextInput
            placeholder="Digite seu senha"
            style={styles.textBox}
            secureTextEntry
          />
          <Button
            title="Entrar"
            color="#8BFA90"
          />
        </View>
      <View/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#fff',
  },
  legenda: {
    fontSize: 16,
    marginBottom: 10,
    alignSelf: 'center',
  },
  textBoxContainer: {
    width: '50%',
    justifyContent: 'center',
    marginBottom: 15,
    textAlign: 'center',
  },
  textBox: {
    borderWidth: 1,
    borderColor: '#000',
    marginBottom:20,
    borderRadius: 5,
    padding: 10,
    textAlign: 'center',
    width: '100%',
  },
});
