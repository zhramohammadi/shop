const productList = [
    {
        id:'1',
        title: 'headset',
        price:59000,
        image:'/images/headset.jpg' 
    },
    {
        id:'2',
        title: 'headset',
        price:73000,
        image:'/images/headphone.jpg' 
    },
    {
        id:'3',
        title: 'ipad',
        price:45000,
        image:'/images/ipad1.jpg' 
    },
    {
        id:'4',
        title: 'ipad',
        price:40000,
        image:'/images/ipad.jpg' 
    },
    {
        id:'5',
        title: 'Xiaomi',
        price:10000,
        image:'/images/Xiaomi.jpg' 
    },
    {
        id:'6',
        title: 'iphon',
        price:30000,
        image:'/images/iphon.jpg' 
    },
    {
        id:'7',
        title: 'iphon x',
        price:50000,
        image:'/images/iphone-.jpg' 
    },
    {
        id:'8',
        title: 'samsung',
        price:25000,
        image:'/images/samsung.webp' 
    },
    {
        id:'9',
        title: 'computer',
        price:12800000,
        image:'/images/computer3.jpg' 
    },
    {
        id:'10',
        title: 'computer',
        price:12800000,
        image:'/images/computer4.jpg' 
    },
    {
        id:'11',
        title: 'computer',
        price:12800000,
        image:'/images/computer5.webp' 
    },
    {
        id:'12',
        title: 'computer',
        price:12800000,
        image:'/images/computer6.jpg' 
    },
    {
        id:'13',
        title: 'kyboard ',
        price:12800000,
        image:'/images/accessories1.jpg' 
    },
    {
        id:'14',
        title: 'kyboard ',
        price:12800000,
        image:'/images/accessories2.jpg' 
    },
    {
        id:'15',
        title: 'mouse ',
        price:12800000,
        image:'/images/accessories3.jpg' 
    },
    {
        id:'16',
        title: 'mouse ',
        price:12800000,
        image:'/images/accessories4.jpg' 
    },
]

function getProductData(id){
  let productDate = productList.find((item )=>item.id === id)
  return productDate;
}

export {productList, getProductData}