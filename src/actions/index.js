export const removeFeature = item => {
  return { type: "REMOVE_FEATURE", payload: item };
  // dispatch an action here to remove an item
};

export const buyItem = item => {
  console.log("item", item);
  return {
    type: "BUY_ITEM",
    payload: item
    // payload: item = props.features in additionalfeatures
  };
  // dipsatch an action here to add an item
};
