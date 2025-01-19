$(document).ready(function () {
    let sound = new Audio('./sound/cat-meow-loud-225307.mp3');

    $('.sound').click(function (e) {
        sound.play();
    });

    $('#cat').click(function (e) {
        $('.imgAnimal').attr('src', './photos/michael-sum-LEpfefQf4rU-unsplash.jpg');
        $('.description').text('Cats are calm and independent.');
        sound = new Audio('./sound/cat-meow-loud-225307.mp3');
    });

    $('#dog').click(function (e) {
        $('.imgAnimal').attr('src', './photos/golden-retriever-tongue-out.jpg');
        $('.description').text('Dogs are loyal and friendly companions.');
        sound = new Audio('./sound/dog-bark-179915.mp3');
    });

    $('#meerkat').click(function (e) {
        $('.imgAnimal').attr('src', './photos/meer1.jpg');
        $('.description').text('Meerkats are social and curious animals.');
        sound = new Audio('./sound/surok-30565.mp3');
    });
});
