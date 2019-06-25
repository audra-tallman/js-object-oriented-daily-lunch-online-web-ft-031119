
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

  let neighborhoodIds = 1;
  let customerId = 1;


class Neighborhood {
    constructor(name) {
      this.id = neighborhoodIds++;
      this.name = name;
      store.neighborhoods.push(this);
    }
  
  deliveries() {
  return store.deliveries.filter(delivery =>
    delivery.neighborhoodId === this.id);
  }
  customers() {
    return store.customers.filter(customer =>
    customer.neighborhoodId === this.id);
  }
  meals() {
    const allMeals = this.customers().map(customer => customer.meals());
      const merged = [].concat.apply([], allMeals);
      return [...new Set(merged)];
    }
  }


class Customer {
  constructor(name, neighborhoodId) {
    this.name = name;
    this.neighborhoodId = neighborhoodId
    this.id = ++customerId;
    store.customers.push(this);
    return this;
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