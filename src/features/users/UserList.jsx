import { useEffect, useState } from "react";
import { Button, Space, Popconfirm, message } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Table from "../../components/Table/Table";
import { getAllUsers, deleteUser } from "../../api/userApi";

const UserList = ({ setShowComponent, setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const data = await getAllUsers();
      setUsers(data);
    } catch (error) {
      message.error("Failed to fetch users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      message.success("User deleted successfully");
      fetchUsers();
    } catch (error) {
      message.error("Delete failed");
    }
  };

  const handleShowForm = () => {
    setShowComponent(false);
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Actions",
      key: "actions",
      render: (_, record) => (
        <Space>
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => {
              setSelectedUser(record);
              setShowComponent(false);
            }}
          />

          <Popconfirm
            title="Delete this user?"
            onConfirm={() => handleDelete(record.id)}
            okText="Yes"
            cancelText="No"
          >
            <Button danger type="text" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <div className="user-list-container">
      <div className="user-list-header">
        <h1>User Management</h1>
        <Button onClick={handleShowForm}>Add User</Button>
      </div>
      <Table
        columns={columns}
        dataSource={users}
        loading={loading}
        scroll={{ x: true }}
      />
    </div>
  );
};

export default UserList;
