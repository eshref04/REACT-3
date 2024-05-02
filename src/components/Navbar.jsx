import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import {  Layout, Menu, theme } from 'antd';

const { Header } = Layout;
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: `option${subKey}`,
      };
    }),
  };
});
const Navbar = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout >
      <Header 
        style={{
          padding:'40px 100px 40px 100px',
          display: 'flex',
          justifyContent:"space-between",
          alignItems: 'center',
        }}
      >
        <img style={{padding:'10px'}}   src="https://os.alipayobjects.com/rmsportal/mlcYmsRilwraoAe.svg" alt="" />
        <div  className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items1}
          style={{
            flex: 1,
            minWidth: 0,
            justifyContent:"end",
            width:"200px",
          }}
        />
      </Header>
     
     
    </Layout>
  );
};
export default Navbar;