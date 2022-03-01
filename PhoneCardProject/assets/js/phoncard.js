/**
 * cards.js
 * 
 * Everything related to the card management will be done here. 
 * All the arrays, event listeners and functions shall be created here as long as 
 * they are realted to the the card management.
 * 
 * @author Practical IT
 * @author [Add your name here]
 */
 let cards = {
    Wallia: {
      title: 'Wallia',
      price:  25,
      minutes: 130,
      refillable: true
    },
    Chellada: {
      title: 'Chellada',
      price:  20,
      minutes: 120,
      refillable: true
    },
    KeyKebero: {
      title: 'Key Kebero',
      price:  10,
      minutes: 100,
      refillable: false
    }
  };
  
  let checkout = []; //array for checkedout cards.
let purchased = []; //array for the purchased cards
let email_subscribers = []; //array for the subscribers
let members = []; //array for the members
  
  const buy_Chellada_card = document.querySelector('#Chellada');
  const buy_Wallia_card = document.querySelector('#Wallia');
  const buy_KeyKebero_card = document.querySelector('#KeyKebero');
  
  
  const checkout_list = document.querySelector('#checkout_list');
  
  const updateCheckout = () => {
      //create a list to be shown on the checkout list.
    let checkout_table = "";
    if (checkout.length > 0) {
      document.getElementById('total_item').innerHTML='Checkout('+checkout.length+')';
      checkout.forEach( card => {
        let total = parseInt(cards[card.type].price)*parseInt(card.quantity);
        checkout_table += `<tr>
        <td>${card.type}</td>
        <td>${card.quantity}</td>
        <td>${cards[card.type].price}</td>
        <td>${total}</td>
      </tr>`;
      });
      checkout_list.innerHTML = checkout_table;
    }
  }
  let Wallia_quantity =document.querySelector('#Wallia_quantity');
  let KeyKebero_quantity =document.querySelector('#KeyKebero_quantity');
  let Chellada_quantity = document.querySelector('#Chellada_quantity');
  //initially the buttons are disabled. They will be back to active when the user selects quantity.
  const quantitySelected = (event) => {

      //get the type of the card from the id itself
    let card_type = event.target.id.split('_')[0];//gives the "type_quantity" as an id
    document.querySelector(`#${card_type}`).disabled = true;
    const quantity = event.target.value[0];
    if (quantity) {
      console.log(document.querySelector(`#${card_type}`));
      document.querySelector(`#${card_type}`).disabled = false;
    }
  }
  Wallia_quantity.addEventListener('change',(event)=>quantitySelected(event));
  KeyKebero_quantity.addEventListener('change',(event)=>quantitySelected(event));
  Chellada_quantity.addEventListener('change', (event) => quantitySelected(event));
  
  //purchased object example {type: 'chellada', quantity: 2 }

  const addToCheckout = (type, qty1) => {
    let qty= $('#'+type).closest('.row').find('.form-control').val();
    let valid_types = Object.keys(cards);
   
    if (valid_types.includes(type)) {
      let checkout_card = {type: type,quantity:qty};
      checkout.push(checkout_card);
      updateCheckout();
    }
  }
  buy_Chellada_card.addEventListener('click', () => addToCheckout('Chellada'));
  buy_KeyKebero_card.addEventListener('click',()=>addToCheckout('KeyKebero'));
  buy_Wallia_card.addEventListener('click', () => addToCheckout('Wallia'));
  
  $(".product-item").on('change', '.product-select', function(e) {
    var qty = Number($(this).qty());
    var prc = Number($(this).prev('.total-quantity').val());
    $(this).prev('.total-quantity').val(qty * prc);
  });
  
  
  
  function increase() {
    let products = JSON.parse(localStorage.getItem('products'));
    for (let i = 0; i < products.length; i++) {
        let inputValue = document.querySelector('.product__quantity').value;
        inputValue = products[i].count++;
    }
    localStorage.setItem('products', JSON.stringify(products));
    tableBody.innerHTML = '';
    loadCart();
  }
  
  function decrease() {
    let products = JSON.parse(localStorage.getItem('products'));
    for (let i = 0; i < products.length; i++) {
        let inputValue = document.querySelector('.product__quantity').value;
        inputValue = products[i].count--;
        if (products[i].count <= 0) {
            const itemIndex = products.findIndex(product => product.count === 0);
            products.splice(itemIndex, 1);
        }
    }
    localStorage.setItem('products', JSON.stringify(products));
    tableBody.innerHTML = '';
    loadCart();
  }
  var start_time=5*6000;
  var countDownDate =new Date().getTime();
   let x = window.setInterval(function () {wallia_timer()}, 1000);
   function wallia_timer(new_time=0) {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    distance=new_time+distance;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("wallia_timer").innerHTML =   minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("wallia_timer").innerHTML = "EXPIRED";
    }
  }
  let y = setInterval(function(new_time) {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(new_time){
      minutes+=new_time;
      }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("keykebero_timer").innerHTML =   minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("keykebero_timer").innerHTML = "EXPIRED";
    }
  }, 1000);
  let  z = setInterval(function(new_time) {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    if(new_time){
      minutes+=new_time;
      }
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("chellada_timer").innerHTML =   minutes + "m " + seconds + "s ";
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("chellada_timer").innerHTML = "EXPIRED";
    }
  }, 1000);
  let add_time=document.getElementById("add_time");
  function save_time(elm){
    var time =$(elm).closest('.php-email-form').find('#add_mins').val();
    var buy_type =$(elm).closest('.php-email-form').find('#buy_type').val();
    
    var oldtime =document.getElementById(buy_type+'_timer').innerHTML;
   if (buy_type =='wallia'){
      wallia_timer(time*6000);
  }
    if (buy_type =='kebero'){
      y(total);
  
    }
    if (buy_type =='challada'){
      z(total);
  
    }
    var test='success';
  }
  
  document.getElementById('subscribe_form').addEventListener('submit', function(e) {
    e.preventDefault();
    var nameInput = document.getElementById('email');
      console.log("email: " + nameInput.value);
  });
  
//   function saveData(){
//   let fname,lname,email,phone;
//   fname=document.getElementById("fname").value;
//   lname=document.getElementById("lname").value;
//   email=document.getElementById("email").value;
//   phone=document.getElementById("phone").value;
//   let user_records=new Array();
//   user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
//   if(user_records.some((v)=>{return v.email==email}))
//   {
//     //alert("duplicate data");
//   }
//   else
//   {
//     user_records.push({
//     "fname":fname,
//     "lname":lname,
//     "email":email,
//     "phone":phone
//   })
//   localStorage.setItem("users",JSON.stringify(user_records));
//   }
  
//   }
  
    