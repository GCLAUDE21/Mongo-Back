import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from "antd";
const Add = () => {
  const [values, setValues] = useState(null);

  const onFinish = async (values) => {
    await fetch(`/api/rooms/`, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    });
    console.log("Success:", values);
    window.location.reload();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleAdd = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };
  return (
    <>
      <h3>Ajouter une chambre</h3>
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600, margin: "auto auto" }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Nom"
          name="name"
          rules={[{ required: true, message: "Entrez un nom de chambre !" }]}
        >
          <Input name="name" onChange={handleAdd} />
        </Form.Item>

        <Form.Item
          label="Capacité"
          name="maxPersons"
          rules={[{ required: false }]}
        >
          <Input name="maxPersons" onChange={handleAdd} type="number" />
        </Form.Item>

        <Form.Item label={null}>
          <Button type="primary" htmlType="submit">
            AJOUTER
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default Add;
