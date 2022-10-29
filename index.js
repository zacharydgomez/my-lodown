'use strict';

const { sum } = require("lodash");

// YOU KNOW WHAT TO DO //

/**
 * each: Designed to loop over a collection, Array or Object, and applies the 
 * action Function to each value in the collection.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}
module.exports.each = each;

/**
 * identity: function takes an input value and returns it unchanged
 * 
 * @param {value}: function takess in any input value
 * @return{value}: function returns an input value
 * 
 * 
 * 
 */
 function identiy(value){
    return value;}
 

module.exports.identity = identity;

/**
 * typeof: takes a value and returns the typeof as a string
 * @param{value}: takes in any kind of value
 * @return{string}: returns a string indicating what kind of datatype a value is
 */
 _.typeOf = function(value){
    if (value === null){ return "null"}
    else if (Array.isArray(value)){ return "array"}
    else {return typeof value}
}
module.exports.typeof = typeOf;
/**
 * first: iterates through an array and returns the nth first elements in an array. 
 * N is the number of elements returned.
 * @param{array}: an array
 * @param{number}: a number to represent the amount of items from the array to return
 * @return{array}: an array of the elements called upon
 */
 _.first = function(array, number){
    
    if( !Array.isArray(array) || number <0){
        return [];
    }
      if (isNaN(number) || number === undefined ){
   
        return array[0];  
      } else {
        return array.slice(0, number)}
      }
      module.exports.first = first;

  /**
 * last: iterates through an array and returns the nth last elements in an array
 * N is the number of elements returned
 * @param{array}: an array
 * @param{number}: a number to represent the amount of items from the back of the array to return
 * @return{array}: an array of the elements called upon
 */
       _.last = function(array, number){
           if( !Array.isArray(array) || number <0){
               return [];
           }
             if (isNaN(number) || number === undefined ){
               return array[array.length - 1];}
               if (number > array.length){
                   return array}
              else {
               return array.slice(array.length - number)}
            }
            module.exports.last = last;
 /**
  * indexOf: gives the index of the  first instance of a value in the array
  * @param{array}: an array
  * @param{value}: a value to be searched for
  * @return{number}: the index of the value in the array
  * @return{-1}: if the value isnt in the array
  * 
  */
  _.indexOf = function(array, value){
    for (let i =0; i < array.length; i++){
        if (array[i]=== value){return i}  
    }
    return -1
}
module.exports.indexOf = indexOf;

/**
 * contains: gives a boolean value if an array contains a value
 * 
 * @param{array}: an array
 * @param{value}: a value to be searched for
 * @return{boolean value} will return true or false depending on if the value was found.
 * 
 */
 _.contains = function(array, value){
   
    let result = array.includes(value) ? true:false
    return result}

    module.exports.contains = countains;

    /**
     * unique:  loops through an array and returns a new array with duplicates removed
     * @param{array}: an array of values
     * @return{array}: a new array with duplicate elements removed
     */
     .unique = function(array){

        let result = [];
  
        for (let i = 0; i < array.length; i++){  
            if( i === _.indexOf(array, array[i])){
                result.push(array[i]);
            }
        }
        return result}
        
        module.exports.unique = unique
/**
 * filter: calls a function for each element in the array. 
 * returns a new array of elements that tested as true 
 * 
 * 
 * @param{array}: an array of elements
 * @param{func}: a function that tests the elements truthyness toward a statement 
 * 
 * @return{array}: returns an array of the elements that returned true
 */
 _.filter = function(array, func ){ 
    let output= []
        for(let i = 0; i <array.length;i++){
if (func(array[i], i, array) === true){    
            output.push(array[i]);
        }
    return output
}
}
module.exports.filter = filter
/**
 * reject: calls a function for each element in the array. 
 * returns a new array of elements that tested as false.
 * @param{array}: an array of elements
 * @param{func}: a function that tests the elements truthyness toward a statement
 */ 
 _.reject = function(array, func ){
    let output= []
// iterate through loop
        for(let i = 0; i <array.length;i++){
            // check for a false statement
if (func(array[i], i, array) === false){
            // pushes the false results
            output.push(array[i]);
        }}

    return output
}
module.exports.reject = reject

/**
 * partition: calls a function for each element in an array.
 * Returns two subarray, an array populated by values that returned truthy 
 * and an array populated by values that returned falsy
 * @param{array}: an array of elements
 * @param{func}: a function that tests the elements truthyness toward a statement
 * @return{array}: returns an array containing two sub arrays.
 *  the first sub array are elements that tested true.
 * the second sub array are elements that tested false
 */
 _.partition = function(array, func){
    let result = []
    let tru = _.filter(array,func)
    let fals = _.reject(array, func) 
    result[0] = tru
    result[1] = fals
    return result}
    module.exports.partition = this.partition
    /**
     * map: calls a function for each element in a collection. 
     * In an array it will loop through the indexes.
     * In an object it will go through the values of its keys
     * @param{collection}: an array or an object
     * @param{func}: a function to be applied to each element of the collection
     * @return{collection}: returns a new collection with each element having had the function applied to it
     * 
     */
     _.map = function(collection, func){
        let value = []
        if(Array.isArray(collection)){
            for (let i = 0; i < collection.length; i++){
              let x = func(collection[i], i, collection)
              value.push(x)
            }
        }
        else if (_.typeOf(collection) === "object"){
            for (let key in collection){
    let y = func(collection[key], key, collection)
          value.push(y)  }
        }
    return value
    }
    module.exports.map = map
    /**
     * pluck: returns an array containing the values of a property for each element in an array
     * @param{array}:an array of objects
     * @param{prop}: a property to search for
     * @return{array}: returns an array of values from properties in an array.
     * 
     */
     _.pluck = function(array, prop){
   
        let x = _.map(array, function(i){
        return i[prop]
       })
            
         
         return x
     }
     module.exports.pluck = this.pluck

     /**
      * every: applys a function to every index in an array and every value in an object
      * tests the elements to see if they ALL pass
      * @param{collection}: a list of elements
      * @param{func}: a function to test the elements 
      * @return{boolean value}: returns true if all elements pass test. returns false if any elements fail the test
      * 
      */
      _.every = function(collection , func){
        if( func === undefined){
            if(Array.isArray(collection)){
                for (let i = 0; i < collection.length; i++){
                    if(!collection[i]){
                        return false
                    }
                }
            } else{ 
                for (let key in collection){
                if(!collection[key]){
                    return false;
                }
            }
            }
            } else {
                if (Array.isArray(collection)){
                    for (let i = 0; i <collection.length; i++){
                        if (func(collection[i], i, collection)=== false){
                            return false;
                        }
                    }
                } else {
                    for (let key in collection){
                        if (func(collection[key], key, collection)=== false){
                            return false;
                        }
                    }
                }
            }
     return true;
    }
    module.exports.every = every

    /**
     * some: applys a function to every index in an array and every value in an object
      * tests the elements to see if some pass
      * @param{collection}: a list of elements
      * @param{func}: a function to test the elements
      * @return{boolean value}: returns true  if any element tests true. returns false if every element tests false.
      * 
      *  */
     _.some = function(collection, func){
        let bool = false
     _.each(collection, function(x, y, collection){
        if (typeof func !== "function"){
            if(x){ bool = true;
            }
        }
        else if (func(x,y, collection)){
            bool = true
        }
     }
     );
     return bool
    }
    module.exports.some = sum

    /**
     * reduce: takes a list of values and returns a single value
     * @param{array}: an array
     * @param{func}: a function that will be called on every element in the array
     * @param{seed} a starting value
     */
     _.reduce = function(array, func, seed ){
        let result;
        if( seed === undefined){
            result = array[0]
            for (let i = 1; i < array.length; i++){
                result = func(result, array[i], i, array)
            }
        }
        else{
            result = seed; 
            for (let i = 0; i < array.length; i++){
                result = func(result, array[i], i, array);
            }
        }
        return result
    }
    module.exports.reduce = reduce

    /**
     * extend: copys the properties of one or more objects into a single object.
     * @param{...objEct}:  any amount of objects that you wish to put into a single object
     * @return{object}: returns a new object made of combinding the objects propeties in the order listed.
     * 
     */
     _.extend = function( ...objEct){
        const obj1 = Object.assign(...objEct)
        return obj1
     }
    module.exports.extend = extend