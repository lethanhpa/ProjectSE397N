import React, { useState } from 'react'
import { Button, Space, Table, message, Form, Modal, Input, InputNumber, Pagination, Drawer, Popconfirm } from 'antd';
import { DeleteOutlined, EditOutlined, UnorderedListOutlined, FilterOutlined, ClearOutlined, SearchOutlined } from "@ant-design/icons";
import axios from "../../libraries/axiosClient.js";
import numeral from "numeral";
const { Column } = Table;
const apiName = "/products";

export default function ManageProducts() {
    const [data, setData] = useState([]);
    const [refresh, setRefresh] = useState(0);
    const [showTable, setShowTable] = useState(true);
    const [updateForm] = Form.useForm();
    const [createForm] = Form.useForm();
    const [openFilter, setOpenFilter] = useState(false);
    const [skip, setSkip] = useState(0);
    const [total, setTotal] = useState(0);
    const [priceStartSearch, setPriceStartSearch] = useState("");
    const [priceEndSearch, setPriceEndSearch] = useState("");
    const [discountEndSearch, setDiscountEndSearch] = useState("");
    const [discountStartSearch, setDiscountStartSearch] = useState("");
    const [stockEndSearch, setStockEndSearch] = useState("");
    const [stockStartSearch, setStockStartSearch] = useState("");
    const [dataSearch, setDataSearch] = useState({});
    const [nameSearch, setNameSearch] = useState("");
    const [open, setOpen] = useState(false);
    const [updateId, setUpdateId] = useState(0);
    const [handleSearch] = Form.useForm();

    const onClearSearch = () => {
        setNameSearch("");
        setPriceStartSearch("");
        setPriceEndSearch("");
        setDiscountEndSearch("");
        setDiscountStartSearch("");
        setStockEndSearch("");
        setStockStartSearch("");
        setDataSearch({});
    };
    const onSearch = () => {
        if (
            nameSearch === "" &&
            stockStartSearch === "" &&
            stockEndSearch === "" &&
            priceStartSearch === "" &&
            priceEndSearch === "" &&
            discountStartSearch === "" &&
            discountEndSearch === ""
        ) {
            return;
        }
        setDataSearch({
            ...(nameSearch !== "" && { productName: nameSearch }),
            ...(stockStartSearch !== "" && { stockStart: stockStartSearch }),
            ...(stockEndSearch !== "" && { stockEnd: stockEndSearch }),
            ...(priceStartSearch !== "" && { priceStart: priceStartSearch }),
            ...(priceEndSearch !== "" && { priceEnd: priceEndSearch }),
            ...(discountStartSearch !== "" && { discountStart: discountStartSearch }),
            ...(discountEndSearch !== "" && { discountEnd: discountEndSearch }),
        });
        console.log(dataSearch);
        setTotal(data.length);
    };

    const handlePageChange = (page) => {
        setSkip((page - 1) * 10);
    };

    const showDrawer = () => {
        setOpenFilter(true);
    };

    // Get products
    React.useEffect(() => {
        axios
            .get(apiName, {
                params: {
                    skip: skip,
                    limit: 10,
                    ...dataSearch,
                },
            })
            .then((response) => {
                const result = response.data;

                setData(result.data);
                setTotal(result.total);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [refresh, showTable, skip, dataSearch]);

    const onFinish = (values) => {
        axios
            .post(apiName, values)
            .then((_response) => {
                setRefresh((f) => f + 1);
                createForm.resetFields();
                message.success("Thêm mới thành công!", 1.5);
                setShowTable(true);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const onUpdateFinish = (values) => {
        axios
            .patch(apiName + "/" + updateId, values)
            .then((_response) => {
                setRefresh((f) => f + 1);
                updateForm.resetFields();
                message.success("Cập nhật thành công!", 1.5);
                setOpen(false);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    const onClose = () => {
        setOpenFilter(false);
    };

    const text = 'Bạn có chắc chắn muốn xóa không?';
    const description = 'Nếu xóa đi sẽ không thể khôi phục lại';

    return (
        <div style={{ padding: "24px 24px 24px", textAlign: "left" }}>
            {showTable === false ? (
                <>
                    <Button
                        type="primary"
                        ghost
                        onClick={() => {
                            setShowTable(true);
                        }}>
                        <UnorderedListOutlined />
                    </Button>

                    <h1 style={{ fontSize: "32px", textAlign: "center" }}>ADD LIST</h1>
                    {/* CREAT FORM */}
                    <Form
                        style={{ paddingTop: "12px", width: "80%" }}
                        form={createForm}
                        name="create-form"
                        onFinish={onFinish}
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                    >
                        <Form.Item
                            label="Tên sản phẩm"
                            name="name"
                            hasFeedback
                            required={true}
                            rules={[
                                {
                                    required: true,
                                    message: "Bắt buộc phải nhập",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item label="Ảnh" name="img">
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Giá"
                            name="price"
                            hasFeedback
                            required={true}
                            rules={[
                                {
                                    required: true,
                                    message: "Bắt buộc phải nhập",
                                },
                            ]}
                        >
                            <InputNumber min={0} style={{ width: 350 }} />
                        </Form.Item>

                        <Form.Item label="Giảm giá" name="discount" hasFeedback>
                            <InputNumber min={0} max={75} style={{ width: 350 }} />
                        </Form.Item>

                        <Form.Item label="Tồn kho" name="stock" hasFeedback>
                            <InputNumber min={0} style={{ width: 350 }} />
                        </Form.Item>

                        <Form.Item label="Mô tả / Ghi chú" name="description" hasFeedback>
                            <Input style={{ width: 350 }} />
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit" style={{ width: "140px", height: "35px", fontSize: "18px" }}>
                                Thêm
                            </Button>
                        </Form.Item>
                    </Form>
                </>
            ) : (
                <>
                    <Space style={{ marginBottom: "12px" }}>
                        <Button
                            type="primary"
                            ghost
                            onClick={() => {
                                setShowTable(false);
                            }}>
                            <UnorderedListOutlined />
                        </Button>
                        <Button
                            type="dashed"
                            onClick={showDrawer}
                            icon={<FilterOutlined />}
                        >
                            Filter
                        </Button>
                    </Space>

                    <Drawer
                        title="Filter Product"
                        placement="right"
                        width={500}
                        onClose={onClose}
                        open={openFilter}
                    >
                        {/* Search name product */}
                        <Form
                            form={handleSearch}
                            name="search-form"
                            onFinish={onFinish}
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                        >
                            <Form.Item
                                label="Tên sản phẩm"
                                name="name"
                                hasFeedback={nameSearch === "" ? false : true}
                                valuePropName={nameSearch}
                            >
                                <Input
                                    value={nameSearch}
                                    onChange={(e) => {
                                        setNameSearch(e.target.value);
                                    }}
                                />
                            </Form.Item>

                            <Form.Item label="Tồn kho">
                                <Space>
                                    <InputNumber
                                        min={0}
                                        onChange={(value) => {
                                            setStockStartSearch(value);
                                        }}
                                        value={stockStartSearch}
                                        placeholder="From..."
                                        typeof=""
                                    />
                                    <InputNumber
                                        min={0}
                                        onChange={(value) => {
                                            setStockEndSearch(value);
                                        }}
                                        value={stockEndSearch}
                                        placeholder="To..."
                                    />
                                </Space>
                            </Form.Item>

                            <Form.Item label="Giá">
                                <Space>
                                    <InputNumber
                                        min={0}
                                        onChange={(value) => {
                                            setPriceStartSearch(value);
                                        }}
                                        placeholder="Từ..."
                                        value={priceStartSearch}
                                    />
                                    <InputNumber
                                        min={0}
                                        onChange={(value) => {
                                            setPriceEndSearch(value);
                                        }}
                                        placeholder="Đến..."
                                        value={priceEndSearch}
                                    />
                                </Space>
                            </Form.Item>

                            <Form.Item label="Giảm giá">
                                <Space>
                                    <InputNumber
                                        min={0}
                                        onChange={(value) => {
                                            setDiscountStartSearch(value);
                                        }}
                                        value={discountStartSearch}
                                        placeholder="Từ..."
                                    />
                                    <InputNumber
                                        max={99}
                                        min={0}
                                        onChange={(value) => {
                                            setDiscountEndSearch(value);
                                        }}
                                        value={discountEndSearch}
                                        placeholder="Đến..."
                                    />
                                </Space>
                            </Form.Item>

                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button onClick={onClearSearch} style={{ marginRight: "5px" }}>
                                    Clear
                                    <ClearOutlined />
                                </Button>
                                <Button onClick={onSearch}>
                                    Search
                                    <SearchOutlined />
                                </Button>
                            </Form.Item>
                        </Form>
                    </Drawer>
                    <h1 style={{ fontSize: "32px", textAlign: "center" }}>LIST</h1>
                    <Table dataSource={data} rowKey="id" pagination={false}>
                        <Column title="Tên sản phẩm" dataIndex="name" key="name" />
                        <Column title="Giá" dataIndex="price" key="price" render={(text) => {
                            return <span>{numeral(text).format("0,0")}đ</span>;
                        }} />
                        <Column title="Ảnh" dataIndex="img" key="img"
                            render={(_text, record) => {
                                return (
                                    <img src={record.img} style={{ width: "130px", height: "auto" }} alt='' />
                                );
                            }} />
                        <Column title="Giảm giá" dataIndex="discount" key="discount" />
                        <Column title="Tồn khko" dataIndex="stock" key="stock" />
                        <Column title="Mô tả / Ghi chú" dataIndex="description" key="description" />
                        <Column
                            title="Action"
                            key="action"
                            render={(record) => (
                                <Space size="middle">
                                    <Button
                                        type="primary"
                                        ghost
                                        icon={<EditOutlined />}
                                        onClick={() => {
                                            setOpen(true);
                                            setUpdateId(record._id);
                                            updateForm.setFieldsValue(record);
                                        }}
                                    >Sửa</Button>

                                    <Popconfirm
                                        placement="topRight"
                                        title={text}
                                        description={description}
                                        onConfirm={() => {
                                            axios.delete(apiName + "/" + record.id).then(() => {
                                                setRefresh((f) => f + 1);
                                                message.success("Xóa thành công!", 1.5);
                                            });
                                        }}
                                        okText="Có"
                                        cancelText="Không"
                                    >
                                        <Button
                                            danger
                                            icon={<DeleteOutlined />}
                                        >Xóa</Button>
                                    </Popconfirm>
                                </Space>
                            )}
                        />
                    </Table>
                    <Pagination
                        style={{ paddingTop: "15px" }}
                        total={total}
                        onChange={handlePageChange}
                    />

                    {/* EDIT FORM */}
                    <Modal
                        open={open}
                        title="Bảng cập nhật"
                        onCancel={() => {
                            setOpen(false);
                        }}
                        cancelText="Đóng"
                        okText="Cập nhật"
                        onOk={() => {
                            updateForm.submit();
                        }}
                    >
                        <Form
                            form={updateForm}
                            name="update-form"
                            onFinish={onUpdateFinish}
                            labelCol={{
                                span: 8,
                            }}
                            wrapperCol={{
                                span: 16,
                            }}
                        >
                            <Form.Item
                                label="Tên sản phẩm"
                                name="name"
                                hasFeedback
                                required={true}
                                rules={[
                                    {
                                        required: true,
                                        message: "Bắt buộc phải nhập",
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item label="Ảnh" name="img">
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Giá"
                                name="price"
                                hasFeedback
                                required={true}
                                rules={[
                                    {
                                        required: true,
                                        message: "Input to required",
                                    },
                                ]}
                            >
                                <InputNumber min={0} style={{ width: 250 }} />
                            </Form.Item>

                            <Form.Item label="Giảm giá" name="discount" hasFeedback>
                                <InputNumber min={0} max={99} style={{ width: 250 }} />
                            </Form.Item>

                            <Form.Item label="Tồn kho" name="stock" hasFeedback>
                                <InputNumber min={0} style={{ width: 250 }} />
                            </Form.Item>

                            <Form.Item label="Mô tả / Ghi chú" name="description" hasFeedback>
                                <Input style={{ width: 250 }} />
                            </Form.Item>
                        </Form>
                    </Modal>
                </>
            )}
        </div>
    )
}
