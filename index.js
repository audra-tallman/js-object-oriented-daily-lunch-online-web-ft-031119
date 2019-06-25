
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

  let neighborhoodIds = 1;
  let customerId = 1;


class Neighborhood {
    constructor(name) {
      this.id = neighborhoodIds++;
      this.name = name;
      store.neighborhoods.push(this);
      return this;
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
  return store.deliveries.filter(delivery => delivery.customerId === this.id);
  }
  meals() {
    return store.meals.filter(meal => meal.customerId === this.id);
  }
  totalSpent() {
    return this.meals().reduce((total, meal) => (total += meal.price), 0);
  }
}

class Meal {
  constructore(title, price) {
    this.title = title;
    this.price = price; 
    this.id = ++mealId; 
    store.meals.push(this);
    return this; 
    }
    deliveries() {
    return store.deliveries.filter(delivery => delivery.mealId === this.id);
     }
     customers(){
    return this.deliveries().map(delivery => delivery.customer());
    }
     static byPrice(){
    return store.meals.sort((a, b) => a.price < b.price);
  }
  }
}

class Delivery {
  constructore(mealId, neighborhoodId, customerId) {
    this.mealId = mealId;
    this.neighborhoodId = neighborhoodId; 
    this.customerId = customerId;
    this.id = ++mealId; 
    store.meals.push(this);
    return this; 
    }
}