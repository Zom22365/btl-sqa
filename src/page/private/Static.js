import React, { useEffect, useState } from 'react'
import Format from '../../layout/format';
import { getConfix, postConfig } from '../../api/apiRecipe';
const Static = () => {
    const [config, setConfig] = useState({
        "giamTruGiaCanh": 110,
        "giamTruNguoiPhuThuoc": 1000,
        "mucDongBHYT": 2.0,
        "mucLuongToiDaBHYT": 1000,
        "mucDongBHXH": 1.0,
        "mucLuongToiDaBHXH": 0,
        "mucDongBHTN": 0.0,
        "mucLuongToiDaBHTN": 0,
        "vung1": 0,
        "vung2": 0,
        "vung3": 0,
        "vung4": 0,
        "nhoHonBang5": 0.0,
        "tu5den10": 0.0,
        "tu10den18": 0.0,
        "tu18den32": 0.0,
        "tu32den52": 0.0,
        "tu52den80": 0.0,
        "tren80": 0.0,
        "status": "active",
        "nguoiTao": null,
        "thueDuocKhais": null
    })

    useEffect(() => {
        getConfix().then(res => {
            console.log(res.data);
            setConfig(res.data)
        })
        // const data = res
        // console.log(res.json);
        // setConfig(data)
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setConfig({
            ...config,
            [name]: value
        })
    }

    const handSubmit = () => {
        console.log(config);
        postConfig(config).then(res => alert("Áp dụng thành công"))
            .catch(err => alert("Không thể tạo mới"))

    }
    return (<Format>
        <div className='main-content'>
            <h1 className='font-bold text-2xl '>Tạo cấu hình thuế mới</h1>
            <div className='ml-10 mt-10'>

                <h1 className='font-bold text-xl mb-5'>Mức lương tối thiểu vùng</h1>
                <div className='ml-5'>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 1</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="vung1"
                            value={config.vung1}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 2</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="vung2"
                            value={config.vung2}
                            onChange={handleChange}
                        />

                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 3</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="vung3"
                            value={config.vung3}
                            onChange={handleChange}
                        />

                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Vùng 4</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="vung4"
                            value={config.vung4}
                            onChange={handleChange}
                        />

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
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="giamTruGiaCanh"
                            value={config.giamTruGiaCanh}
                            onChange={handleChange}
                        />

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
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="giamTruNguoiPhuThuoc"
                            value={config.giamTruNguoiPhuThuoc}
                            onChange={handleChange}
                        />

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
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="mucDongBHYT"
                            value={config.mucDongBHYT}
                            onChange={handleChange}
                        />

                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức lương tối đa bảo hiểm y tế</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="mucLuongToiDaBHYT"
                            value={config.mucLuongToiDaBHYT}
                            onChange={handleChange}
                        />

                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức đóng bảo hiểm xã hội</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="mucDongBHXH"
                            value={config.mucDongBHXH}
                            onChange={handleChange}
                        />

                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức lương dối đa bảo hiểm xã hội</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="mucLuongToiDaBHXH"
                            value={config.mucLuongToiDaBHXH}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức đóng bảo hiểm thất nghiệp</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="mucDongBHTN"
                            value={config.mucDongBHTN}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Mức lương tối đa bảo hiểm thất nghiệp</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="mucLuongToiDaBHTN"
                            value={config.mucLuongToiDaBHTN}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <h1 className='font-bold text-xl mb-5'>Cấu hình thuế thu nhập tính thuế</h1>
                <div className='ml-5'>
                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Nhỏ hơn 5 triệu</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="nhoHonBang5"
                            value={config.nhoHonBang5}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 5 đến 10 triệu</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="tu5den10"
                            value={config.tu5den10}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 10 đến 18 triệu</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="tu10den18"
                            value={config.tu10den18}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 18 đến 32 triệu</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="tu18den32"
                            value={config.tu18den32}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 32 đến 52 triệu</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="tu32den52"
                            value={config.tu32den52}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Từ 52 đến 80 triệu</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="tu52den80"
                            value={config.tu52den80}
                            onChange={handleChange}
                        />
                    </div>

                    <div
                        // style={{ border: '1px solid #000' }}
                        className='flex gap-3 mb-5'>
                        <strong
                        // style={{ border: '1px solid #000' }}
                        >Trên 80 triệu</strong>
                        <input type="number"
                            style={{ border: '1px solid #000', padding: '2px 16px' }}
                            name="tren80"
                            value={config.tren80}
                            onChange={handleChange}
                        />
                    </div>


                </div>
            </div>
            <button
                style={{
                    background: 'rgb(39 52 76)',
                    padding: '8px 20px',
                    color: '#fff',
                    fontWeight: '500',
                    marginTop: '20px'
                }}
                onClick={handSubmit}

            >Áp dụng cấu hình</button>
        </div>
    </Format >);
}

export default Static;