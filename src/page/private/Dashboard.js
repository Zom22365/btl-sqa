import React from 'react'
import Format from '../../layout/format';
import { Table } from 'antd';
const Dashboard = () => {
    return (
        <Format>
            <div className='main-content'>
                <Table></Table>
            </div>
        </Format>
    );
}

export default Dashboard;