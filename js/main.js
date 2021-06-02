



let count = 0;
let sub = document.getElementById('submit');

sub.disabled = true
function fun(e){
    
    if(e==1){
        count++;
    }
    else{
        count++;
    }
     if(count>=5){
        sub.disabled = false
          sub.classList.remove('btn-secondary')
          sub.classList.add('btn-primary')
    }
console.log(count);

}
    //console.log(count )
        //  sub.disabled = false
        //  sub.classList.remove('btn-outline-secondary')
        //  sub.classList.add('btn-primary')
  

    //console.log(e)



