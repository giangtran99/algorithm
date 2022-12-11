import BubbleSort from "./bubble-sort"

const array = [2, 54, 1, 87, 31,62 ,4]

const sortedArray = BubbleSort(array)

// recursive
function RecursiveBinarySearch(array: any[], target: any, left: number, right: number) {
    let mid = Math.floor((left + right) / 2)

    if (array[mid] === target) {
        return mid
    }
    if (array[mid] > target) {
        return RecursiveBinarySearch(array, target, 0, mid - 1)
    }
    if (array[mid] < target) {
        return RecursiveBinarySearch(array, target, mid + 1, right)
    }

    if (left >= right) {
        return
    }

}

// loop

function BinarySearch(array: any[], target: any) {
    let left = 0
    let right = array.length -1
    let mid
    // console.log({left,right})
    while(left <= right){

        mid = Math.floor((left + right)/2)
       
        if (array[mid] === target) {
            return mid
        }
        if (array[mid] > target) {
              right = mid - 1 
        }
        if(array[mid] < target){
             left = mid + 1
        }
    }
}

// console.log({sortedArray})

console.log(RecursiveBinarySearch(sortedArray, 31, 0, sortedArray.length - 1))
console.log(RecursiveBinarySearch(sortedArray, 87, 0, sortedArray.length - 1))
console.log(RecursiveBinarySearch(sortedArray, 62, 0, sortedArray.length - 1))
console.log(BinarySearch(sortedArray, 31))
