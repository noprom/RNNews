import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TabBarIOS,
    NavigatorIOS
} from 'react-native';

// 引入外部的组件
var Home = require('../Component/Home');
var Message = require('../Component/Message');
var Find = require('../Component/Find');
var Mine = require('../Component/Mine');

var Main = React.createClass({
    // 初始化设置
    getInitialState() {
        return {
            // 设置默认选中的tabBarItem标识
            selectedItem:'home', // 默认让首页被选中
        }
    },

    render() {
        return (
            <TabBarIOS
                tintColor="orange"
            >
                {/*首页*/}
                <TabBarIOS.Item
                    icon={require('./image/tabbar_home.png')}
                    title="首页"
                    selected={this.state.selectedItem == 'home'}
                    onPress={()=>{this.setState({selectedItem:'home'})}}
                >
                    <Home />
                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    icon={require('./image/tabbar_message_center.png')}
                    title="消息"
                    selected={this.state.selectedItem == 'message'}
                    onPress={()=>{this.setState({selectedItem:'message'})}}
                >
                    <Message />
                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    icon={require('./image/tabbar_discover.png')}
                    title="发现"
                    selected={this.state.selectedItem == 'find'}
                    onPress={()=>{this.setState({selectedItem:'find'})}}
                >
                    <Find />
                </TabBarIOS.Item>

                {/*我的*/}
                <TabBarIOS.Item
                    icon={require('./image/tabbar_profile.png')}
                    title="我"
                    selected={this.state.selectedItem == 'mine'}
                    onPress={()=>{this.setState({selectedItem:'mine'})}}
                >
                    <Mine />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

// 输出类
module.exports = Main;