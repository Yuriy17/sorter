class Sorter {

  var arr = [];
  constructor() {

    // your implementation
  }

  add(element) {
    arr.push(element);
    // your implementation
  }

  at(index) {
    // your implementation
  }

  get length() {
    return arr.length
    // your implementation
  }

  toArray() {
    var str;
    for (i=0; i<arr.length; i++){
      if(i=0){
        str='['+arr[i]+', ';
      } else if (i=arr.length-1){
        str=arr[i]+']';
      }else{
        str=arr[i]+', ';
      }
    }
    return str;
    // your implementation
  }

  sort(indices) {
    indices
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
}

module.exports = Sorter;