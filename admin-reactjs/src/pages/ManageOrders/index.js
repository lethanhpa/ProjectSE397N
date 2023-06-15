import React, { useEffect, useState } from 'react'
import { Button, Space, Table, message } from 'antd';
import { DeleteOutlined } from "@ant-design/icons";
import numeral from "numeral";
import Moment from "moment";
import axios from "../../libraries/axiosClient.js";
const { Column } = Table;
const apiName = "/orders";

export default function ManageOrder() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = React.useState(0);
    useEffect(() => {
        axios
            .get(apiName)
            .then((response) => {
                const { data } = response;
                setData(data);
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [refresh]);
    return (
        <>
            <Table dataSource={data} rowKey="_id">
                <Column title="Địa chỉ giao hàng" dataIndex="shippingAddress" key="shippingAddress" />
                <Column title="Ngày giao hàng" dataIndex="shippedDate" key="shippedDate"
                    render={(text) => {
                        return <span>{Moment(text).format("DD/MM/YYYY")}</span>;
                    }} />
                <Column title="Hình thức thanh toán" dataIndex="paymentType" key="paymentType" />
                <Column title="Trạng thái" dataIndex="status" key="status" />
                <Column title="Khách hàng" dataIndex="customer.fullName" key="customer.fullName" render={(_text, record) => {
                    return <span>{record.customer.lastName} {record.customer.firstName}</span>;
                }} />
                <Column title="Nhân viên" dataIndex="employee.fullName" key="employee.fullName" render={(_text, record) => {
                    return <span>{record.employee.lastName} {record.employee.firstName}</span>;
                }} />
                <Column title="Order Details" dataIndex="orderDetails" key="orderDetails" render={(_text, record) => {
                    return (
                        <span>
                            Số lượng: {record.orderDetails[0].quantity}
                            <br />
                            Mã sản phẩm: {record.orderDetails[0].productId}
                            <br />
                            Giá: {numeral(record.orderDetails[0].price * record.orderDetails[0].quantity).format("0,0")}đ
                        </span>
                    );
                }} />
                <Column
                    title="Action"
                    key="action"
                    render={(record) => (
                        <Space size="middle">
                            <Button
                                danger
                                icon={<DeleteOutlined />}
                                onClick={() => {
                                    console.log(record._id);
                                    axios.delete(apiName + "/" + record._id).then(() => {
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
