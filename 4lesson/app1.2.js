'use strict';

/**
    Сделайте в стиле es5, а затем в стиле es6 (по аналогии из дополнительных видео -> 3 примеры
    наследования -> механика наследования),
    а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
    типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
    б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
    помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
    свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
    Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
    highlighted значение true.
 */

// ES5
function PostES5(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

PostES5.prototype.edit = function(text) {
    this.text = text;
}

function AttachedPostES5(author, text, date) {
    PostES5.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPostES5.prototype = Object.create(PostES5.prototype);
AttachedPostES5.prototype.constructor = PostES5;

AttachedPostES5.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
}

let post = new AttachedPostES5("meES5", "yahooES5", "10.10.10");
console.log(post);
post.makeTextHighlighted();
console.log(post);


//ES6

class PostES6 {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit = function(text) {
        this.text = text;
    }
}

class AttachedPostES6 extends PostES6 {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted = function() {
        this.highlighted = true;
    }
}


let post1 = new AttachedPostES6("meES6", "yahooES6", "10.10.10");
console.log(post1);
post1.makeTextHighlighted();
console.log(post1);