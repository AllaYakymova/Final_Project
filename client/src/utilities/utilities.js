export const cart = ['1', '3']
const axios = require('axios');

axios.get('http://localhost:5000/api/catalog').then(catalog => {
  console.log(catalog)
}).catch(err => {
  console.log(err)
  /* Do something with error, e.g. show error to user */
});

export const products = [{
  id: '1',
  name: 'Jacket',
  price: 333,
  color: ['red', 'blue', 'black'],
  image: 'https://cache.mrporter.com/variants/images/23471478576347461/in/w208_q80.jpg',
  size: ['m', 'l', 'xl', 'xxl'],
},
{
  id: '2',
  name: 'Jacket',
  price: 333,
  color: ['red', 'blue', 'black'],
  image: 'https://cache.mrporter.com/variants/images/23471478576347461/in/w208_q80.jpg',
  size: ['m', 'l', 'xl', 'xxl'],
},
{
  id: '3',
  name: 'Jacket',
  price: 333,
  color: ['red', 'blue', 'black'],
  image: 'https://cache.mrporter.com/variants/images/23471478576347461/in/w208_q80.jpg',
  size: ['m', 'l', 'xl', 'xxl'],
},
{
  id: '4',
  name: 'Jacket',
  price: 333,
  color: ['red', 'blue', 'black'],
  image: 'https://cache.mrporter.com/variants/images/23471478576347461/in/w208_q80.jpg',
  size: ['m', 'l', 'xl', 'xxl'],
}]
