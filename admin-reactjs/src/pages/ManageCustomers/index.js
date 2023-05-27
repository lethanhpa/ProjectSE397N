import React, { useEffect, useState } from 'react'
import { Button, Space, Table, message } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import Moment from "moment";
import axios from "../../libraries/axiosClient.js";
const { Column } = Table;
const apiName = "/customers";

export default function ManageCustomers() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = React.useState(0);
    useEffect(() => {
        axios
            .get(apiName)
            .then((response) => {
                const { data } = response;
                setData(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [refresh]);
    return (
        <>
            <Table dataSource={data} rowKey="_id">
                <Column title="Họ" dataIndex="lastName" key="lastName" />
                <Column title="Tên" dataIndex="firstName" key="firstName" />
                <Column title="Email" dataIndex="email" key="email" />
                <Column title="Ngày sinh" dataIndex="birthday" key="birthday" render={(text) => {
                    return <span>{Moment(text).format("DD/MM/YYYY")}</span>;
                }} />
                <Column title="Số điện thoại" dataIndex="phoneNumber" key="phoneNumber" />
                <Column title="Địa chỉ" dataIndex="address" key="address" />
                <Column
                    title="Action"
                    key="action"
                    render={(record) => (
                        <Space size="middle">
                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => {
                                    console.log(record.id);
                                    axios.delete(apiName + "/" + record.id).then((_response) => {
                                        setRefresh((f) => f + 1);
                                        message.success("Xóa danh mục thành công!", 1.5);
                                    });
                                }}
                            >Xóa</Button>
                        </Space>
                    )}
                />
            </Table>
        </>
    )
}
