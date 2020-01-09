import React from "react";
import Message from "./components/Message";
import { AppRegistry, StyleSheet, Text, View, VrButton } from "react-360";
import StockCard from "./components/Card";

export default class vr_trading extends React.Component {

  state = {
    activeStock: "NA",
    accountBalance: 10000
  }

  handleStockSelection(stockId) {
    this.setState({
      activeStock: stockId
    })

  }

  render() {
    return (
      <View style={styles.panel}>
        <View style={styles.panelBox}>
          <Text style={styles.greeting}> IT Stocks </Text>
          <StockCard symbol="INFY" exchange="NSE"/>
          <StockCard symbol="TCS" exchange="NSE"/>
        </View>

        <View ><Text>Selected Stock: {this.state.activeStock}</Text></View>

        <View style={styles.panelBox}>
          <Text> Top Losers </Text>
          <VrButton onClick={() => this.handleStockSelection('TCS')}><View style={[styles.stockBox, styles.alignCenter, styles.losers]}><Text > TCS </Text><Text > -10% </Text></View></VrButton>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  panel: {
    // Fill the entire surface
    width: 1000,
    height: 600,
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    flexDirection: "row",
    justifyContent: "space-between",

  },

  panelBox: {
    padding: 20,
    backgroundColor: "#5373a3",
    borderColor: "#639dda",
    borderWidth: 2
  },
  alignCenter: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center'

  },
  stockBox: {
    width: 80,
    height: 80,


  },
  greeting: {
    fontSize: 20,


  },
  gainers: {
    backgroundColor: "#509d0a",
  },
  losers: {
    backgroundColor: "#d22222f7"
  }

});

AppRegistry.registerComponent("vr_trading", () => vr_trading);
