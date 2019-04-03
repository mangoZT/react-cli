import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getUserInfo} from "actions/userInfo";

class UserInfo extends Component {

    render() {
        const { userInfo={} } = this.props.userInfo;
        return (
            <div>
                {
                    
                    <div>
                        <p>用户信息：</p>
                        <p>用户名：{userInfo.name}</p>
                        <p>介绍：{userInfo.intro}</p>
                    </div>
                }
                <button onClick={() => this.props.getUserInfo()}>请求用户信息</button>
            </div>
        )
    }
}

export default connect((userInfo) => userInfo, {getUserInfo})(UserInfo);