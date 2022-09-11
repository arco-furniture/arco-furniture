import Chip from "@mui/material/Chip";

const CardMark = ({mark}) => {
    const markColors = [{top: '#E13B3F'}, {new: '#4675CE'}, {discount: '#5AB45E'}, {eco: '#9d6e3d'}]
    const markLabels = [{top: 'top'}, {new: 'new'}, {discount: '%'}, {eco: 'eco'}]

    const handleColorMark = (mark) => {
        const findMark = markColors.find(item => Object.keys(item).join() === mark)
        if (findMark && Object.keys(findMark).join() === mark) {
            const colorMark = Object.values(findMark).join()
            return {backgroundColor: colorMark, color: '#fff'}
        }
        return {opacity: 0, overflow: 'hidden'}
    }

    const handleLabelMark = (mark) => {
        const findMark = markLabels.find(item => Object.keys(item).join() === mark)
        if (findMark && Object.keys(findMark).join() === mark) {
            return Object.values(findMark).join().toUpperCase()
        }
        return ''
    }

    return(
        <div className="card__mark">
            <Chip sx={{fontSize: '12px'}} style={handleColorMark(mark)} label={handleLabelMark(mark)} size="small" />
        </div>
    )
}

export default CardMark;