"use strict";
exports.__esModule = true;
var swap_1 = require("./swap");
var array = [3, 765, 1, 7, 55, 34, 1, 2, 88];
function QuickSort(array, start, end) {
    // console.log({start,end})
    if (start >= end) {
        return;
    }
    var pivot = array[end];
    var i = start;
    var j = end - 1;
    while (true) {
        // console.log("start",{i,j})
        if (array[i] <= pivot) {
            i++;
        }
        if (array[j] >= pivot) {
            j--;
        }
        // console.log("after move ",{i,j})
        if (i > j) {
            // console.log({array,i,j})
            (0, swap_1["default"])(i, end, array);
            // console.log({array})
            break;
        }
        if (array[i] > pivot && array[j] < pivot) {
            // console.log("when swap : ",{i,j})
            (0, swap_1["default"])(i, j, array);
            i++;
            j--;
        }
        // if(i>=j+1){
        //     console.log({i,j})
        //     swap(i,array.length - 1,array)
        // }
    }
    console.log({ i: i });
    QuickSort(array, start, i - 1);
    QuickSort(array, i + 1, end);
    // console.log({child:array})
    return array;
}
console.log(QuickSort(array, 0, array.length - 1));
// console.log(QuickSort(array,0,1))
