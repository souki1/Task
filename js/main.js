

var count1=false
var count2 =false
var count3=false;
var count4=false;
var count5=false;


var sub = document.getElementById('submit')
sub.disabled = true;

function fun(){
    count1=true;
    enable()
    console.log(count1)
    
}

function fun2(){
    count2=true
    enable()
    console.log(count2)

}
function fun3(){
    count3=true;
  enable()
    console.log(count3)

}
function fun4(){
    count4=true;
    enable()
    console.log(count4)

}
function fun5(){
    count5=true;
    enable()
    console.log(count5)
}


    function enable(){

        if(count1 && count2 && count3 && count4 && count5){
            sub.disabled=false
            sub.classList.remove('btn-secondary')
            sub.classList.add('btn-primary')
        }
    }

    


//console.log(count)










    //console.log(count )
        //  sub.disabled = false
        //  sub.classList.remove('btn-outline-secondary')
        //  sub.classList.add('btn-primary')
  

    //console.log(e)



