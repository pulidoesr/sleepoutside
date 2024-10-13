import { getLocalStorage,
         setLocalStorage, 
         removeAllAlerts, 
         alertMessage } from "./utils.mjs";
import ExternalServices from "./ExternalServices.mjs";

const services = new ExternalServices();
function formDataToJSON(formElement) {
  const formData = new FormData(formElement),
    convertedJSON = {};

  formData.forEach(function (value, key) {
    convertedJSON[key] = value;
  });

  return convertedJSON;
}

function packageItems(items) {
  const simplifiedItems = items.map((item) => {
    console.log(item);
    return {
      id: item.Id,
      price: item.FinalPrice,
      name: item.Name,
      quantity: 1,
    };
  });
  return simplifiedItems;
}
export default class checkoutProcess {
  constructor(key, outputSelector) {
    this.key = key;
    this.outputSelector = outputSelector;
    this.list = [];
    this.subtotal =0;
    this.itemTotal = 0;
    this.shipping = 0;
    this.tax = 0;
    this.orderTotal = 0;
  }
  init() {
    this.list = getLocalStorage(this.key);

  }
 
  calculateSummary() {
    // Initialize order summary values
   // const cartItems = getLocalStorage(this.key);
    this.list.map((item) => this.subtotal += item.FinalPrice);
    this.shipping = 10 + (this.list.length - 1)* 2;
    this.tax = (this.subtotal + this.shipping) * 0.06;
    this.orderTotal = this.subtotal + this.shipping + this.tax; 
    document.getElementById('subtotal').textContent = `$${this.subtotal.toFixed(2)}`;
    document.getElementById('shipping').textContent = `$${this.shipping.toFixed(2)}`;
    document.getElementById('tax').textContent = `$${this.tax.toFixed(2)}`;
    document.getElementById('orderTotal').textContent = `$${this.orderTotal.toFixed(2)}`;
  
  }
  async checkout() {
    const formElement = document.forms["checkoutForm"];

    const json = formDataToJSON(formElement);
    // add totals, and item details
    json.orderDate = new Date();
    json.orderTotal = this.orderTotal;
    json.tax = this.tax;
    json.shipping = this.shipping;
    json.items = packageItems(this.list);
    console.log(json);
    try {
      const res = await services.checkout(json);
      console.log(res);
      setLocalStorage("so-cart", []);
      location.assign("/checkout/success.html");
    } catch (err) {
      // get rid of any preexisting alerts.
      removeAllAlerts();
      for (let message in err.message) {
        alertMessage(err.message[message]);
      }

      console.log(err);
    }
  }
}

