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

export default class StocksPanel extends React.Component {
  state = {};

  handleStockSelection() {}

  render() {
    return (
      <View style={styles.panel}>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          MUST HAVE STOCKS
        </Text>
        <View style={styles.greetingBox}>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text> ONGC </Text>
            <Text> 125.10 </Text>
          </View>

          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text> LT </Text>
            <Text> 1316.5 </Text>
          </View>

          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text> TITAN </Text>
            <Text> 1163.45 </Text>
          </View>

          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>ICICI BANK</Text>
            <Text>547</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>HCL</Text>
            <Text>580</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>NTPC</Text>
            <Text>119.35</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>WIPRO</Text>
            <Text>256.50</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>GAIL</Text>
            <Text>125.40</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>TATA MOTORS</Text>
            <Text>192.75</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>YES BANK</Text>
            <Text>48.5</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>SBI</Text>
            <Text>331.40</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>JSW STEEL</Text>
            <Text>279.20</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>HDFC BANK</Text>
            <Text>1275.80</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>ASIAN PAINTS</Text>
            <Text>745</Text>
          </View>
          <View style={[styles.stockBox, styles.alignCenter, styles.gainers]}>
            <Text>ITC</Text>
            <Text>236.50</Text>
          </View>
        </View>
        <Text style={{ textAlign: "center" }}>
          *These are not latest prices.
        </Text>
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
  greetingBox: {
    width: 350,
    backgroundColor: "#000000",
    borderColor: "#639dda",
    borderWidth: 2,

    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
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
