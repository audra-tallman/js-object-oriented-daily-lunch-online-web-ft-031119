
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodId = 0;
let mealId = 0; 
let customerId = 0; 
let deliveryId = 0;

class Customer {
  constructor(name) {
    this.name = name;
    this.id = ++customerId;
    store.customers.push(this);
  }
  deliveries() {
  return store.deliveries.filter(delivery => {
    return delivery.customerId == this.id;
   });
  }
  meals() {
    return store.meals.filter(meal => {
      return meal.customerId == this.id;
    });
  }
  totalSpent() {
  }
}