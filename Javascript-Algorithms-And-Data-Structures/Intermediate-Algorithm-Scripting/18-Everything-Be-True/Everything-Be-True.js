function truthCheck(collection, pre) {
  let result = true;
  
  collection.forEach((item, index, array) => {
    let properties = Object.keys(item);

    if (properties.includes(pre)) 
    {
      if (!item[pre]) result = false;
    } 
    else result = false;
  });

  return result;
}
