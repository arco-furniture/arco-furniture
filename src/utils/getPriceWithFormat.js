export const getPriceWithFormat = (value) => {
    return parseFloat(value).toFixed(0).replace(/\B(?=(?:\d{3})*$)/g, ' ');
}