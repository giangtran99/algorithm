
function swap(aIndex,bIndex,myArray){
    if(bIndex === aIndex){
        return
    }
    myArray[aIndex] = myArray[aIndex] + myArray[bIndex]
    myArray[bIndex] = myArray[aIndex] -  myArray[bIndex]
    myArray[aIndex] = myArray[aIndex] -  myArray[bIndex]
}


export default swap
   

