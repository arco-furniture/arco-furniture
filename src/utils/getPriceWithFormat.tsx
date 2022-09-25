export const getPriceWithFormat = (value: any) => {
    return parseFloat(value).toFixed(0).replace(/\B(?=(?:\d{3})*$)/g, ' ');
}