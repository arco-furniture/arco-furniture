import Chip from '@mui/material/Chip';
import {Card} from "../index";
import {useEffect, useState} from "react";
import {fetchAdvice} from "../../redux/home/homeSlice";
import {homeSelector} from "../../redux/home/homeSlice"
import {useDispatch, useSelector} from "react-redux";
import CardSkeleton from "../card/CardSkeleton"
import SwiperCards from "../card/SwiperCards";

const Advice = () => {
    const {adviceData, adviceStatus} = useSelector(homeSelector);
    const [sortIndex, setSortIndex] = useState(0);
    const [filterRequest, setFilterRequest] = useState('')
    const dispatch = useDispatch()
    const sortActiveStyles = {backgroundColor: '#4675CE', opacity: 0.6, color: '#fff'}
    const sortDefaultStyles = {backgroundColor: '#F5F5F5', color: '#555'}
    const sortArray = [
        {name: "Все", advice: ""},
        {name: "Хиты продаж", advice: "top"},
        {name: "Новинки", advice: "new"},
        {name: "Скидки", advice: "discount"},
        {name: "Экологичные материалы", advice: "eco"}
    ]

    // Получаем данные из mockAPI по заданным фильтрам
    useEffect(() => {
        dispatch(fetchAdvice(filterRequest))
    }, [filterRequest])

    const handleSortItems = (index) => {
        setSortIndex(index)
        const requestName = sortArray[index].advice
        setFilterRequest(`?mark=${requestName}`)
    }
    //После того, как разделим Рекомендуемое и Категории товаров, уберем лишние прокидывания данных через карточку в
    // категорию товара
    const cards = adviceData.map((item) => {
        return (
            <Card
                key={item.id}
                item={item}
                // title={item.title}
                // price={item.price}
                // oldPrice={item.oldPrice}
                // advice={item.advice}
                // colors={item.colors}
                // images={item.images}
                // mark={item.mark}
            />
        )
    })

    const skeletons = new Array(4).fill(null).map((_item, index) => {
        return <CardSkeleton key={index}/>
    })

    return (
        <section className="advice">
            <ul className="advice__sort">
                {
                    sortArray.map((item, currentIndex) => {
                        return (
                            <li key={currentIndex}>
                                <Chip
                                    style={sortIndex === currentIndex ? sortActiveStyles : sortDefaultStyles}
                                    onClick={() => handleSortItems(currentIndex)}
                                    label={item.name}
                                />
                            </li>
                        )
                    })
                }
            </ul>
            <div className="advice__cards">
                {adviceStatus === 'loading' && skeletons}
                {adviceStatus === 'success' && <SwiperCards>{cards}</SwiperCards>}
            </div>
        </section>
    )
}
export default Advice;