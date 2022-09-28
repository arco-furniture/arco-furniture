import {Card} from "../components";
import {IItem} from "../types/itemTypes";

export const getCards = (items: IItem[]) => {
    return items.map((item) => <Card key={item.id} item={item} />)
}
