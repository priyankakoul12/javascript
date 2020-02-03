
const quotes =
    [
        {

            name: '"Walt Disney"',
            quote: '"The Way Get Started Is To Quit Talking And Begin Doing."'
        },
        {
            name: '"Will Rogers"',
            quote: '"Don’t Let Yesterday Take Up Too Much Of Today."'
        },
        {
            name: '"Maya Angelou"',
            quote: '"We May Encounter Many Defeats But We Must Not Be Defeated."'
        },
        {
            name: '"Dr. Henry Link"',
            quote: '"We Generate Fears While We Sit. We Overcome Them By Action."'
        },
        {
            name: '"Albert Einstein"',
            quote: '"Creativity Is Intelligence Having Fun."'
        }
    ]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');
const quoteNumber = document.querySelector('#quoteNumber');


quoteBtn.addEventListener('click',displayQuote);

function displayQuote()
{
    let number = Math.floor(Math.random()*quotes.length);
    quoteAuthor.innerHTML = quotes[number].name;
    quote.innerHTML = quotes[number].quote;
    quoteNumber.innerHTML = number;

}
