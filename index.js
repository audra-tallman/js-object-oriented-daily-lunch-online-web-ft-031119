
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

class Neighborhood = (() => {
  let neighborhoodId = 1;
  return class { 
    constructor(name) {
    this.name = name;
    this.id = ++neighborhoodId;
    store.neighborhoods.push(this);
  }
  deliveries() {
  return store.deliveries.filter(delivery => {
    return delivery.neighborhoodrId == this.id;
   });
  }
  customers() {
    return store.customers.filter(customer => {
      return customer.neighborhoodrId == this.id;
    });
  }
  meals() {
    const allMeals = this.customers().map(customer => customer.meals());
      const merged = [].concat.apply([], allMeals);
      return [...new Set(merged)];
    }
    }
  }


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