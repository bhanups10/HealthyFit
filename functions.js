function bmi(){
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    height /= 100;
    var result = weight / (height * height);
    result = result.toFixed(1);
    var str2 = '', str1 = "Your bmi score is : ";
    var ans = String(result);
    if(result>=18.5 && result<=24.9){
        str2 = ' and it is normal!';
    }
    else if(result<18.5){
        str2 = ' but you are underweight!';
    }
    else if(result>24.9){
        str2 = ' but you are overwight!';
    }
    else{
        str1 = '';
        ans = 'Please enter all required details!';
    }
    document.getElementById("result").innerHTML = str1 + ans + str2;
}