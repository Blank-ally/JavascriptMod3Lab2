//Test One
function doWhileTestOne() {
    let i = 0;
    const result = document.getElementById('doWhileLoopResultOne')
    do{
        i++
        result.textContent = i;

    }while(window.confirm('Continue the loop?'));
}