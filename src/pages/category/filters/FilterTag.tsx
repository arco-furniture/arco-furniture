import Tag from "../../../components/tag/Tag";
import React from "react";

const FilterTag: React.FC = () => {
    const tags = [{tag: "discount"}, {tag: "top"}, {tag: "eco"}, {tag: "new"}]

    return(
        <div  className="filters__filter-tag">
            <ul>
                {
                    tags.map((item, index) => (<Tag key={index} tag={item.tag} />))
                }
            </ul>
        </div>
    )
}

export default FilterTag;