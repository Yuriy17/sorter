class Sorter {
  

  constructor() {
    this.arr = new Array();
    this.comparator;
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
    var n=this.arr.length,l=indices.length;
    switch (compareFunction) {
      case AGE_COMPARATOR:
        this.comparator=age;
        break;
      case REVERSE_COMPARATOR:
        this.comparator=comparator;
        break;
      case STRINGIFY_COMPARATOR:
        this.comparator=stringify;
        break;
      default:
        if(l!==1){
          if (l!==n){
            indices=indices.sort(function(a, b){return a-b});
            for (var i = 0; i < l-1; i++)
              { for (var j = 0; j < l-1-i; j++)
                 { if (this.arr[indices[j+1]] < this.arr[indices[j]])
                    { var t = this.arr[indices[j+1]];
                     this.arr[indices[j+1]] = this.arr[indices[j]];
                     this.arr[indices[j]] = t; }
                 }
              }  
          }else{
            this.arr=this.arr.sort(function(a, b){return a-b});
          }
        };
    }


    // your implementation
  }

  setComparator(compareFunction) {
   this.comparator=compareFunction;

    // your implementation
  }

}

module.exports = Sorter;