import { Injectable } from '@angular/core';
import { productInterface } from '../Interface/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
products:productInterface[]=[
  {
    product_id: '748837',
    name: 'electric kettle',
    price: 1500,
    brand: 'itel',
    description: 'fast, efficient and energy saving',
    specification: 'black kettle,one kettle in the box',
    image: 'https://th.bing.com/th/id/OIP.kKxB_9D-SokEfXkaj4uLAAHaHa?pid=ImgDet&rs=1',
    thumbnail_1: 'https://th.bing.com/th/id/OIP.kKxB_9D-SokEfXkaj4uLAAHaHa?pid=ImgDet&rs=1',
    thumbnail_2: 'https://www.hockloong.com/image/hockloong/image/cache/data/all_product_images/product-1289/7b0b69d96be0ffa9570ca2e4c313d7a4-1024x1024.jpg',
    thumbnail_3: 'https://th.bing.com/th/id/OIP.3GcSis0d1Pjwfpfw41_VLwAAAA?pid=ImgDet&rs=1',
  },
  {
    product_id: '3784774',
    name: 'instant shower',
    price: 1200,
    brand: 'horizon',
    description: 'instant, long lasting energy saving',
    specification: 'one white shower head in the box',
    image: 'https://www.shoppersbd.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/_/2_18.jpg',
    thumbnail_1:'https://www.shoppersbd.com/media/catalog/product/cache/1/thumbnail/9df78eab33525d08d6e5fb8d27136e95/2/_/2_18.jpg',
    thumbnail_2: 'https://www.shoppersbd.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/h/shower.jpg',
    thumbnail_3: 'https://d12prgon3aw7l1.cloudfront.net/2172912_img-20190808-173035_1600x2134.jpg',
  },
  {
    product_id: '6938847',
    name: 'Lenovo thinkpad X131e',
    price: 30000,
    brand: 'lenovo',
    description: 'fast, efficient and energy saving',
    specification: 'one black laptop and a charger in the box',
    image: 'https://th.bing.com/th/id/OIP.Mn4_prUE-5tm1Ox46SDfXQHaHa?pid=ImgDet&rs=1',
    thumbnail_1: 'https://th.bing.com/th/id/OIP.Mn4_prUE-5tm1Ox46SDfXQHaHa?pid=ImgDet&rs=1',
    thumbnail_2: 'https://th.bing.com/th/id/OIP.TilXoEQucEEQQeLkwbE6FgHaHa?pid=ImgDet&rs=1',
    thumbnail_3: 'https://th.bing.com/th/id/R.ac9178e160251dc75967380f9a142c7d?rik=cgGTXEIXKP%2fG5A&pid=ImgRaw&r=0',
  },
  {
    product_id: '9847739',
    name: 'Big Nike High',
    price: 5000,
    brand: 'Nike',
    description: 'fashinable and long lasting',
    specification: 'one pair of white shoes in the box',
    image: 'https://th.bing.com/th/id/R.8fa83dacf8cdde0668a2d0a4f817aaca?rik=bUg3Rab2aubUHg&pid=ImgRaw&r=0',
    thumbnail_1: 'https://th.bing.com/th/id/R.8fa83dacf8cdde0668a2d0a4f817aaca?rik=bUg3Rab2aubUHg&pid=ImgRaw&r=0',
    thumbnail_2: 'https://th.bing.com/th/id/R.c1a3a33ceca23d01afb3a7013897a19f?rik=yll57uGkFHHfyg&riu=http%3a%2f%2fwww.sneakerfiles.com%2fwp-content%2fuploads%2f2009%2f09%2fnbh-spike.jpg&ehk=SblsD3AF0pQResB4VcUrpNBgTAN76r8iRPXH7AOfQOg%3d&risl=&pid=ImgRaw&r=0',
    thumbnail_3: 'https://cdn.shopify.com/s/files/1/0324/6781/2487/products/shopify-full-image-2000x2000_8ed7c068-c971-4aa8-9306-bb1119c181f5_1024x.png?v=1590988397',
  },
  {
    product_id: '647883',
    name: 'Roberto Cavalli Long-Sleeve Velvet Wing',
    price: 2000,
    brand: 'Roberto Cavalli',
    description: 'fashionable and long lasting',
    specification: 'one red dress in the box',
    image: 'https://images.bergdorfgoodman.com/ca/1/product_assets/W/0/C/H/Q/BGW0CHQ_mu.jpg',
    thumbnail_1: 'https://images.bergdorfgoodman.com/ca/1/product_assets/W/0/C/H/Q/BGW0CHQ_mu.jpg',
    thumbnail_2: 'https://cache.net-a-porter.com/images/products/735507/735507_bk_pp.jpg',
    thumbnail_3: 'https://images.bergdorfgoodman.com/ca/1/product_assets/W/0/C/H/Q/BGW0CHQ_au.jpg',
  },
  {
    product_id: '78392883',
    name: 'Fresh Fri Vegetable Oil - 3 Litres ',
    price: 500,
    brand: 'fresh fri',
    description: 'healthy and affordable',
    specification: 'one 500g cooking oil',
    image: 'https://th.bing.com/th/id/OIP.vKTDdXaa2Fsm8F8nuFVG_QHaHa?pid=ImgDet&rs=1',
    thumbnail_1:  'https://th.bing.com/th/id/OIP.vKTDdXaa2Fsm8F8nuFVG_QHaHa?pid=ImgDet&rs=1',
    thumbnail_2:  'https://copia.co.ke/wp-content/uploads/2019/08/Fresh-Fri-Cooking-Oil-2L_Cooking-Oils_132_1.jpeg',
    thumbnail_3:  'https://jambopay.market/image/cache/catalog/Seller_156/Fresh-Fri-250-5L-20200704135855-1000x1000h.jpg',
  },
  {
    product_id: '83763',
    name: 'Black Essential Signature Hoodie',
    price: 1500,
    brand: 'adidas',
    description: 'warm, fashinable and affordable',
    specification: 'one jumper in the box',
    image: 'https://th.bing.com/th/id/OIP.smgjJn1KCA29-ORcCyOS2QAAAA?pid=ImgDet&w=440&h=549&rs=1',
    thumbnail_1: 'https://th.bing.com/th/id/OIP.smgjJn1KCA29-ORcCyOS2QAAAA?pid=ImgDet&w=440&h=549&rs=1',
    thumbnail_2: 'https://jageto-embroidery.co.uk/wp-content/uploads/2016/08/BlackBlack-Hoodie.jpg',
    thumbnail_3: 'https://media.mennace.com/s/mennace/MW402719_set/5/black-essential-signature-hoodie.jpg?$product-page__zoom--3x$',
  },
  {
    product_id: '178393',
    name: 'Royal Automatic Dry Iron Box 1000W ',
    price: 2500,
    brand: 'Royal',
    description: 'energu saving and affordable',
    specification: 'one iron bx in the box',
    image: 'https://habteq.co.ke/wp-content/uploads/2020/07/RE-3-039.jpg',
    thumbnail_1: 'https://habteq.co.ke/wp-content/uploads/2020/07/RE-3-039.jpg',
    thumbnail_2: 'https://th.bing.com/th/id/OIP.87rrJL0AZ9LrgVtCZbpWpgHaFB?pid=ImgDet&rs=1',
    thumbnail_3: 'https://th.bing.com/th/id/R.25c1edbf2833b3f87b60f88f86ff4229?rik=uvIW8klaCbCSAw&pid=ImgRaw&r=0',
  },
  {
    product_id: '892837',
    name: 'KOUSI Portable Closets',
    price: 1000,
    brand: 'KOUSI',
    description: 'stylish, portable and affordable',
    specification: 'one white wardrobe',
    image: 'https://www.googstca.com/images/42-1/4533033173026_592.jpg',
    thumbnail_1: 'https://www.googstca.com/images/42-1/4533033173026_592.jpg',
    thumbnail_2: 'https://www.googstca.com/images/42-1/4533033173026_587.jpg',
    thumbnail_3: 'https://www.googstca.com/images/42-1/4533033173026_589.jpg',
  },
  {
    product_id: '8273992',
    name: 'Samsung Galaxy A12',
    price: 15000,
    brand: 'samsung',
    description: 'perfect camera, large storage space and affordable',
    specification: 'one black phone, charger and earphones',
    image: 'https://specifications-pro.com/wp-content/uploads/2021/09/Samsung-Galaxy-A13-5G-600x600.jpg',
    thumbnail_1: 'https://specifications-pro.com/wp-content/uploads/2021/09/Samsung-Galaxy-A13-5G-600x600.jpg',
    thumbnail_2: 'https://shop.mobilestore13.ru/image/catalog/products/Samsung/a12-black-front-back.jpg',
    thumbnail_3: 'https://cf.shopee.com.my/file/56c694076b8b0962f092080e8074edb2',
  },
  {
    product_id: '7847584',
    name: ' Baby Girl Dress',
    price: 1500,
    brand: 'Frock Designers',
    description: 'fashionable, comfortable and affordable',
    specification: 'one blue dress',
    image: 'https://th.bing.com/th/id/OIP.hYR5xh-6ZfBjQjVY7h4BFwHaHa?pid=ImgDet&rs=1',
    thumbnail_1: 'https://th.bing.com/th/id/OIP.hYR5xh-6ZfBjQjVY7h4BFwHaHa?pid=ImgDet&rs=1',
    thumbnail_2: 'https://th.bing.com/th/id/OIP.i4PcvpFHZYyH4w9mP3klDwHaHa?pid=ImgDet&rs=1',
    thumbnail_3: 'https://th.bing.com/th/id/OIP.InZ91KejW94Ku1_m2cneiAHaHa?pid=ImgDet&rs=1',
  },
  {
    product_id: '7847584',
    name: 'Oval Mirror Jewelry Makeup Dressing Table',
    price: 5000,
    brand: 'Zimtown Vanity',
    description: 'fashionable, comfortable and affordable',
    specification: 'one white oval shaped dressing table',
    image: 'https://www.zimtown.com/thumb_image/product/s/spuz/spuz113028827/spuz113028827_800_800.jpg?20200912091117',
    thumbnail_1: 'https://www.zimtown.com/thumb_image/product/s/spuz/spuz113028827/spuz113028827_800_800.jpg?20200912091117',
    thumbnail_2: 'https://images-na.ssl-images-amazon.com/images/I/51FmgQknDbL._SL500_AC_SS350_.jpg',
    thumbnail_3: 'https://i.pinimg.com/originals/3d/27/52/3d2752db55d1237ca6de6bd4cf0a3a77.jpg',
  }
]
cart:productInterface[]=[]
orders:productInterface[]=[]
  constructor() {}

  addproduct(product:productInterface){
    this.products.push(product)
  }

  getproducts(){
    return this,this.products
  }

  getcart(){
    return this.cart
  }
  getproduct(id:string){
    return this.products.find((x:productInterface)=>x.product_id===id)
  }

  updateproduct(product:productInterface, id:string){
    const Product = this.getproduct(id)
    if (Product){
      Product.name = product.name
      Product.brand = product.brand
      Product.description= product.description
      Product.specification = product.specification
      Product.image = product.image
      Product.thumbnail_1 = product.thumbnail_1
      Product.thumbnail_2 = product.thumbnail_2
      Product.thumbnail_3 = product.thumbnail_3
    }
  }

  deleteproduct(id:string){
    const index = this.products.findIndex(x=>x.product_id===id)
    this.products.splice(index,1)
  }

  addtocart(id:string){
    const product = this.getproduct(id)
    if (product){
    this.cart.push(product)
    }
  }

  removefromcart(id:string){
    const index = this.cart.findIndex(x=>x.product_id===id)
    this.cart.splice(index,1)
  }

  editcart(id:string, quantity:number){
   const product = this.cart.find(x=>x.product_id===id)
    if (product){
      product.quantity= quantity
    }
  }

  orderproducts(id:string){
    const product = this.getproduct(id)
    if (product){
      this.orders.push(product)
      const index = this.cart.findIndex(x=>x.product_id===product.product_id)
      this.cart.splice(index,1)
    }
  }
}
