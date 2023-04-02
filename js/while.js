//Test One
function whileTestOne() {
    const whileTestOneResult = document.getElementById('whileLoopResultOne');
    let i = 0
    while(window.confirm('Continue loop?')){
      i++
whileTestOneResult.textContent = i;
    }



}

//Test Two
function whileTestTwo() {
    const whileTestTwoBase = document.getElementById('whileLoopTwoCount').valueAsNumber;
    const whileTestTwoResult = document.getElementById('whileLoopResultTwo');
    let i = 0

    while(i < whileTestTwoBase){
    whileTestTwoResult.textContent += (i+1) + ' ';
    i++;
}

}

