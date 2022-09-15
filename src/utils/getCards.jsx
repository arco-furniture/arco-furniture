import {Card} from "../components";

export const getCards = (items) => {
    return items.map((item) => (<Card key={item.id} item={item}/>))
}