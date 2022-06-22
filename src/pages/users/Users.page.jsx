import { useState } from "react";
import { cloneDeep } from "lodash";
import UserItemComponent from "../../components/userItem/UserItem.component";

const initialUsers = [
  { name: "kenny", id: "asf3rsdf3" },
  { name: "john", id: "asf3rsdf4" },
  { name: "avi", id: "asf3rsdf5" },
  { name: "shlomi", id: "asf3rsdfa" },
  { name: "yakov", id: "asf3rsdff3" },
];

const UsersPage = () => {
  const [usersArr, setUsersArr] = useState(initialUsers);
  const handleDeleteUser = (id) => {
    let newArr = cloneDeep(usersArr);
    setUsersArr(newArr.filter((item) => item.id != id));
  };
  return (
    <ul className="list-group">
      {usersArr.map((item) => (
        <UserItemComponent
          name={item.name}
          id={item.id}
          key={item.id}
          onDeleteUser={handleDeleteUser}
        />
      ))}
    </ul>
  );
};

export default UsersPage;
