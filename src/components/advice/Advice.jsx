import Chip from '@mui/material/Chip';
import {Card} from "../index";

const Advice = () => {
    return(
        <section className="advice">
            <h2 className="title">Рекомендуем</h2>
            <ul className="advice__sort">
                <li><Chip label="Хиты продаж"/></li>
                <li><Chip label="Новинки"/></li>
                <li><Chip label="Скидки + рассрочка"/></li>
                <li><Chip label="Экологичные материалы"/></li>
            </ul>
            <div className="advice__cards">
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </div>
        </section>
    )
}
export default Advice;