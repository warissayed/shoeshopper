const wrapper  = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 7495.00,
    colors:[{
      code:"black",
      img: "img/air.png",
    },
    {
      code:"darkblue",
      img: "img/air2.png",
    },
  ],
  },
  {
    id:2,
    title:" Air Jordan",
    price:  9195.00,
    colors:[
      {
        code:"lightgray",
        img:"./img/jordan.png",

      },
      {
        code:"green",
        img:"./img/jordan2.png",

      },
    ],
  },
  {
    id:3,
    title:"Blazer",
    price: 10999,
    colors:[
      {
        code:"lightgray",
        img:"./img/blazer.png",
      },
      {
        code:"green",
        img: "./img/blazer2.png",

      },
    ],

  },
  {
    id:4,
    title:"crater",
    price: 12999,
    colors:[
      {
        code:"black",
        img:"./img/crater.png",
      },
      {
        code:"lightgray",
        img: "./img/crater2.png",

      },
    ],

  },
  {
    id:5,
    title:"Hippie",
    price: 5999,
    colors:[
      {
        code:"gray",
        img:"./img/hippie.png",
      },
      {
        code:"black",
        img: "./img/hippie2.png",

      },
    ],

  },
  

];
let chosenproduct = products[0];

const currentproductImg =document.querySelector(".productImg");
const currentproductTittle = document.querySelector(".productTitle");
const currentproductPrice = document.querySelector(".productPrice");
const currentproductcolors =document.querySelectorAll(".color");
const currentproductsizes =document.querySelectorAll(".size");



menuItems.forEach((item,index)=>{
  item.addEventListener("click",()=>{
    //slider
    wrapper.style.transform = `translate(${-100 *index}vw)`;
    //chosen product 
    chosenproduct = products[index]
    //change texts 
    currentproductTittle.textContent = chosenproduct.title;
    currentproductPrice.textContent = "₹"+chosenproduct.price;
    currentproductImg.src = chosenproduct.colors[0].img;

    currentproductcolors.forEach((color,index)=>{
      color.style.backgroundColor = chosenproduct.colors[index].code;
    });
  });
});


currentproductcolors.forEach((color,index)=>{
  color.addEventListener("click",()=>{
    currentproductImg.src = chosenproduct.colors[index].img;
  })
})

currentproductsizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    currentproductsizes.forEach((size)=>{
      size.style.backgroundColor = "white"
    size.style.color = "black"
    });
    size.style.backgroundColor = "black"
    size.style.color = "white"
    });

  });
const productButton = document.querySelector(".productbtn");
const payment =document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display = "flex";
} )

close.addEventListener("click",()=>{
  payment.style.display = "none";
} )
