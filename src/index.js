class Sorter {
  

  constructor() {
    this.arr = new Array();
    // your implementation
  }

  add(element) {

    this.arr.push(element);
    // your implementation
  }

  at(index) {
    return this.arr[index];
    // your implementation
  }

  get length() {
    return this.arr.length;
    // your implementation
  }

  toArray() {
    return this.arr;
    // your implementation
  }

  sort(indices) {


    if(indices.length!==1){
      if (indices.length!==this.arr.length){
        
        var x,y
         = [], z=indices[0];

        for( var i=0; i<indices.length;i++){
          x.push(this.arr[indices[i]]);
        }



      }else{
        this.arr=this.arr.sort(function(a, b){return a-b});
      }
    }

    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }

  compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
  }
}

module.exports = Sorter;