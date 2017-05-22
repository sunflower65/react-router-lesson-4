import React from 'react'
import {Route, Link} from 'react-router-dom'
import UserList from './UserList';
import UserAdd from './UserAdd';
import UserDetail from './UserDetail';
const User = () => (
    <div className="row">
        <div className="col-md-2">
            <ul className="nav nav-pills nav-stacked">
                <li role="presentation"><Link to="/user/list">用户列表</Link></li>
                <li role="presentation"><Link to="/user/add">增加用户</Link></li>
            </ul>
        </div>
        <div className="col-md-10">
            <Route path={`/user/list`} component={UserList}/>
            <Route path={`/user/add`} component={UserAdd}/>
            <Route path={`/user/detail/:id`} component={UserDetail}/>
        </div>
    </div>
)
export default User