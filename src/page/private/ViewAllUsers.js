import React, { useEffect, useState } from 'react'
import Format from '../../layout/format';
import { Table } from 'antd';
import { getAllUser } from '../../api/apiUsers';
import { Link } from 'react-router-dom';

const columns = [
    {
        title: 'STT',
        dataIndex: 'stt',
        key: 'stt',
        width: 100,
        align: "center",
    },
    {
        title: 'Mã số thuế',
        dataIndex: 'maSoThue',
        key: 'maSoThue',
        width: 220,
        align: "center",
        render: (text) => <Link to={`${text}`}>{text}</Link>,
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

const ViewAllUsers = () => {
    const [display, setDisplay] = useState(true)
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState([]);
    const [inputSearch, setInputSearch] = useState([]);
    const [result, setResult] = useState("");
    const [loading, setLoading] = useState(false);
    const [tableParams, setTableParams] = useState({
        pagination: {
            current: 1,
            pageSize: 20,
        },
    });

    const handleInput = (e) => {
        const { value } = e.target
        setInputSearch(value)

    }
    const handleSearch = () => {
        if (inputSearch !== "") {
            const res = users.filter((item) => item.maSoThue.includes(inputSearch))
            setResult(res)
            setDisplay(false)
        } else {
            setDisplay(true)
        }
    }

    useEffect(() => {
        async function getUsers() {
            const res = await getAllUser();
            const dataUsers = await res.data;
            const listUser = dataUsers.listResult
            let data = []
            let count = 0
            listUser.map((item, index) => {
                if (item.role.isAdmin !== 1) {
                    count = count + 1;
                    data.push({
                        key: index,
                        id: item.id,
                        stt: count,
                        maSoThue: item.maSoThue,
                        name: item.name,
                        sdt: item.sdt,
                        email: item.email,
                        address: item.diaChi
                    })
                }

            })
            setUsers(data)
        }
        getUsers()
        console.log(users);

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

    // const handleSelect = (e) => {
    //     const { value } = e.target
    //     alert(value)

    // }

    return (<Format>
        <div className='main-content'>
            <div
            // style={{ display: 'flex', justifyContent: "space-between" }}
            >
                <div style={{ marginBottom: '20px' }}>
                    <input
                        style={{ border: '1px solid #000', padding: '8px 16px', marginRight: '10px' }}
                        placeholder='Nhập mã số thuế...'
                        onChange={handleInput}
                    />
                    <button
                        onClick={handleSearch}
                        style={{
                            background: 'rgb(39 52 76)',
                            padding: '8px 24px',
                            color: '#fff'
                        }}
                    >Tìm kiếm</button>
                </div>
                {/* <div>
                    <select onChange={handleSelect}>
                        <option
                        >-- Lựa chọn vùng --</option>
                        <option
                            value="vung1"
                        >Vùng 1</option>
                        <option
                            value="vung2"
                        >Vùng 2</option>
                        <option
                            value="vung3"
                        >Vùng 3</option>
                        <option
                            value="vung4"
                        >Vùng 4</option>
                    </select>
                </div> */}
            </div>
            {display &&
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
            }
            {!display &&
                <Table
                    columns={columns}
                    dataSource={result}
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
            }
        </div>
    </Format>);
}

export default ViewAllUsers;