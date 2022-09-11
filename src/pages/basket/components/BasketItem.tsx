import React from "react"
import img from '../../../images/card-img.svg';
import {Checkbox} from "@mui/material";
import styles from "../../../scss/modules/basket/basket-item.module.scss";
import {useDispatch} from "react-redux";
import {removeItemForCart} from "../../../redux/product/productSlice";
import {getPriceWithFormat} from "../../../utils/getPriceWithFormat";
import Button from '@mui/material/Button';
import {ButtonGroup} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const BasketItem: React.FC = (item: any) => {
    const dispatch = useDispatch();
    const stylesCountButtons = {border: '1px solid #D9D9D9', minWidth: '26px', padding: '0'}
    const stylesCountButtonLeft = {...stylesCountButtons, borderRight: 'solid 0 #D9D9D9'}
    const stylesCountButtonRight = {...stylesCountButtons, borderLeft: 'solid 0 #D9D9D9'}

    const handleRemoveCard = (item: any) => {
        dispatch(removeItemForCart(item.id));
    }

    return (
        <div className={styles.item}>
            <img src={item.image} alt='img' style={{width: '188px'}}/>
            <div className={styles.item__container}>
                <div>
                    <div className={styles.item__box}>
                        <Checkbox defaultChecked/>
                        <p className={styles.item__title}>{item.title}</p>
                    </div>
                    <div className={styles.item__box} style={{marginTop: '37px'}}>
                        <p className={styles.item__text}>Цвет:</p>
                        <div className={styles.item__color}/>
                    </div>
                    <p className={styles.item__text}>Характеристики товара</p>
                </div>
                <ButtonGroup size="small" variant="outlined">
                    <Button
                        className={styles.item__button_count}
                        style={stylesCountButtonLeft}
                    ><RemoveIcon/>
                    </Button>
                    <Button style={{
                        borderLeft: 'solid 0 #D9D9D9',
                        minWidth: '24px',
                        color: '#414141',
                        fontSize: '14px',
                        padding: '0'
                    }} disabled>
                        1
                    </Button>
                    <Button
                        className={styles.item__button_count}
                        style={stylesCountButtonRight}
                        size="small"
                    ><AddIcon/>
                    </Button>
                </ButtonGroup>
                <div className={styles.item__contain}>
                    <div className={styles.item__box}>
                        <p className={styles.item__price}>{getPriceWithFormat(item.oldPrice)} &#8381;</p>
                        <p className={styles.item__new}>{getPriceWithFormat(item.price)} &#8381;</p>
                    </div>
                    <p className={styles.item__prof}>выгода {getPriceWithFormat(item.oldPrice - item.price)} </p>
                    <div className={styles.item__box}>
                        <p className={styles.item__artical}>Артикул: {item.article}</p>
                        <Button
                            className={styles.item__close}
                            onClick={() => handleRemoveCard(item)}
                            variant="outlined"
                            style={{
                                minWidth: '22px',
                                minHeight: '22px',
                                padding: '0',
                                border: '1px solid #D9D9D9'}}
                        >
                            <CloseIcon style={{color: '#D9D9D9'}}/>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;