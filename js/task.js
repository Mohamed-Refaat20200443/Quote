function test (){

listOfQuotes = [

{
    'author': 'Epictetus', 
     'quote': 'It\'s not what happens to you, but how you react to it that matters.'
} ,


{
    'author': 'Oscar Wilde', 
     'quote': ' Be yourself; everyone else is already taken.'
} ,



{
    'author': 'Albert Einstein', 
     'quote': 'Two things are infinite: the universe and human stupidity; and Iam not sure about the universe.'
} ,



{
    'author': 'Frank Zappa', 
     'quote': 'So many books, so little time.'
} ,



{
    'author': 'Marcus Tullius Cicero', 
     'quote': 'A room without books is like a body without a soul.'
} ,


{
    'author': 'Dr. Seuss', 
     'quote': 'You know you\'re in love when you can\'t fall asleep because reality is finally better than your dreams.'
} ,



{
    'author': 'Mae West', 
     'quote': 'You only live once, but if you do it right, once is enough.'
} ,



{
    'author': 'Mahatma Gandhi', 
     'quote': 'Be the change that you wish to see in the world.'
} ,



{
    'author': 'Robert Frost', 
     'quote': 'In three words I can sum up everything I\'ve learned about life: it goes on'
} ,


{
    'author': 'J.K. Rowling, Harry Potter and the Goblet of Fire', 
     'quote': 'If you want to know what a man\'s like, take a good look at how he treats his inferiors, not his equals.'
} ,




{
    'author': 'Mark Twain', 
     'quote': 'If you tell the truth, you don\'t have to remember anything.'
} ,




{
    'author': 'Elbert Hubbard', 
     'quote': 'A friend is someone who knows all about you and still loves you.'
} ,




{
    'author': 'Oscar Wilde', 
     'quote': 'To live is the rarest thing in the world. Most people exist, that is all.'
} ,


{
    'author': 'Oscar Wilde', 
     'quote': 'Always forgive your enemies; nothing annoys them so much.'
} ,















]

var randomNumber=Math.floor(Math.random() * (13 - 0 + 1)) + 0;

if(true){
    document.getElementById("p_content").innerHTML=listOfQuotes[randomNumber].quote ;

    document.getElementById("p_auther").innerHTML=listOfQuotes[randomNumber].author ;
}



}