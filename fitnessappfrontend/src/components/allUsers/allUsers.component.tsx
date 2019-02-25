import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './allUsers.scss';
import { IUserData } from '../../redux/interfaces';
import { IState } from '../../redux/interfaces';
import { connect } from 'react-redux';
import { getUsers } from '../../redux/actions/get-users.action';

const users = [
  {Fullname: 'John Smith', Username: 'Jsmith', Email: 'jsmith@gmail.com'},
  {Fullname: 'Joe Smitty', Username: 'Jsmitty', Email: 'jsmity@gmail.com'},
  {Fullname: 'Alice Data', Username: 'adata', Email: 'adata@hotmail.com'},
  {Fullname: 'Joe Smitty', Username: 'Jsmitty', Email: 'jsmity@gmail.com'},
];

interface IProps {
  users: IUserData[];
  getUsers: () => void;
}

class AllUsersComponent extends Component<IProps, any> {
  constructor(props: any) {
    super(props);
  }

  render() {
    this.props.getUsers();
    const { users } = this.props;
    return (
      <div id='allUsers'>
        <h1>All Users Component!</h1>
        <table>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {users.map(function(e, id) {
            return (
              <tr key={id}>
                <td>
                  <Link to={'admin/users/edit/' + e.username}>{e.username}</Link>
                </td>
                <td>{e.name}</td>
                <td><a href={'mailto:' + e.email}>{e.email}</a></td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    users: state.users
  };
};

const mapDispatchToProps = {
  getUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(AllUsersComponent);