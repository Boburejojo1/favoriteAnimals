$(document).ready(function () {
    $('.imgAnimal').attr('src', 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg');
        $('.description').text('Cats are calm and independent.');
    let sound = new Audio('/sound/cat-meow-loud-225307.mp3')
    $('.sound').click(function (e) { 
    sound.play()
        
    });
    
    
    $('#cat').click(function (e) { 
        $('.imgAnimal').fadeIn('slow');
        $('.imgAnimal').attr('src', 'https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg');
        $('.description').text('Cats are calm and independent.');
        sound = new Audio('/sound/cat-meow-loud-225307.mp3')
    
    });

    $('#dog').click(function (e) { 
        $('.imgAnimal').fadeIn('slow');
        $('.imgAnimal').attr('src', 'https://i.insider.com/5c20f20ddde86759147f9f52?width=1136&format=jpeg');
        $('.description').text('Dogs are loyal and friendly companions.');
        sound = new Audio('/sound/dog-bark-179915.mp3')
    
    });

    $('#meerkat').click(function (e) { 
        
        $('.imgAnimal').attr('src', 'https://www.secretvalley.ie/wp-content/uploads/2022/03/meer1.jpg');
        $('.description').text('Meerkats are social and curious animals.');
        sound = new Audio('/sound/surok-30565.mp3')
    
    });



});

// dog https://www.nylabone.com/-/media/project/oneweb/nylabone/images/dog101/10-intelligent-dog-breeds/golden-retriever-tongue-out.jpg?h=430&w=710&hash=7FEB820D235A44B76B271060E03572C7
// cat https://images.squarespace-cdn.com/content/v1/607f89e638219e13eee71b1e/1684821560422-SD5V37BAG28BURTLIXUQ/michael-sum-LEpfefQf4rU-unsplash.jpg
// meerkat https://www.secretvalley.ie/wp-content/uploads/2022/03/meer1.jpg