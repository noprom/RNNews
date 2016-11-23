import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    TouchableOpacity
} from 'react-native';

// 导入本地json数据
var LocalData = require('../data/LocalData.json');

var Home = React.createClass({
    // 不可改变的默认值
    getDefaultProps(){
        return{
            url_api:'http://c.m.163.com/nc/article/headline/T1348647853363/0-20.html',
            key_word:'T1348647853363'
        }
    },

    // 初始化
    getInitialState(){
        return{
            // ListView头部轮播图的数据源
            headerDataArr:[],
            // cell的数据源
            dataSource: new ListView.DataSource({
                rowHasChanged:(r1,r2)=>{r1 !== r2}
            })
        }
    },

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderHeader={this.renderHeader}
            />
        );
    },

    // 返回ListView头部视图
    renderHeader(){
        return(
            <View>
                <Text>头部视图</Text>
            </View>
        )
    },

    // 返回LisView中的单个cell
    renderRow(rowData){
        return(
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri:rowData.imgsrc}} style={styles.imgStyle} />
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.mainTitleStyle}>{rowData.title}</Text>
                        <Text style={styles.subTitleStyle}>{rowData.digest}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    },

    // 组件加载完毕之后调用
    componentDidMount(){
        // 请求网络数据
        this.loadDataFromNet();
    },

    // 请求网络数据的方法
    loadDataFromNet(){
        fetch(this.props.url_api)
            .then((response)=>response.json())
            .then((responseData)=>{
                // 拿到需要的数据
                var jsonData = responseData[this.props.key_word];

                // 处理数据
                this.dealWithData(jsonData);
            })
            .catch((error)=>{
                console.log(error);
                if(error) {
                   // 网络请求失败,就用本地数据
                    console.log('网络请求失败');
                    var jsonData = LocalData[this.props.key_word];
                    this.dealWithData(jsonData);
                }
            })
    },

    // 处理网络数据的细节方法
    dealWithData(jsonData){
        // 定义临时变量
        var headerArr = [], listDataArr = [];
        // 遍历拿到的json数据
        for (var i=0;i<jsonData.length;i++){
            // 取出单个对象
            var data = jsonData[i];
            if(data.hasAD == 1){
                // 取出广告数据
                headerArr = data.ads;
            }else {
                // 非广告数据(行数据)
                listDataArr.push(data)
            }
        }

        // 更新状态机
        this.setState({
            // ListView头部轮播图的数据源
            headerDataArr:headerArr,
            // cell的数据源
            dataSource:this.state.dataSource.cloneWithRows(listDataArr),
        });

        // console.log(headerArr,listDataArr);
    },
});

const styles = StyleSheet.create({
    cellViewStyle:{
        // 主轴方向
        flexDirection:'row',
        padding:10,
        // 侧轴对齐方式
        alignItems:'center',
        // 设置下边框
        borderBottomColor:'#e8e8e8',
        borderBottomWidth:0.8,
    },
    imgStyle:{
        width:90,
        width:90,
    },
    rightViewStyle:{
        width:260,
        marginLeft:10,
    },
    mainTitleStyle:{
        fontSize:16,
        marginBottom:5,
    },
    subTitleStyle:{
        fontSize:14,
        color:'gray',
    },
});

// 输出类
module.exports = Home;