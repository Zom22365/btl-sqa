import React, { useEffect, useState } from 'react'
import Format from '../../layout/format';
import { Table } from 'antd';
import { getAllUser } from '../../api/apiUsers';
import { useParams } from 'react-router-dom';

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

const Detail = () => {
    const [user, setUser] = useState({})
    let { id } = useParams()

    useEffect(() => {
        getAllUser().then(
            res => {
                const listResult = res.data.listResult;
                listResult.map((item) => {
                    if (id == item.maSoThue) {
                        setUser(item)
                    }
                })
            }
        )
    }, [])


    return (<Format>
        <div className='main-content'>
            <h1 className='font-bold text-2xl '>Khai báo thu nhập của người đóng thuế</h1>


        </div>
    </Format>);
}

export default Detail;