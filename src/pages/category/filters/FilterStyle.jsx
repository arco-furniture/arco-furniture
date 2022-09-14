import Chip from "@mui/material/Chip";

const FilterStyle = () => {
    const styles = [
        {style: "Классический"},
        {style: "Прованс"},
        {style: "Модерн"},
        {style: "Лофт"},
        {style: "Скандинавский"},
    ]

    return(
        <div className="filters__filter-style">
            <ul>
                {
                    styles.map((item, index) => {
                        return(
                            <li key={index}>
                                <Chip
                                    style={{color: '#414141'}}
                                    label={item.style}
                                    onClick={() => console.log('1')}
                                />
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default FilterStyle;