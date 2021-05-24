import React, { createElement } from 'react';
import { string, func, bool } from 'prop-types';
import useStyles from 'isomorphic-style-loader/useStyles';
import { Layout, Dropdown, Menu } from 'antd';
import { Link } from 'relient-admin/components';
import { PASSWORD, PROFILE } from 'shared/constants/features';
import { MenuUnfoldOutlined, MenuFoldOutlined, LogoutOutlined } from '@ant-design/icons';

import s from './header.less';

const { Header } = Layout;
const { Item, Divider } = Menu;

const result = ({
  email,
  username,
  logout,
  isCollapsed,
  toggleSider,
}) => {
  useStyles(s);

  return (
    <Header className={s.Header}>
      {createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
        onClick: toggleSider,
        style: { fontSize: 20 },
      })}

      <Dropdown
        overlay={(
          <Menu className={s.Menu} selectedKeys={[]}>
            <Item>
              <Link featureKey={PROFILE} showIcon />
            </Item>
            <Item>
              <Link featureKey={PASSWORD} showIcon />
            </Item>
            <Divider />
            <Item onClick={logout}>
              <LogoutOutlined />
              登出
            </Item>
          </Menu>
        )}
      >
        <div className={s.Action}>
          <span>{username || email}</span>
        </div>
      </Dropdown>
    </Header>
  );
};

result.propTypes = {
  email: string,
  username: string,
  logout: func.isRequired,
  isCollapsed: bool.isRequired,
  toggleSider: func.isRequired,
};

result.displayName = __filename;

export default result;
