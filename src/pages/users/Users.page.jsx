const initArray = ["kenny", "john", "avi", "shlomi", "yakov"];

const UsersPage = () => {
  return (
    <ul className="list-group">
      {initArray.map((item, idx) => (
        <li className="list-group-item" key={idx}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default UsersPage;
