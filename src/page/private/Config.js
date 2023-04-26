import React, { useEffect, useState } from 'react'
import Format from '../../layout/format';
import { getConfix } from '../../api/apiRecipe';
const Config = () => {
    const [config, setConfig] = useState([])
    useEffect(() => {
        getConfix().then(res => {
            console.log(res.data);
            setConfig(res.data)
        })
        // const data = res
        // console.log(res.json);
        // setConfig(data)
    }, [])
    return (<Format>
        <div className='main-content'>
            <h1 className='font-bold text-2xl '>Cấu hình đang áp dụng</h1>
            <div className='ml-10 mt-10'>

                <h1 className='font-bold text-xl mb-5'>Mức lương tối thiểu vùng</h1>
                <div className='ml-5'>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 1</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.vung1}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 2</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.vung2}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 3</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.vung3}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 4</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.vung4}</div>
                    </div>
                </div>
                <h1 className='font-bold text-xl mb-5'>Cấu hình giảm trừ gia cảnh</h1>
                <div className='ml-5'>
                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Giảm trừ gia cảnh</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.giamTruGiaCanh}</div>
                    </div>
                </div>
                <h1 className='font-bold text-xl mb-5'>Cấu hình giảm trừ người phụ thuộc</h1>
                <div className='ml-5'>
                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Giảm trừ người phụ thuộc</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.giamTruNguoiPhuThuoc}</div>
                    </div>
                </div>
                <h1 className='font-bold text-xl mb-5'>Cấu hình bảo hiểm</h1>
                <div className='ml-5'>
                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức đóng bảo hiểm y tế</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.mucDongBHYT}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức lương tối đa bảo hiểm y tế</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.mucLuongToiDaBHYT}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức đóng bảo hiểm xã hội</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.mucDongBHXH}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức lương tối đa bảo hiểm xã hội</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.mucLuongToiDaBHXH}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức đóng bảo hiểm thất nghiệp</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.mucDongBHTN}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức lương tối đa bảo hiểm thất nghiệp</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.mucLuongToiDaBHTN}</div>
                    </div>
                </div>
                <h1 className='font-bold text-xl mb-5'>Cấu hình thu nhập tính thuế</h1>
                <div className='ml-5'>
                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Nhỏ hơn 5 triệu</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.nhoHonBang5}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 5 đến 10 triệu</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.tu5den10}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 10 đến 18 triệu</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.tu10den18}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 18 đến 32 triệu</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.tu18den32}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 32 đến 52 triệu</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.tu32den52}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 52 đến 80 triệu</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.tu52den80}</div>
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Trên 80 triệu</strong>
                        <div
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                        >{config.tren80}</div>
                    </div>
                </div>
            </div>
        </div>
    </Format >);
}

export default Config;