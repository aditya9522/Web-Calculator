window.addEventListener('load', (event)=>{
    let onloadData = '<center>welcome to calculator</center>'
    document.getElementsByTagName('p')[0].innerHTML = onloadData;
});

let result = '';
function buttonClickEvent(data){
    result += data;
    document.getElementsByTagName('p')[0].innerText = result;
    document.getElementsByTagName('p')[0].style.border = '2px solid rgb(126, 126, 126)';
}

function back(){
    let previousResult = document.getElementsByTagName('p')[0].innerText;
    result = previousResult.slice(0, previousResult.length - 1);
    document.getElementsByTagName('p')[0].innerText = result;
}

function calculation(){
    if (result.includes('x')){
        result = result.replace('x', '*');
    }
    
    try{
        document.querySelector('#history').innerHTML = result;
        result = eval(result);
    } catch(error){
        // alert('Please provide valid input!');
        document.querySelector('#history').innerHTML = 'Invalid Operation';
        document.getElementsByTagName('p')[0].style.border = '2px solid rgb(255, 0, 0)';
    }
    
    document.getElementsByTagName('p')[0].innerText = result;
}
