import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigation = useNavigate()

    useEffect(() => {
        const isLogin = localStorage.getItem("username") || ""
        if (isLogin !== "") {
            navigation("/")
        }

    })

    const [account, setAccount] = useState({
        username: "",
        password: ""
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setAccount({
            ...account,
            [name]: value
        })
    }
    const handleSubmit = () => {
        if (account.username == "" && account.password == "") {
            alert("Không được để trống")
        } else if (account.username == "" && account.password !== "") {
            alert("Tên tài khoản không được để trống")
        } else if (account.username !== "" && account.password == "") {
            alert("Mật khẩu không được để trống")
        } else {
            // if (account.username == "admin" && account.password == "admin") {
            //     localStorage.setItem("username", "admin")
            //     navigation("/")
            // }
            axios.post("http://26.84.40.231:8081/checklogin", account)
                .then(res => {
                    if (res.data.role.isAdmin == 1) {
                        localStorage.setItem("username", res.data.username)
                        navigation("/")
                    }

                }).catch(err => {
                    alert("Đăng nhập không thành công.")
                })
        }
    }
    return (<div style={{ background: 'rgb(39 52 76)', height: '100vh', paddingTop: "200px" }}>
        <div style={{ width: '350px', height: '450px', margin: "0px auto", padding: '24px', background: '#fff' }}>
            <h1 style={{ textAlign: 'center', fontWeight: '700', textTransform: 'uppercase', fontSize: '24px' }}>Đăng nhập</h1>
            <div style={{ borderTop: '1px solid #000', marginTop: '20px', paddingTop: '20px' }}>
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: 'block', fontSize: '16px', marginBottom: '7px' }}>Tài khoản:</label>
                    <input
                        type='text'
                        style={{
                            border: '1px solid #000',
                            width: '100%',
                            padding: '5px 16px'
                        }}
                        name='username'
                        onChange={handleChange}
                    />
                </div>
                <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: 'block', fontSize: '16px', marginBottom: '7px' }}>Mật khẩu:</label>
                    <input
                        type='password'
                        style={{
                            border: '1px solid #000',
                            width: '100%',
                            padding: '5px 16px'
                        }}
                        name='password'
                        onChange={handleChange}
                    />
                </div>
                <div style={{ borderTop: '1px solid #000', marginTop: '20px', paddingTop: '20px' }}>
                    <button
                        style={{
                            width: '100%',
                            background: 'rgb(39 52 76)',
                            color: "#fff",
                            padding: '10px',
                            fontWeight: 600
                        }}
                        onClick={handleSubmit}>Đăng nhập</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Login;