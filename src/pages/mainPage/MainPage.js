import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadUsers } from '../../components/actions';
import { Container, Row, Col, Table, Button, Form, Spinner } from 'react-bootstrap';

const MainPage = () => {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state) => state);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  
  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  
  const handleSortChange = () => {
    setSortOrder((prev) => (prev === 'asc' ? 'desc' : 'asc'));
  };
  
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedUsers = filteredUsers.sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>User List</h1>
          {loading ? (
            <Spinner animation="border" />
          ) : (
            <>
              <Form>
                <Form.Control
                  type="text"
                  placeholder="Search by name"
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className="mb-3"
                />
                <Button onClick={handleSortChange} className="mb-3">
                  Sort {sortOrder === 'asc' ? 'Descending' : 'Ascending'}
                </Button>
              </Form>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {sortedUsers.map((user) => (
                    <tr key={user.id}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default MainPage;
