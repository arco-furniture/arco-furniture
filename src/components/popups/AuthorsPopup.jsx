import styles from "../../scss/modules/authorsPopup.module.scss"
import authors from "../../images/Artboard.svg"
import Chip from "@mui/material/Chip";
import GitHubIcon from '@mui/icons-material/GitHub';
import Confetti from "react-confetti";
import Dialog from "@mui/material/Dialog";
import {DialogContent} from "@mui/material";
import useWindowSize from "react-use/lib/useWindowSize";
import {useDispatch, useSelector} from "react-redux";
import {otherSelector, closeAuthorsPopup} from "../../redux/other/otherSlice";

const AuthorsPopup = () => {
    const authorsName = [
        {name: "Петерс Максим", link: 'https://github.com/kejjero'},
        {name: "Иван Рамзанов", link: 'https://github.com/IvanVideo'},
        {name: "Илья Илья", link: 'https://github.com/Lionen89'}
    ]
    const {width, height} = useWindowSize()
    const {statusAuthorsPopup} = useSelector(otherSelector)
    const dispatch = useDispatch()
    const handleClosePopup = () => {
        dispatch(closeAuthorsPopup())
    }

    return (
        <Confetti
            width={width - 25}
            height={height}
            style={{zIndex: '10000', margin: '0 auto'}}
            numberOfPieces={statusAuthorsPopup ? 150 : 0}
            recycle={statusAuthorsPopup}
            gravity={0.07}
        >
            <Dialog
                open={statusAuthorsPopup}
                onClose={() => dispatch(handleClosePopup)}
                minWidth="200px"
                fullWidth
            >
                <DialogContent>
                    <div className={styles.popup__container}>
                        <img className={styles.popup__img} src={authors} alt='authors'/>
                        <p className={styles.popup__text}>Над проектом работали</p>
                        <div className={styles.popup__bottom}>
                            {
                                authorsName.map((item, index) => {
                                    return (
                                        <a
                                            className={styles.popup__name}
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            style={{textDecoration: 'none'}}
                                        >
                                            <Chip
                                                lassName={styles.popup__name}
                                                color="primary"
                                                icon={<GitHubIcon/>}
                                                label={item.name}
                                                variant="outlined"
                                            />
                                        </a>
                                    )
                                })
                            }
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
        </Confetti>


    );
}

export default AuthorsPopup;