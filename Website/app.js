/*
document.querySelector('button').addEventListener('click',function clickHandler(e){

    this.removeEventListener('click',clickHandler,false);

    e.preventDefault();
    var self = this;
    setTimeout(function(){
        self.className = 'loading';
    },125);

    setTimeout(function(){
        self.className = 'ready';
    },4300);

},false);



function GACHA() {
    result = Math.round(Math.random() * 100);
    if (result < 50){
        document.getElementById("t").innerHTML = result;
        break;
    }
    if (result >= 50 && result <= 75){
        document.getElementById("t").innerHTML = result;
        break;
    }
    if (result > 75 && result <= 95){
        document.getElementById("t").innerHTML = result;
        break;
    }
    if (result > 95){
        document.getElementById("t").innerHTML = result;
        break;
    }
}
*/