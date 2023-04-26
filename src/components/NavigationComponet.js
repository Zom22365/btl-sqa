import React from 'react';

const NavigationComponent = () => {
    const name = localStorage.getItem("username") || ""
    return (
        <div className='nav flex gap-4 justify-between py-3 px-5'>

            <h1 className="slogan" >Hệ thống hỗ trợ tình thuế thu nhập cá nhân</h1>
            <div style={{ textAlign: 'center' }}>
                <img
                    style={{ margin: '5px auto' }}
                    className='avatar'
                    src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?w=740&t=st=1681898313~exp=1681898913~hmac=91254bc65227d5d21822719b4af156c5541153210441483a5a166392bddc60a7"
                    alt="avatar" />
                <h3>{name}</h3>
            </div>
        </div>
    );
}

export default NavigationComponent;