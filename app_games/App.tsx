import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import games from "./src/data/games"; 

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Steam Mobile</Text>
      </View>

      <ScrollView style={styles.main}>
      {games.map((game: Game) => (
        <View key={game.id} style={styles.card}>
          <Image source={{ uri: game.image }} style={styles.image} />
          <View style={styles.info}>
            <Text style={styles.name}>{game.name}</Text>
            <Text style={styles.detail}>Platform: {game.platform}</Text>
            <Text style={styles.detail}>Genre: {game.genre}</Text>
            <Text style={styles.detail}>Release Date: {game.releaseDate}</Text>
            <Text style={styles.detail}>Rating: {game.rating}</Text>
            <Text style={styles.detail}>Developer: {game.developer}</Text>
            <Text style={styles.rating}>Rating Score: {game.ratingScore}</Text>
          </View>
        </View>
      ))}

      </ScrollView>

      <View style={styles.footer}>
        <Text style={styles.title}>Create:Damacena</Text>
      </View>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 24,
  },
  header:{
    flex: 0,
    width: 450,
    height: 100,
    backgroundColor:"#2A23E2",
    justifyContent:"center",
    alignItems:"center",

  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    // width: width - 20,
    height: 180,
    resizeMode: 'cover',
  },
  info: {
    padding: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    color: '#555',
    marginBottom: 2,
  },
  rating: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginTop: 10,
  },
  footer:{
    flex: 0,
    width: 450,
    height: 100,
    backgroundColor:"#2A23E2",
    justifyContent:"center",
    alignItems:"center",

  }
});
