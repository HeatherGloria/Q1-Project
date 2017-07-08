(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function() {



    $('.getDevotional').click(function() {
          //Your beautiful list of books that you will not need :/
        let bibleBooks = [
            'Matthew',
            'Mark',
            'Luke',
            'John',
            'Acts (of the Apostles)',
            'Romans',
            '1 Corinthians',
            '2 Corinthians',
            'Galatians',
            'Ephesians',
            'Philippians',
            'Colossians',
            '1 Thessalonians',
            '2 Thessalonians',
            '1 Timothy',
            '2 Timothy',
            'Titus',
            'Philemon',
            'Hebrews',
            'James',
            '1 Peter',
            '2 Peter',
            '1 John',
            '2 John',
            '3 John',
            'Jude',
            'Revelation',
            'Genesis',
            'Exodus',
            'Leviticus',
            'Numbers',
            'Deuteronomy',
            'Joshua',
            'Judges',
            'Ruth',
            '1 Samuel',
            '2 Samuel',
            '1 Kings',
            '2 Kings',
            '1 Chronicles',
            '2 Chronicles',
            'Ezra',
            'Nehemiah',
            'Esther',
            'Job',
            'Psalms',
            'Proverbs',
            'Ecclesiastes',
            'Song of Solomon',
            'Isaiah',
            'Jeremiah',
            'Lamentations',
            'Ezekiel',
            'Daniel',
            'Hosea',
            'Joel',
            'Amos',
            'Obadiah',
            'Jonah',
            'Micah',
            'Nahum',
            'Habakkuk',
            'Zephaniah',
            'Haggai',
            'Zechariah',
            'Malachi'
            ]

        var books = Math.floor(Math.random() * bibleBooks.length)
        var rndmBook = bibleBooks[books];



        $.ajax({
            url: 'http://getbible.net/json',
            dataType: 'jsonp',
            data: `p=${rndmBook}`,
            jsonp: 'getbible',


            success: function(data) {

              // for (var i = 0; i < data.length; i++) {


              var book = data;
              var length = Object.keys(data.book).length;
              var chapterIndex = Math.floor(Math.random() * length);
              var randomChapter = data.book[chapterIndex];
              var pLength = Object.keys(randomChapter.chapter).length;
              var pIndex = Math.floor(Math.random() * pLength);
              var randomPassage = randomChapter.chapter[pIndex];
              // console.log(randomPassage.verse);
              // console.log(book);



              $('#scripture').text('');
              $('#scripture').append(randomPassage.verse);


            },
            error: function() {
                jQuery('#scripture').html('<h2>No scripture was returned, please try again!</h2>'); // <---- this is the div id we update
            },
        });

    })
})
