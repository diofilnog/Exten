
document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector('.botaoMa').addEventListener('click',function(){
        let text = document.querySelector('#texto').value;
        document.querySelector("#text-resultado").innerHTML = upper(text);
    })
    function upper (text){
        return text.toUpperCase();
    }

    document.querySelector('.botaoMi').addEventListener('click',function(){
        let textM = document.querySelector('#texto').value;
        document.querySelector("#text-resultado").innerHTML = lower(textM);
    })

    function lower (textM){
        return textM.toLowerCase();
    }
})
upper(text);
lower(textM);