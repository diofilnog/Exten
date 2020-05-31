
document.addEventListener('DOMContentLoaded',function(){
    
    document.querySelector('#botao').addEventListener('click',function(){
        let text = document.querySelector('#texto').value;
        document.querySelector("#resultado").innerHTML = upper(text);
    })

    function upper (text){
        return text.toUpperCase();
    }
})