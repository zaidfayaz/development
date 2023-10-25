array types : continuous and  holey
further divider into 3 parts 
1) SMI : Small Integer
2) Packed Elements
3) Double : Except values it accepts everything e.g numbers, strings, functions etc

const arr = [1,2,3,4,5] //it is a PACKED_SMI_ELEMETS  //it contains pure numbers decimal etc not allowed 
arr.push(6.1) // PACKED_DOUBLE_ELEMENTS
arr.push(NaN) // PACKED_DOUBLE_ELEMENTS
arr.push(infinity)  // PACKED_DOUBLE_ELEMENTS
arr.push("Zaid")  //PACKED ELEMENTS  //once converted to packed elements or  packed double elements cannot be reverted to packed smi elements

arr[10] = 11 //holy elemtents cox it has empty items

how js check the element indexing
1) Bound Check
2) hasOwnProperty(arr, 9)
3) hasOwnProperty(arr.prototype, 10)
4) hasOwnProperty(Object.prototype, 10)

this is the reason  that the holes are very expensive in js nd causes optimization

highest optImizatED for CONTINUOUS
SMI > DOUBLE > PACKED

highest optImizatED for HOLEY
H_SMI > H_DOUBLE > Hp_PACKED
