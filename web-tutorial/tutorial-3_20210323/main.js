///資料型態
// "string"
// "不限語言都可以"
// "أهلا بك"
// "5"
// 5
// true
// false
// [1,2,3,apple,banana]



/*
/// 問名字、prompt、alert
var name = prompt("What's your name?","");
alert("Your name is "+ name +"." );
*/


//用prompt 問：你今年幾歲
//alert：你是()年出生=>要計算
var age = prompt("How old are you?","");
var year = 2021 - age;
alert("You are "+ year +" year-old." );


//按鍵
{/* <button type="button" onclick="document.write('HI')">Try it</button> */}







///判斷式

/* 
if(判斷){
    若判斷的結果是正確的(true)，執行此大括號區塊中的程式碼。
    反之，若結果是錯誤的(false)，忽略此區塊。
}
*/
/*
if(true){
    alert("I'm right!")
}

if(false){
    alert("I'm right!")
}
*/

///改數字判斷

/*
var money=prompt("要領多少錢?","");
if(money>30000){
    alert("超過單日領款上限");
}
*/


/* 
if(判斷){
    若判斷的結果是正確的(true)，執行此大括號區塊中的程式碼。
}else{
    若判斷是錯誤的(false)，執行else大括號區跨中的程式碼。
}
*/

/*
var money=prompt("要領多少錢?","");
if(money>30000){
    alert("超過單日領款上限");
}else{
    alert("請領取現金並妥善保管");
}
*/



/* 
if(判斷1){
    若判斷的結果是正確的(true)，執行此大括號區塊中的程式碼。
    若第一次判斷錯誤(false)，繼續進行下方 else if 的第二次判斷。
}else if(判斷2){
    同上
}else{
    若以上所有判斷都錯誤(false)，執行else區塊中的
}
*/

/*
var n=prompt("請輸入數字","");
if(n>500){
    alert(n+">500");
}else if(n>300){
    alert(n+">300");
}else{
    alert(n+"<=300");
}
*/

/*
///設計網頁計算機
var n1=prompt("請輸入數字","");
var op=prompt("請輸入運算符號:+,-,*,/","");
var n2=prompt("請輸入數字","");

var result;
if(op=="+"){
    result=n1+n2
}else if(op=="-"){
    result=n1-n2
}else if(op=="*"){
    result=n1*n2
}else if(op=="/"){
    result=n1/n2
}else{
    result="NAN，不合法的運算"
}
alert(result)
*/





/*
///設計網頁計算機
var n1=prompt("請輸入任意數字","");
var n2=prompt("請輸入任意數字","");
///資料型態的轉換：字串->數字
n1=Number(n1)
n2=Number(n2)
///設定非數字的值：isNaN(value)->如果給定值是 NaN 就回傳 true、否則就回傳 false。
var a=isNaN(n1);
var b=isNaN(n2);
var result;

if (a==true){
    result="只能輸入數字";
}else{    
    var n2=prompt("請輸入任意數字","");
    n2=Number(n2);
    var b=isNaN(n2);
    if(b==true){
    result="只能輸入數字";
    }else{
        var op=prompt("請輸入運算符號：+,-,*,/","");
        if(op=="+"){
            result=n1+n2;
            }else if(op=="-"){
                result=n1-n2;
            }else if(op=="*"){
                result=n1*n2;
            }else if(op=="/"){
                result=n1/n2;
            }else{
                result="不合法的運算符號";
            }}}
    alert(result);
*/