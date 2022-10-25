import React from 'react';
import './left-banner.scss';

const LeftBanner = () => {
    const [currentNav ,setCurrentNav] = React.useState('nap-the')

    return (
        <>
            <div className="c-left-banner">
                <div className="c-nav">
                    <div className={`c-nav__item ${currentNav == 'nap-the' ? 'active' : ''}`} onClick={() => setCurrentNav('nap-the')}>
                        Nạp thẻ
                    </div>
                    <div className={`c-nav__item ${currentNav == 'top-nap-10' ? 'active' : ''}`} onClick={() => setCurrentNav('top-nap-10')}>
                        Top nạp 10
                    </div>
                    <div className={`c-nav__item ${currentNav == 'phan-thuong' ? 'active' : ''}`} onClick={() => setCurrentNav('phan-thuong')}>
                        Phần thưởng
                    </div>
                </div>
                <div className="c-content">
                    {
                        currentNav == 'nap-the' ? 
                            <div className="c-content-1">
                                <select className="c-input-item">
                                    <option>Chọn loại thẻ</option>
                                    <option value="">abc</option>
                                    <option value="">abc</option>
                                </select>
                                <select className="c-input-item">
                                    <option>-- Chọn đúng mệnh giá. Sai mất thẻ --</option>
                                    <option value="">abc</option>
                                    <option value="">abc</option>
                                </select>
                                <input className="c-input-item" type="text" placeholder="Mã số thẻ"/>
                                <input className="c-input-item" type="text" placeholder="Mã serial"/>
                                <button>
                                    Nạp thẻ
                                </button>
                            </div>
                        : currentNav == 'top-nap-10' ?
                            <div className="c-content-2">
                                <div className="c-user-list">
                                    <div className="c-user-item">
                                        <div className="c-user-info">
                                            <div className="c-number">
                                                1
                                            </div>
                                            <div className="c-name">
                                                Nhật Long
                                            </div>
                                        </div>
                                        <div className="c-amount">
                                            1500000 <sup>đ</sup>
                                        </div>
                                    </div>
                                    <div className="c-user-item">
                                        <div className="c-user-info">
                                            <div className="c-number">
                                                1
                                            </div>
                                            <div className="c-name">
                                                Nhật Long
                                            </div>
                                        </div>
                                        <div className="c-amount">
                                            1500000 <sup>đ</sup>
                                        </div>
                                    </div>
                                    <div className="c-user-item">
                                        <div className="c-user-info">
                                            <div className="c-number">
                                                1
                                            </div>
                                            <div className="c-name">
                                                Nhật Long
                                            </div>
                                        </div>
                                        <div className="c-amount">
                                            1500000 <sup>đ</sup>
                                        </div>
                                    </div>
                                    <div className="c-user-item">
                                        <div className="c-user-info">
                                            <div className="c-number">
                                                1
                                            </div>
                                            <div className="c-name">
                                                Nhật Long
                                            </div>
                                        </div>
                                        <div className="c-amount">
                                            1500000 <sup>đ</sup>
                                        </div>
                                    </div>
                                    <div className="c-user-item">
                                        <div className="c-user-info">
                                            <div className="c-number">
                                                1
                                            </div>
                                            <div className="c-name">
                                                Nhật Long
                                            </div>
                                        </div>
                                        <div className="c-amount">
                                            1500000 <sup>đ</sup>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        : currentNav == 'phan-thuong' ?
                            <div className="c-content-3">
                                TOP Nạp Thẻ Chốt Vào Ngày Cuối Tháng:
                                <br />
                                TOP 1: 5.000 QUÂN HUY
                                <br />
                                TOP 2: 2.000 QUÂN HUY
                                <br />
                                TOP 3: 1.000 QUÂN HUY
                                <br />
                                TOP 4: 500 QUÂN HUY
                                <br />
                                TOP 5: 200 QUÂN HUY
                                <br />
                                Shop Sẽ Chọn Thêm 10 Bạn Ngẫu Nhiên:
                                <br />
                                5 Bạn Nạp &gt;200k Sẽ Nhận Được: 200 QH
                                <br />
                                5 Bạn Nạp &gt;100k Sẽ Nhận Được: 100 QH
                            </div>
                        : null
                    }
                </div>
            </div>
        </>
    )
}

export default LeftBanner;