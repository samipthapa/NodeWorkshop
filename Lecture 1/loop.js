function myApp() {
    const arr = [2, 5, 6, 7, 8, 9, 10];
    var mapArr;
    var filterArr;

    // console.log(typeof mapArr);

    // forEach
    // arr.forEach(foreach1);
    // arr.forEach(foreach2);
    // console.log(arr);

    // map
    // mapArr = arr.map(map);
    // console.log(mapArr);
    // console.log(arr);

    filterArr = arr.filter(filter);
    console.log(filterArr);
    console.log(arr);
}

function filter(item) {
    return item % 2 == 0;
}

function map(item) {
    return `${item}hello`
}

function foreach1(num) {
    console.log(num);
}

function foreach2(item, index, arr) {
    arr[index] = item * 10; 
}

myApp();

console.log('First');
console.log('Second');