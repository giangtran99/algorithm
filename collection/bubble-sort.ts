import swap from './swap'


let array = [2, 54, 1, 87, 31]



function BubbleSort(array) {
    for (let i = array.length; i > 0; i--) {
        for (let j = 0; j <= i; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array)
            }
        }
    }
    return array
}


console.log(BubbleSort(array))