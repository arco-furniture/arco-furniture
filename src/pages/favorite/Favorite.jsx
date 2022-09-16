import {homeSelector} from "../../redux/home/homeSlice"
import {useSelector} from "react-redux";
import {getCards} from "../../utils/getCards";

const Favorite = () => {
    const favorites = useSelector(homeSelector)
    const {favoriteData} = favorites

    return (
        <section className="favorite">
            <h2 className="title">Избранное</h2>
            <div className="favorite__items">
                { getCards(favoriteData) }
            </div>
        </section>
    )
}

export default Favorite;