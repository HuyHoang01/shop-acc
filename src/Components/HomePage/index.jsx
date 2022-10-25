import HomeBanner from "./HomeBanner";

const HomePage = () => {
    return (
        <>
            <HomeBanner />
            <div className="container" style={{backgroundColor: 'rgba(0,0,0,0.8)'}}>
                <marquee>
                    <p style={{margin: 0, padding: '16px', color: '#fff'}}>
                        <strong>
                            Chúc Mừng Tr*** Vừa Nạp 20.000đ Được Nhận 999 Quân Huy, Chúc Mừng sam*** Vừa Nạp 50.000đ
                            Được Nhận 777 Quân Huy, Chúc Mừng Đội Thắngg*** Vừa Nạp 200.000đ Được Nhận 899 Quân Huy,
                            Chúc Mừng Phan*** Vừa Nạp 20.000đ Được Nhận 888 Quân Huy, Chúc Mừng lamg*** Vừa Nạp 20.000đ
                            Được Nhận 455 Quân Huy, Chúc Mừng vangnau*** Vừa Nạp 50.000đ Được Nhận 520 Quân Huy,
                            Chúc Mừng Trần Tâ*** Vừa Nạp 50.000đ Được Nhận 988 Quân Huy, Chúc Mừng quyv*** Vừa Nạp 200.000đ
                            Được Nhận 970 Quân Huy, Chúc Mừng longro*** Vừa Nạp 20.000đ Được Nhận 666 Quân Huy
                        </strong>
                    </p>
                </marquee>
            </div>
        </>
    )
}

export default HomePage;