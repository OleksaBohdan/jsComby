let list = [51, 56, 58, 59, 61]
let x = 3
let maxSumm = 174

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
  }
combNumber = factorial(list.length) / (factorial(x) * factorial((list.length - x)))



function comb(list, x) {
    let combinations = []
    len = list.length

    let indexes = []
    for (let i = 0; i < x; i ++) {
        indexes.push(i)
    }

    let indexesList = []
    for (let i = 0; i < x; i ++) {
        indexesList.push(list[indexes[i]])
    }
    combinations.push(indexesList)
    
    counter = 0
    while(counter < combNumber - 1) {

        let index = 0
        for (let i = x-1; i > 0; i--) {

            if (indexes[i] != i + len - x) {
                index = i
                break
            } else {}
        }
        indexes[index] += 1

        for (let j = index+1; j < x; j++) {
            indexes[j] = indexes[j-1] + 1
        }
        
        let indexesList = []
        for (let i = 0; i < x; i ++) {
            indexesList.push(list[indexes[i]])
        }
        combinations.push(indexesList)
        counter += 1

    }
    return combinations
}

function chooseDistance(t, list, x) {

    temp = comb(list, x)
    let distanceList = []

    temp.forEach(function(item, index, array) {
        distance = item.reduce(function(sum, current) {
            return sum + current
        }, 0)
        distanceList.push(distance)
    })

    let closestLeft,
    closestRight,
    data = distanceList,
    number = t,
    current;
    for (let i = 0; i < data.length; i++) {
    current = data[i];
    if (current < number && (typeof closestLeft === 'undefined' || closestLeft < current)) {
        closestLeft = current;
    } else if (current > number && (typeof closestRight === 'undefined' || closestRight > current)) {
        closestRight = current;
    } }   
    console.log("Искомое расстояние = ", closestLeft)
}

chooseDistance(maxSumm, list, x)

