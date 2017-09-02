export default function changeMoney(n) {
    const money = n.toFixed(1).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
    return money.substr(0, money.length - 2);
}