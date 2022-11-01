import s from "../../../../scss/modules/search.module.scss";
import Card from "../../../card/Card";
import item from "../../../../utils/item";
import React, {useEffect} from "react";
import SwiperCards from "../../../card/SwiperCards";
import {useDispatch, useSelector} from "react-redux";
import {homeSelector} from "../../../../redux/home/homeSlice";
import {getCards} from "../../../../utils/getCards";
import {fetchSearch} from "../../../../redux/home/homeSlice"
import {getSkeletonCards} from "../../../../utils/getSkeletonCards";

const SearchContent: React.FC<any> = ({isVisible, setIsVisible, value}) => {
    const {searchData, searchStatus} = useSelector(homeSelector);
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchSearch(value))
    },[value])

    return (
        isVisible &&
        <React.Fragment>
            <div className={s.searchPage__background} onClick={() => setIsVisible(false)}></div>
            <div className={s.searchPage__content}>
                {searchStatus === 'loading' && value.length && getSkeletonCards(4)}
                {searchStatus === 'success' && <SwiperCards>{getCards(searchData)}</SwiperCards>}
            </div>
        </React.Fragment>
    )
}

export default SearchContent;