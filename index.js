console.log('I am Batman!');

let count = 0;

let element = document.getElementById('counter')

function increase(){
    count++;
    element.innerText = count;
}

function decrease(){
    count--;
    element.innerText = count;
}

function reset(){
    count = 0;
    element.innerHTML = "<mark>" + count + "</mark>";
}

function selectTheme(theme){
    let body = document.getElementsByTagName('body');
        body[0].className = theme;

        let main = document.getElementsByTagName('main');
        main[0].className = theme;

        let buttons = document.getElementsByTagName('button');

            for(i = 0; i < buttons.length; i++){
                buttons[i].className = theme;
            }


}

