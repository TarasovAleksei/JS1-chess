
  let itemObjs = [{
    id: '1',
    name: 'Ручка',
    price: 100,
  },{
    id: '2',
    name: 'Бумага',
    price: 150,
  },{
    id: '3',
    name: 'Карандаш',
    price: 50,
  }];

const Cart = function(itemObjs, targetEl, resultEl) {
    this.itemObjs = itemObjs || [];
    this.itemCollection = [];
    this.targetEl = targetEl;
    this.resultEl = resultEl;

    this.render = function() {
        this.targetEl.innerHTML = this.itemCollection.map(function(itemObj) {
        return 'Товар: ' + itemObj.name + ' Цена: ' + itemObj.price
      }).join('<br>');
  
      this.resultEl.innerHTML = this.countCartPrice() + ' руб.';
    }
  
    this.countCartPrice = function() {
      let price = 0;
      for(let i=0; i<this.itemCollection.length; i++) {
        price += this.itemCollection[i].price
      }
      return price;
    }
  
    this.addToCart = function(id) {
      let foundObj = this.itemObjs.find(function(el) {
        return el.id === id
      })
      if(!foundObj) {
        alert('Элемент ' + id + ' не найден!');
      } else {
        this.itemCollection.push(foundObj);
        this.render();
      }
    }
  }
  
  const cartItemsEl = document.querySelector(".cart-items");
  const resultEl = document.querySelector(".cart-result");
  const cart = new Cart(itemObjs, cartItemsEl, resultEl);
  const itemBtns = document.querySelectorAll(".item")
  
  for(let itemBtn of itemBtns) {
    itemBtn.addEventListener ("click", function (event) {
      cart.addToCart(event.target.getAttribute('data-id'))
    })
  }