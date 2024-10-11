// Reverse a String
function reverse(a){
    var reversed="";
    for (let i=a.length-1;i>=0;i--){
        reversed+=a[i];
    }
    return reversed;
}
console.log(reverse("hichem"));

// Count Characters
function count(b){
    var number=0;
    for (let i=0; i<b.length;i++){
        number+=1;
    }
    return number;
}
console.log(count("how many char"));

// Capitalize Words
function capitalize(c) {
    var cap = c.split(' ');
    for (let i = 0; i < cap.length; i++) {
     cap[i] = cap[i].charAt(0).toUpperCase() + cap[i].slice(1).toLowerCase();     
    }
    return cap.join(' '); 
   }
console.log(capitalize("capitalize first letter: Implement a function that capitaLizes the first letter of each word in a sentence"));

// Find Maximum and Minimum
function findMax(arr){
    var max=arr[0];
    for (let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
            }
    }
    return max;
}
function findMin(arr){
    var min=arr[0];
    for (let i=1;i<arr.length;i++){
        if(arr[i]<min){
            min=arr[i];
        }
    }
    return min;
}
console.log("max_AND_min([30,2,85,2,-18,6,0,14,108,20,96,1]): max=",findMax([30,2,85,2,-18,6,0,14,108,20,96,1]),"min=",findMin([30,2,85,2,-18,6,0,14,108,20,96,1]));

// Sum of Array
function sumArray(arr){
    var sum=0;
    for (let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}
console.log('sumArray([2,5,2,8,6])=',sumArray([2,5,2,8,6]))

// Filter Array: I will extract from array any element that is not a number
function filter(arr){
    var filterArray=[];
    for (let i=0;i<arr.length;i++){
        if(typeof(arr[i])==='number'&&!isNaN(arr[i])){
            filterArray.push(arr[i]);
        }
    }
    return filterArray;
}
console.log("filter([false,2,5,NaN,undefined,'apple',2,true,8,'b',6,'bnh5'])=",filter([false,2,5,NaN,undefined,'apple',2,true,8,'b',6,'bnh5']))

// Factorial
function factoriel(number){
    var f=1;
    for (let i=2;i<=number;i++){
        f=f*i;
    }
    return f;
}
console.log('factoriel(6)=',factoriel(6));

// Prime Number Check
function prime(number){
    for(let i=2;i<number;i++){
        if(number%i==0){
            return false;
        }
        else{
            return true;
        }
    }
}
console.log('prime(121)=',prime(121));

// Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms. (search on the net )
function Fibonacci(number){
    var F=[0,1]
    for (let i=2;i<=number;i++){
        F[i]=F[i-2]+F[i-1];
        F.push(F[i]);
    }
    return F[number];
}
console.log('Fibonacci(16)=',Fibonacci(16));