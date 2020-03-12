import React, { Component } from 'react'
import Cesium  from 'cesium/Cesium'
import 'cesium/Widgets/widgets.css'
Cesium.Ion.defaultAccessToken = "your_token"
export default class App extends Component {
  componentDidMount(){
    const viewer = new Cesium.Viewer("cesiumContainer")
  }
  render() {
    return (
      <div id="cesiumContainer" style={{
        width:500,height:500,border:"1px solid black"
      }}>
      </div>
    )
  }
}
