import React from 'react';
import useStyles from 'isomorphic-style-loader/useStyles';
import { Form, Button, message, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { push as pushAction } from 'relient/actions/history';
import { useForm } from 'relient-admin/hooks';
import useRules from 'shared/hooks/use-rules';
// import { login as loginAction } from 'shared/actions/auth';
import { setAuthorization } from 'shared/actions/auth';
import { RINGTONE } from 'shared/constants/features';
// import getPreloader from 'shared/utils/preloader';
import Layout from './layout';

import s from './base.less';

const { Item } = Form;
const layout = {
  wrapperCol: { span: 24 },
  labelCol: { span: 0 },
};

const result = () => {
  useStyles(s);
  const dispatch = useDispatch();
  const { submit, submitting } = useForm(async () => {
    // const { account } = await dispatch(loginAction({ ...values }));
    // await Promise.all(getPreloader(account, dispatch));
    dispatch(setAuthorization('placeholder'));
    message.success('登录成功');
    dispatch(pushAction(RINGTONE));
  });

  const { password } = useRules();

  return (
    <Layout className={s.Root}>
      <Form onFinish={submit}>
        <Item
          rules={[{ required: true }]}
          layout={layout}
          name="username"
          label="帐号"
        >
          <Input type="text" size="large" />
        </Item>
        <Item
          rules={[password, { required: true }]}
          layout={layout}
          name="password"
          label="密码"
        >
          <Input type="password" size="large" />
        </Item>
        <Item className={s.Operation} wrapperCol={{ push: 8, span: 8 }}>
          <Button size="large" loading={submitting} className={s.Submit} type="primary" htmlType="submit">
            登录
          </Button>
        </Item>
      </Form>
    </Layout>
  );
};

result.displayName = __filename;

export default result;
