const max = 1500;
function ran_num_ge()
{
    var seed = new Date().getTime();
    var res = Math.floor(Math.random(seed) * max);
    return res;
}

var num1 = ran_num_ge();
var num2 = ran_num_ge();
var num3 = ran_num_ge();
var num = new Array();
var mark = new Array();

num[0 ] = Math.floor(num1/1000)%10;
num[1 ] = Math.floor(num1/100)%10;
num[2 ] = Math.floor(num1/10)%10;
num[3 ] = Math.floor(num1)%10;
num[4 ] = Math.floor(num2/1000)%10;
num[5 ] = Math.floor(num2/100)%10;
num[6 ] = Math.floor(num2/10)%10;
num[7 ] = Math.floor(num2)%10;
num[8 ] = Math.floor(num3/1000)%10;
num[9 ] = Math.floor(num3/100)%10;
num[10] = Math.floor(num3/10)%10;
num[11] = Math.floor(num3)%10;

for(var i =0;i<13;i++) {
    mark[i] = 0;
}

var key =0;

function show(element)
{
    if(mark[element.id]) return;
    mark[element.id] = 1;
    var strk = num[key]+"";
    var str = "url('"+strk+".png')";
    console.log(str);
    key++;
    element.style.backgroundImage = str;
}
