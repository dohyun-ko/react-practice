import React from "react";

const User = React.memo(function User({ user, onRemove, onToggle }) {

  return (
    <div>
      <b
        style={{
          cursor: "pointer",
          color: user.active ? "green" : "black",
        }}
        onClick={() => onToggle(user.id)}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
});

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user, index) => (
        <User user={user} key={index} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
