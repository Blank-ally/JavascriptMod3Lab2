//Test One
const testOneEleOutput = document.getElementById('forLoopResultOne');
for(let i = 0 ; i < 10; i++){
testOneEleOutput.textContent += i  + ' ' ;
}


//Test Two
function testTwo() {
    const testTwoInput = document.getElementById('forLoopTwoInput').valueAsNumber
    const testTwoOutput = document.getElementById('forLoopResultTwo');

    testTwoOutput.textContent = '';

    for(let i = 0; i < testTwoInput;i++)
{
testTwoOutput.textContent += i + ' ';
}


}


//Test Three 
function testThree() {
    const baseValue = document.getElementById('forLoopThreeBaseInput').valueAsNumber;
    const topValue = document.getElementById('forLoopThreeTopInput').valueAsNumber;
    const result = document.getElementById('forLoopResultThree');
result.textContent = '';
    for(let i = baseValue; i < topValue; i++){
        result.textContent += i + ' ';
    }

}

//Test Four 
function testFour() {
const testFourBaseValue = document.getElementById('forLoopFourBaseInput').valueAsNumber;
const testFourTopValue = document.getElementById('forLoopFourTopInput').valueAsNumber;
const testFourIterValue = document.getElementById('forLoopFourIncrementerInput').valueAsNumber;
const testFourResult = document.getElementById('forLoopResultFour')
testFourResult.textContent = '';
for(let i = testFourBaseValue; i < testFourTopValue; i += testFourIterValue){
    testFourResult.textContent += i + ' ';
}
}


//Objects and Array used for testing:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let people = [
    new Person('Cindy', 14),
    new Person('John', 24),
    new Person('Shandy', 34),
    new Person('Raul', 44),
    new Person('Hannes', 54),
    new Person('Sonam', 64)
]

//the length property can be used to get the number of items in an array
console.log(people.length);


//Test Five
//you can clear out an element by doing: element.innerHTML = '';
function testFive()
{
    const testFiveResult = document.getElementById('forLoopResultFive');
    testFiveResult.textContent = '';

    for(let i = 0; i < people.length; i++){
       debugger
       const person = document.createElement('p')
       person.textContent = 'person ' + (i+1) + ': '+ people[i].name + ',' + people[i].age + ' ' ;
       testFiveResult.appendChild(person);
     
    }

}


//Test Six 
//you can clear out an element by doing: element.innerHTML = '';
function testSix()
{
const testSixBaseAge = document.getElementById('forLoopSixAge').valueAsNumber;
const testSixResult = document.getElementById('forLoopResultSix')
testSixResult.textContent = '';
for(let i = 0; i < people.length; i++){
    if(people[i].age > testSixBaseAge){
        const person = document.createElement('p')
       person.textContent = 'person ' + (i+1) + ': '+ people[i].name + ',' + people[i].age + ' ' ;
       testSixResult.appendChild(person);


    }
}

}