import swap from './swap'


let array = [3,765,1,7,55,34,1,2,88]

function QuickSort(array,start,end) {
    
    // console.log({start,end})
    if(start>=end){
        return 
    }
    let pivot = array[end]
    let i = start
    let j = end - 1

    while(true){
        // console.log("start",{i,j})
        if(array[i] <= pivot){
            i++
        }
        if(array[j] >= pivot){
            j--
        }
        // console.log("after move ",{i,j})


        if(i>j){
            // console.log({array,i,j})
            swap(i, end, array)
            // console.log({array})
            break
        }
    
        if(array[i] > pivot && array[j] < pivot){
            // console.log("when swap : ",{i,j})
            swap(i,j,array)
            i++
            j--
        }
        // if(i>=j+1){
        //     console.log({i,j})
        //     swap(i,array.length - 1,array)
        // }
    }
    console.log({i})
    QuickSort(array,start,i-1)
    QuickSort(array,i+1,end)

    // console.log({child:array})


    return array
}


console.log(QuickSort(array,0,array.length-1))

// console.log(QuickSort(array,0,1))