const TopOfHeader = () => {

    return (
        <>
        <div className='header__city'>
            <div className='header__city_logo'></div>
        </div>
        <ul className='header__nav'>
                <li className='header__nav_item'>Сборка</li>
                <li className='header__nav_item'>Оплата</li>
                <li className='header__nav_item'>Доставка</li>
            </ul>
        <a href="tel: +79615259191" className='header__phone'>8 (961) 525 91 91</a>
        </>
    )
}
export default TopOfHeader