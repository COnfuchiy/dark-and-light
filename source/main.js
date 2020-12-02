/**
 * Created by Dima on 29.11.2020.
 */

let images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg",
    "9.jpg",
    "10.jpg",
    "11.jpg",
    "12.jpeg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.webp",
    "17.webp",
    "18.jpg",
    "19.webp",
    "20.webp",

];


function pseudo_random() {
    let index = Math.floor(Math.random() * (19 + 1));
    while (document.indexes.indexOf(index)===-1)
        index = Math.floor(Math.random() * (19 + 1));
    document.indexes.splice(document.indexes.indexOf(index),1);
    return index;
}

window.onload = function (e) {
    document.indexes =[];
    for(let i = 0; i<20;i++)
        document.indexes.push(i);
    document.tree = new Tree();
};

function end_game(results, path) {
    $('.answ-area').empty();
    $('.questions-field').empty();
    $('.content').append(`
    <div class="end-game-content">
        <div class="result-content">`
        +results+`
        </div>
        <div class="path-content"></div>
        <div class="btn-again-content">
            <a class="btn-again" href="#" onclick="location.reload();">Пройти тест заново</a>
        </div>
    </div>`);
    let path_area = $('.path-content');
    for(let answ of path){
        path_area.append(`
        <div class="path-item">`+(path.indexOf(answ)+1)+`. "`+answ.question+`": <span class="answ-text">`+answ.answ+`</span></div>
        `);
    }
}

function start_game(index) {
    let content_area = $('.content');
    content_area.empty();
    content_area.append(`
    <div class="photo">
        <div class="questions-field"></div>
        <div class="answ-area">
            <a class="bad-karma" href="#" onclick="document.tree.declarate_answer(0)">
            Это про меня...
            </a>
            <a class="good-karma" href="#" onclick="document.tree.declarate_answer(1)">
            Это не я...
            </a>
        </div>
    </div>
    `);
    document.tree.start_game(index);
}

function set_new_questions(question) {
    $('.photo').fadeOut(100,'linear',function () {
        $('.questions-field')[0].innerText = question;
        $('.photo').css('background', 'url(source/img/'+images[pseudo_random()]+') no-repeat center');
        $('.photo').fadeIn(500);
    });

}

function set_brightness() {
    $('.photo').css('filter', 'brightness(' + document.tree.brightness + '%)');
}