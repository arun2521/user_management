import { Button, Form, Input, message } from "antd";
import { userFormFields } from "../../config/userFormConfig";
import { createUser, updateUser } from "../../api/userApi";
import { useEffect } from "react";

const UserForm = ({ setShowComponent, setSelectedUser, selectedUser }) => {
  const [form] = Form.useForm();

  useEffect(() => {
    if (selectedUser) {
      form.setFieldsValue(selectedUser);
    }
  }, [selectedUser, form]);

  const handleFinish = async (values) => {
    try {
      if (selectedUser) {
        await updateUser(selectedUser.id, values);
        message.success("User updated successfully");
      } else {
        await createUser(values);
        message.success("User created successfully");
      }

      form.resetFields();
      setSelectedUser(null);
      setShowComponent(true);
    } catch (error) {
      message.error("Operation failed");
    }
  };

  return (
    <div className="add-user-container">
      <h1 className="add-user-header">
        {selectedUser ? "Edit User" : "Add User"}
      </h1>
      <Form
        form={form}
        layout="vertical"
        onFinish={handleFinish}
        className="user-form"
      >
        {userFormFields.map((field) => (
          <Form.Item
            key={field.name}
            label={field.label}
            name={field.name}
            rules={[
              {
                required: field.required,
                message: `${field.label} is required`,
              },
              ...(field.name === "phone"
                ? [
                    {
                      pattern: /^[0-9]{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  ]
                : []),
              ...(field.name === "email"
                ? [
                    {
                      type: "email",
                      message: "Enter a valid email address",
                    },
                  ]
                : []),
            ]}
          >
            <Input
              className="input-fields"
              type={field.type}
              autoComplete="off"
              maxLength={field.name === "phone" ? 10 : undefined}
              onInput={(e) => {
                if (field.name === "phone") {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }
              }}
            />
          </Form.Item>
        ))}

        <div className="user-form-actions full-width">
          <Button
            onClick={() => {
              setShowComponent(true);
              setSelectedUser(null);
            }}
          >
            Cancel
          </Button>
          <Button type="primary" htmlType="submit">
            {selectedUser ? "Update" : "Save"}
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UserForm;
