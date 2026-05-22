import React, { useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";

const RoomForm = ({ id, room, setRoom }) => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    await fetch(`/api/rooms/${id}`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "PATCH",
      body: JSON.stringify(values),
    });

    console.log("Success:", values);
    setRoom(values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const [values, setValues] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleDelete = async () => {
    await fetch(`/api/rooms/${id}`, {
      method: "DELETE",
    });
    navigate("/rooms");
  };

  useEffect(() => {
    setValues(room);
  }, [room, id]);

  if (!values) return null;
  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Nom"
        name="name"
        initialValue={values.name}
        rules={[
          { required: true, message: "Merci d'entrer le nom de la chambre" },
        ]}
      >
        <Input value={values.name} name="name" onChange={handleChange} />
      </Form.Item>

      <Form.Item
        label="Capacité max"
        name="maxPersons"
        initialValue={values.maxPersons}
        rules={[{ required: false }]}
      >
        <Input
          onChange={handleChange}
          value={values.maxPersons}
          type="number"
          name="maxPersons"
        />
      </Form.Item>

      <Form.Item label={null}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
        <Button onClick={handleDelete} danger style={{ marginLeft: "5px" }}>
          Supprimer
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RoomForm;
