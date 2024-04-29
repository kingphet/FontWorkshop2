import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Member() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/api/users')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
      });
  }, []);
  return (
    <div className="">
      <h1 className='text-3xl font-semibold text-center py-5'>CEIT CyberSecurity Member</h1>

    <table className="w-full text-sm text-left rtl:text-right text-gray-500">
    <thead className="text-sm text-gray-700 border-b bg-white border-gray-300 sticky top-0">
      <tr>
        <th scope="col" className="px-6 py-3 flex items-center">
          Name
        </th>
        <th scope="col" className="px-6 py-3">
          Email
        </th>
        <th scope="col" className="px-6 py-3">
          Age
        </th>
      </tr>
    </thead>
    <tbody>
      {users.map((item, index) => (
        <tr className=" border-b border-gray-100" key={index}>
          <td className="px-6 py-4 flex items-center">
            <img
              src={item.avatar}
              alt=""
              className="w-12 h-12 object-cover rounded-full"
            />
            <div className="ml-3 ">
              <p className="text-gray-700 font-semibold">
                {item.username}
              </p>
            </div>
          </td>
          <td className="px-6 py-4">security@gmail.com</td>
          <td className="px-6 py-4">{item.age}</td>
        </tr>
      ))}
    </tbody>
  </table>
    </div>

  );
}

