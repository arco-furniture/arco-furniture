const CardColors = () => {
    const colorPalette = [{color: '#F3E7C6'}, {color: '#6D3D49'}, {color: '#877B6D'}]

    return (
        <ul className="card__colors">
            {
                colorPalette.map((palette, index) => {
                    return (
                        <li key={index} style={{backgroundColor: palette.color}}></li>
                    )
                })
            }
        </ul>
    )
}

export default CardColors;