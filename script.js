window.addEventListener('load', (event)=>{
    let onloadData = '<center>welcome to calculator</center>'
    document.getElementsByTagName('p')[0].innerHTML = onloadData;
});

let result = '';
function buttonClickEvent(data){
    result += data;
    document.getElementsByTagName('p')[0].style.border = '2px solid rgb(126, 126, 126)';
    document.getElementsByTagName('p')[0].innerText = result;
}

function back(){
    let finalLength = result.length - 1;
    result = result.slice(0, finalLength);
    document.getElementsByTagName('p')[0].innerText = result;
    return result;
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
    return result;
}





