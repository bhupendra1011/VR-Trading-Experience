import React from "react";
import {
  asset,
  AppRegistry,
  Environment,
  StyleSheet,
  Text,
  View,
  VrButton,
} from "react-360";

export default class InfoPanel extends React.Component {
  state = { articles: [] };
  countryCodes = ["us", "in", "in", "us", "hk", "ca", "au", "sg"];
  componentWillMount() {
    this.fetchNews();
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.fetchNews(), 5000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  fetchNews() {
    let random = Math.floor((Math.random() * 10) % 9);
    const code = this.countryCodes[random];
    fetch(
      `https://newsapi.org/v2/top-headlines?country=${code}&category=business&apiKey=981019174e214aa0939661bb4037aa73&pageSize=6`
    )
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articles: data.articles });
      });
  }

  render() {
    return (
      <View style={styles.panel}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          MARKET BUZZ
        </Text>
        <View style={styles.greetingBox}>
          {this.state.articles.map((article) => (
            <View key={article.publishedAt} style={styles.articleBox}>
              <Text style={styles.articleText}>{article.title}</Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 350,
    height: 550,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
  },
  articleBox: {
    borderBottomWidth: 2,
    padding: 5,
    borderColor: "#0955a2db",
  },
  articleText: {
    fontWeight: "500",
    paddingTop: 5,
  },
  greetingBox: {
    width: 350,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,
    flex: 1,

    flexDirection: "column",
    justifyContent: "space-between",
  },
  gainers: {
    backgroundColor: "#0955a2db",
  },
  losers: {
    backgroundColor: "#d22222f7",
  },
  alignCenter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  stockBox: {
    width: 80,
    height: 80,
    margin: 10,
  },
});
