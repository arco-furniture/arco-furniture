import React from "react"
import img from '../../../images/card-img.svg';
import { Box, Checkbox, Icon, IconButton } from "@mui/material";
import styles from "../../../scss/modules/basket/basket-item.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { removeItemForBasket } from "../../../redux/basket/basketSlice";
import { getPriceWithFormat } from "../../../utils/getPriceWithFormat";
import { getBuyStatusItem } from "../../../redux/basket/basketSlice";
import { specificationsStatus } from "../../../redux/basket/basketSlice";
import Button from '@mui/material/Button';
import { ButtonGroup } from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { basketSelector } from '../../../redux/basket/basketSlice';
import { moreCoutItem } from "../../../redux/basket/basketSlice";
import { lessCoutItem } from "../../../redux/basket/basketSlice";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import BasketSpecifications from './BasketSpecifications';

const BasketItem = (item) => {
    const dispatch = useDispatch();
    const stylesCountButtons = { border: '1px solid #D9D9D9', minWidth: '26px', padding: '0' }
    const stylesCountButtonLeft = { ...stylesCountButtons, borderRight: 'solid 0 #D9D9D9' }
    const stylesCountButtonRight = { ...stylesCountButtons, borderLeft: 'solid 0 #D9D9D9' }
    const { specifications } = useSelector(basketSelector);

    const handleRemoveCard = (item) => {
        dispatch(removeItemForBasket(item));
    }

    return (
        <div className={styles.item}>
            <img className={styles.item__image} src={item.image} alt='img' style={{ width: '188px' }} />
            <div className={styles.item__container}>
                <div className={styles.item__left}>
                    <div className={styles.item__box}>
                        <Checkbox
                            checked={item.item.active}
                            onClick={() => { dispatch(getBuyStatusItem(item)) }}
                            sx={{
                                width: '15px',
                                height: '15px',
                                mr: '5px'
                            }} />
                        <p className={styles.item__title}>{item.title}</p>
                    </div>
                    <div>
                        <div className={styles.item__box} style={{ marginTop: '37px' }}>
                            <p className={styles.item__text}>Цвет:</p>
                            <div className={styles.item__color} style={{ backgroundColor: item.color }} />
                        </div>
                        <div className={styles.item__specifications}>
                            <div className={styles.item__box}>
                                <p className={styles.item__text}>Характеристики товара</p>
                                <ArrowDropDownIcon className={styles.item__more} onClick={() => { dispatch(specificationsStatus(item)) }} />
                            </div>
                            <div style={{ display: item.item.specifications ? 'block' : 'none' }}>
                                {item.specs && item.specs.map((item, key) => (
                                    <BasketSpecifications key={key} item={item}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <ButtonGroup sx={{mt: '12px'}} size="small" variant="outlined" className={styles.item__button_group}>
                    <Button
                        className={styles.item__button_count}
                        style={stylesCountButtonLeft}
                        onClick={() => { dispatch(lessCoutItem(item)) }}
                    ><RemoveIcon />
                    </Button>
                    <Button style={{
                        borderLeft: 'solid 0 #D9D9D9',
                        minWidth: '24px',
                        color: '#414141',
                        fontSize: '14px',
                        padding: '0'
                    }} disabled>
                        {item.item.count}
                    </Button>
                    <Button
                        className={styles.item__button_count}
                        style={stylesCountButtonRight}
                        size="small"
                        onClick={() => { dispatch(moreCoutItem(item)) }}
                    ><AddIcon />
                    </Button>
                </ButtonGroup>
                <div className={styles.item__contain}>
                    <div>
                        <div style={{ justifyContent: 'space-between' }} className={styles.item__box}>
                            <p className={styles.item__price}>{getPriceWithFormat(item.item.count * item.oldPrice)} &#8381;</p>
                            <p className={styles.item__new}>{getPriceWithFormat(item.item.count * item.price)} &#8381;</p>
                        </div>
                        <p className={styles.item__prof}>выгода {getPriceWithFormat(item.oldPrice - item.price)} </p>
                    </div>
                    <div className={styles.item__box}>
                        <p style={{ marginRight: '15px' }} className={styles.item__artical}>Артикул: {item.article}</p>
                        <Button
                            className={styles.item__close}
                            onClick={() => handleRemoveCard(item)}
                            variant="outlined"
                            style={{
                                minWidth: '22px',
                                minHeight: '22px',
                                padding: '0',
                                border: '1px solid #D9D9D9'
                            }}
                        >
                            <CloseIcon style={{ color: '#D9D9D9' }} />
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BasketItem;