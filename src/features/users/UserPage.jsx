import React, { useState } from "react";
import UserList from "./UserList";
import UserForm from "./UserForm";
import "./UserStyles.css";
import { Card } from "antd";

const UserPage = () => {
  const [showComponent, setShowComponent] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="user-manager-container">
      <Card className="user-manager-card">
        {showComponent ? (
          <UserList
            setShowComponent={setShowComponent}
            setSelectedUser={setSelectedUser}
          />
        ) : (
          <UserForm
            setShowComponent={setShowComponent}
            selectedUser={selectedUser}
            setSelectedUser={setSelectedUser}
          />
        )}
      </Card>
    </div>
  );
};

export default UserPage;
