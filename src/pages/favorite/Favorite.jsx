import {homeSelector} from "../../redux/home/homeSlice"
import {useSelector} from "react-redux";
import {Card} from "../../components";

const Favorite = () => {
    const favorites = useSelector(homeSelector)
    const {favoriteData} = favorites

    return (
        <section className="favorite">
            <h2 className="title">Избранное</h2>
            <div className="favorite__items">
                {
                    favoriteData?.map((item) => {
                     return <Card key={item.id} item={item}/>
                    })
                }
            </div>
        </section>
    )
}

export default Favorite;