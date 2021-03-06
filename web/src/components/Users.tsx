import React from 'react';
import { gql, useQuery } from '@apollo/client';

const USERS_QUERY = gql`
  query USERS_QUERY {
    allUsers {
      id
      name
    }
  }
`;

interface User {
  name: string;
}

export default function Users() {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>LOADING</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      {data?.allUsers.map((user: User) => (
        <p key={user.name}>{user?.name}</p>
      ))}
    </div>
  );
}
