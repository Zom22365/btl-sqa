import React, { useEffect, useState } from 'react'
import Format from '../../layout/format';
import { Table } from 'antd';
import { getAllTax, getAllUser, getTaxById, getUserById } from '../../api/apiUsers';
const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        width: 100,
        align: "center",
        render: (text) => <a href='/auth/dashboard'>{text}</a>,
    },
    {
        title: 'Mã số thuế',
        dataIndex: 'maSoThue',
        key: 'maSoThue',
        width: 220,
        align: "center",
    },
    {
        title: 'Họ và tên',
        dataIndex: 'name',
        key: 'name',
        width: 300,
    }
    ,
    {
        title: 'Số điện thoại',
        dataIndex: 'sdt',
        key: 'sdt',
        width: 220,
    },
    {
        title: 'Địa chỉ email',
        dataIndex: 'email',
        key: 'email',
        width: 300,
    }
    ,
    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: 'address'
    }
]

const DoneUser = () => {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 20,
        },
    });

    useEffect(() => {
        async function getUsers() {
            const res = await getAllTax();
            const listUser = res.data
            let data = []
            let count = 0
            listUser.list.map((item, index) => {
                if (item.trangThai == "1") {

                    getUserById(item.nguoiDungId).then(res => {

                        const user = res.data
                        if (user.role.isAdmin !== 1) {
                            count = count + 1
                            data.push({
                                key: index,
                                id: user.id,
                                stt: count,
                                maSoThue: user.maSoThue,
                                name: user.name,
                                sdt: user.sdt,
                                email: user.email,
                                address: user.diaChi
                            })
                            setUsers(data)

                        }
                    })


                }
            })


        }
        getUsers()

    }, [])

    const handleTableChange = (pagination, filters, sorter) => {
        setTableParams({
            pagination,
            filters,
            ...sorter,
        });

        if (pagination.pageSize !== tableParams.pagination?.pageSize) {
            setUsers([]);
        }
    };

    return (
        <Format>
            <div className='main-content'>
                <Table
                    columns={columns}
                    dataSource={users}
                    pagination={tableParams.pagination}
                    loading={loading}
                    onChange={handleTableChange}
                    scroll={{
                        y: 650
                    }}
                    onRow={(item) => ({
                        onClick: () => (console.log(item.id))
                    })}
                />
            </div>
        </Format>
    );
}

export default DoneUser;