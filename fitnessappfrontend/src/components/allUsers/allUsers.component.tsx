import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './allUsers.scss';

const users = [
  {Fullname: 'John Smith', Username: 'Jsmith', Email: 'jsmith@gmail.com'},
  {Fullname: 'Joe Smitty', Username: 'Jsmitty', Email: 'jsmity@gmail.com'},
  {Fullname: 'Alice Data', Username: 'adata', Email: 'adata@hotmail.com'},
  {Fullname: 'Joe Smitty', Username: 'Jsmitty', Email: 'jsmity@gmail.com'},
];

export class AllUsersComponent extends React.Component<any, any> {
  render() {
    return (
      <div id='allUsers'>
        <h1>All Users Component!</h1>
        <table>
          <tr>
            <th>Username</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
          {users.map(function(listValue, id) {
            return (
              <tr key={id}>
                <td>
                  <Link to={'admin/users/edit/' + listValue.Username}>{listValue.Username}</Link>
                </td>
                <td>{listValue.Fullname}</td>
                <td><a href={'mailto:' + listValue.Email}>{listValue.Email}</a></td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}