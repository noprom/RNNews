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
                    <NavigatorIOS
                        initialRoute ={
                            {
                                component: Home, //具体的板块
                                title:'网易新闻', //导航栏标题
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*消息*/}
                <TabBarIOS.Item
                    icon={require('./image/tabbar_message_center.png')}
                    title="消息"
                    selected={this.state.selectedItem == 'message'}
                    onPress={()=>{this.setState({selectedItem:'message'})}}
                >
                    <NavigatorIOS
                        initialRoute ={
                            {
                                component: Message, //具体的板块
                                title:'消息', //导航栏标题
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*发现*/}
                <TabBarIOS.Item
                    icon={require('./image/tabbar_discover.png')}
                    title="发现"
                    selected={this.state.selectedItem == 'find'}
                    onPress={()=>{this.setState({selectedItem:'find'})}}
                >
                    <NavigatorIOS
                        initialRoute ={
                            {
                                component: Find, //具体的板块
                                title:'发现', //导航栏标题
                            }
                        }
                    />
                </TabBarIOS.Item>

                {/*我的*/}
                <TabBarIOS.Item
                    icon={require('./image/tabbar_profile.png')}
                    title="我"
                    selected={this.state.selectedItem == 'mine'}
                    onPress={()=>{this.setState({selectedItem:'mine'})}}
                >
                    <NavigatorIOS
                        initialRoute ={
                            {
                                component: Mine, //具体的板块
                                title:'我', //导航栏标题
                            }
                        }
                    />
                </TabBarIOS.Item>

            </TabBarIOS>
        );
    }
});

// 输出类
module.exports = Main;