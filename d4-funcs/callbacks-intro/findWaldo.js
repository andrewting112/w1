

const findWaldo = function(names, found) {
  names.map((name, index)  => {
    if (name === "Waldo") {
      found(index);   // execute callback
    }
  });
};
  
const actionWhenFound = function(index) {
  console.log(`Found him at index ` +  index);
};
  
findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);