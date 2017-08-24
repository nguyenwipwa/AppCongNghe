import URL from '../URL';

export function getDetailProduct(id) {
    return fetch(`${URL.PRODUCT_DETAIL}${id}`)
        .then(res => res.json())
}