import Chip from "@mui/material/Chip";

const Tag = ({tag, isCard = false}) => {
    const tagColors = [{top: '#E13B3F'}, {new: '#4675CE'}, {discount: '#5AB45E'}, {eco: '#9d6e3d'}]
    const tagLabels = [{top: 'top'}, {new: 'new'}, {discount: '%'}, {eco: 'eco'}]

    const handleColorTag = (tag) => {
        const findTag = tagColors.find(item => Object.keys(item).join() === tag)
        if (findTag && Object.keys(findTag).join() === tag) {
            const colorTag = Object.values(findTag).join()
            return {backgroundColor: colorTag, color: '#fff'}
        }
        return {opacity: 0, overflow: 'hidden'}
    }

    const handleLabelTag = (tag) => {
        const findTag = tagLabels.find(item => Object.keys(item).join() === tag)
        if (findTag && Object.keys(findTag).join() === tag) {
            return Object.values(findTag).join().toUpperCase()
        }
        return ''
    }

    return(
        <div className={`tag ${isCard && 'card-tag'}`}>
            <Chip sx={{fontSize: '12px'}} style={handleColorTag(tag)} label={handleLabelTag(tag)} size="small" />
        </div>
    )
}

export default Tag;