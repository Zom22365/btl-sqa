import { Button, Menu } from 'antd';
import React, { useState } from 'react'
import { FaHome, FaListUl, FaClipboardList } from 'react-icons/fa';
import { AiOutlineSetting, AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { Link } from 'react-router-dom';


const HeaderComponent = () => {
    const [collapsed, setCollapsed] = useState(false);
    const [active, setActive] = useState(localStorage.getItem('active') || '1')
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };
    return (<div
        style={{ background: 'rgb(39 52 76)', height: 'auto', minHeight: '100vh' }}
    >
        <Button
            onClick={toggleCollapsed}
            style={{
                marginBottom: 16,
                color: '#fff',
                border: 'none',
                float: 'right',
                height: '70px'
            }}
        >
            {collapsed ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />}
        </Button>
        <Menu
            className='menu'
            style={{ background: 'rgb(39 52 76)', color: '#fff', fontSize: '20px' }}
            defaultSelectedKeys={active}
            defaultOpenKeys={['sub1', 'sub2']}
            mode="inline"
            inlineCollapsed={collapsed}
        >
            <Menu.Item key="1" icon={<FaHome />}>
                <Link to="/auth/dashboard" onClick={() => localStorage.setItem('active', '1')}>
                    Trang chủ
                </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<FaListUl />}>
                <Link to="/auth/all/taxer" onClick={() => localStorage.setItem('active', '2')}>
                    Theo dõi danh sách
                </Link>
            </Menu.Item>
            <Menu.SubMenu key="sub1" title="Xem báo cáo" icon={<FaClipboardList />}>
                <Menu.ItemGroup>
                    <Menu.Item key="4" onClick={() => localStorage.setItem('active', '4')} >
                        <Link to="/auth/done/taxer">
                            Xem danh sách người đã đóng thuế
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="5" onClick={() => localStorage.setItem('active', '5')}>
                        <Link to="/auth/notdone/taxer" >
                            Xem danh sách người chưa đóng thuế
                        </Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu>

            <Menu.SubMenu key="sub2" title="Cấu hình thuế" icon={<AiOutlineSetting />}>
                <Menu.ItemGroup>
                    <Menu.Item key="6" onClick={() => localStorage.setItem('active', '6')} >
                        <Link to="/auth/view/config">
                            Cấu hình thuế hiện tại
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="7" onClick={() => localStorage.setItem('active', '7')}>
                        <Link to="/auth/update/config" >
                            Cập nhập cấu hình
                        </Link>
                    </Menu.Item>
                </Menu.ItemGroup>
            </Menu.SubMenu>

        </Menu>
    </div>);
}

export default HeaderComponent;