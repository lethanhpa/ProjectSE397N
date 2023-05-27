import React, { useState } from 'react'
import {
    UserOutlined,
    HomeOutlined,
    FileDoneOutlined,
    DropboxOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import logo from "../image/logo.png"
import { useNavigate } from 'react-router-dom';
import { Header } from 'antd/es/layout/layout';

const { Content, Footer, Sider } = Layout;

const items = [
    {
        label: 'Trang Chủ',
        key: '',
        icon: <HomeOutlined />,
    },
    {
        label: 'Quản Lý Khách Hàng',
        key: 'manageCustomers',
        style: { marginTop: '25px' },
        icon: <UserOutlined />,
    },
    {
        label: 'Quản Lý Nhân Viên',
        style: { marginTop: '25px' },
        key: 'manageEmployees',
        icon: <UserOutlined />,
    },
    {
        label: 'Quản Lý Đơn Hàng',
        style: { marginTop: '25px' },
        key: 'manageOrders',
        icon: <FileDoneOutlined />,
    },
    {
        label: 'Quản Lý Sản Phẩm',
        style: { marginTop: '25px' },
        key: 'manageProducts',
        icon: <DropboxOutlined />,
    },
];

export default function DefaultLayout({ children }) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [current, setCurrent] = useState('/');

    const navigate = useNavigate();
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            <Sider
                width={202}
            >
                <div style={{ color: "#129ECB", margin: "24px", fontSize: "32px", fontWeight: "700" }}><img style={{ width: "80px" }} src={logo} alt='' />YAME</div>
                <Menu
                    theme="dark"
                    defaultSelectedKeys={["/"]}
                    mode="inline"
                    items={items}
                    onClick={(e) => {
                        console.log(e);
                        setCurrent(e.key);
                        navigate(`/${e.key}`);
                    }}
                    selectedKeys={[current]}
                />
            </Sider>
            <Layout className="site-layout">
                <Header style={{ color: "white", fontSize: '28px', fontWeight: '700', fontFamily: 'cursive' }} >YOU ARE MY EVERYTHING</Header>
                <Content
                    style={{
                        margin: "0 16px",
                    }}
                >
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        backgroundColor: '#000028',
                        color: '#cecece',
                        textAlign: "center",
                    }}
                >
                    Admin
                </Footer>
            </Layout>
        </Layout>
    )
}
