import React from "react";
import { Form, Input, Select, InputNumber, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { create } from "../../redux/Posts/postsSlice";

const CreatePost = () => {
  const { Option } = Select;
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    dispatch(create(values));
    form.resetFields();
  };

  return (
    <>
      <Form onFinish={onFinish} form={form}>
        <Form.Item label="nuevo post" name="body">
          <Input placeholder="Escribe tu post aqui " />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default CreatePost;
