const initialState = {
  additionalPrice: 0,
  car: {
    price: 26395,
    name: "2019 Ford Mustang",
    image:
      "https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg",
    features: []
  },
  store: [
    { id: 1, name: "V-6 engine", price: 1500 },
    { id: 2, name: "Racing detail package", price: 1500 },
    { id: 3, name: "Premium sound system", price: 500 },
    { id: 4, name: "Rear spoiler", price: 250 }
  ]
};
console.log("initial state", initialState);

export const carSalesReducer = (state = initialState, action) => {
  console.log("payload", action.payload);
  switch (action.type) {
    case "BUY_ITEM":
      return {
        ...state,
        car: {
          ...state.car,
          features: [...state.car.features, action.payload]
        },
        additionalPrice: state.additionalPrice + action.payload.price,
        store: state.store.filter(
          el =>
            ![
              ...state.car.features.map(el => el.id),
              action.payload.id
            ].includes(el.id)
        )
      };
    case "REMOVE_FEATURE":
      return {
        ...state,
        features: state.car.filter(car => {
          return !car;
        })
      };
    default:
      return state;
  }
};
