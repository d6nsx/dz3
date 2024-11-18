import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUsers, filterUsers, sortUsers } from './actions';
import { Table, Form, Button } from 'react-bootstrap';

const UsersList = () => {
  const dispatch = useDispatch();
  const { filteredUsers, filter } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const handleFilterChange = (event) => {
    dispatch(filterUsers(event.target.value));
  };

  const handleSort = () => {
    dispatch(sortUsers());
  };

  return (
    <div>
      <h1>Users List</h1>
      <Form.Control
        type="text"
        placeholder="Search by name"
        value={filter}
        onChange={handleFilterChange}
        className="mb-3"
      />
      <Button variant="primary" onClick={handleSort} className="mb-3">
        Sort by Name
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
