import React from "react";
import SkeletonCard from "../components/skeletons/SkeletonCard";

export const getSkeletonsCard = (value) => {
    return new Array(value).fill(null).map((_item, index) => (<SkeletonCard key={index}/>))
}