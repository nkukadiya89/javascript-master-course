//'this' refferences to the object that is executing the current function
//if that function is part of an object it is called a method and 'this' refferences to the object itself
//if not it refferences to window object in browsers and global in node
//function=> global(window ,global)

const video = {
    title: 'a',
    play() {
        console.log(this);
    }
};

function Video(title) {
    this.title = title;
    console.log(this);
}
const v = new Video('a');

//when dealing with regular function 'this' by default refferences to the global object
//but if you call a function using the 'new' operator 'this ' refferences to new object

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }, this);
    }
};

video2.showTags();