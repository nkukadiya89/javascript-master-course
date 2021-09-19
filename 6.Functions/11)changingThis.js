const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function(tag) {
            console.log(this.title, tag);
        }.bind(this));
    }
};

video.showTags();

const video2 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // const self = this;
        this.tags.forEach(tag => {
            console.log(this.title, tag);
        });
    }
};
//arrow functions inherits the the 'this'
video2.showTags()

// function playVideo() {
//     console.log(this);
// }

// playVideo.call({ name: 'savan' }), 1, 2, 3;
// playVideo.apply({ name: 'savan' }, [1, 2, 3]);
// const fn = playVideo.bind({ name: 'savan' })();

// //this difference between call and apply is only about passing arguments
// //in call we can use differents args but we used array in apply method

// playVideo()