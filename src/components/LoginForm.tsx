import { Button, Form, Input } from "antd";
import React, { FC, useState } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { rules } from "../utils/rules";

const LoginForm: FC = () => {
  const { login } = useActions();
  const { error, isLoading } = useTypedSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required("Please enter your username!")]}
      >
        <Input value={username} onChange={(e) => setUsername(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="пароль"
        name="password"
        rules={[rules.required("Please enter your password!")]}
      >
        <Input
          value={password}
          type={"password"}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Enter
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
