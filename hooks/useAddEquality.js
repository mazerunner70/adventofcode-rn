

export function checkDone(sourceArray, targetInt, indexes) {
    // console.log("222", sourceArray, targetInt, indexes)
    if (indexes[indexes.length-1]- indexes[0] != indexes.length-1)
        return false; // Works on the idea that the numbers to compare must be  in sequence
    return indexes.map(i=>sourceArray[i]).reduce((a, b) => a + b, 0)>targetInt || indexes[indexes.length-1] >= sourceArray.length
}

export function advanceIndexes(sourceArray, targetInt, indexes, indexToAdvance) {
    var newIndexes = indexes.slice()
    if (indexToAdvance>=0) {
        newIndexes[indexToAdvance] = newIndexes[indexToAdvance]+1
        // console.log(newIndexes)
        if (newIndexes[indexToAdvance] == sourceArray.length-indexes.length+indexToAdvance+1) {
            return advanceIndexes(sourceArray, targetInt, indexes, indexToAdvance-1)
        }
        for (i = indexToAdvance+1; i < indexes.length; ++i) {
            newIndexes[i] = newIndexes[i-1]+1
        }
    }
    return newIndexes
}



export function compareAdds(sourceArray, targetInt, indexes, done) {
    // console.log("223", sourceArray, targetInt, indexes, done)
    if (checkDone(sourceArray, targetInt, indexes)) {
        addState.done = true;
    }
    // console.log("225", sourceArray, targetInt, indexes, done)
    if (!done) {
        let sum = indexes.map(i=>sourceArray[i]).reduce((a, b) => a + b, 0)
    console.log("225", sum, sourceArray, targetInt, indexes, done)
    if (sum > targetInt) {
            indexes = advanceIndexes(sourceArray, targetInt, indexes, indexes.length-2)
        } else if (sum < targetInt) {
            indexes = advanceIndexes(sourceArray, targetInt, indexes, indexes.length-1)
        } else
            done = true
    }
     console.log("224", sourceArray, targetInt, indexes, done)
    return {sourceArray, targetInt, indexes, done}
}