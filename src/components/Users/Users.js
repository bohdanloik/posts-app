import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUsers } from '../../services/api';
import Button from '../UI/Button/Button';
import Table from '../UI/Table/Table';

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector(({ usersReducer: { users } }) => users);
    
    useEffect(() => {
        dispatch(getUsers());
    }, []);

    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Website</th>
                    <th></th>
                </tr>
            </thead>

            <tbody>
                {users.map(user => {
                    return (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>{user.website}</td>
                            <td>
                            <Link to={`/user-posts/${user.id}`} className='open-posts'>
                               <Button>Open</Button> 
                            </Link>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </Table>
    )
}

export default Users;