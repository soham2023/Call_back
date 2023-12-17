const books =
[
    {
        title : "book1",
        author: "author1",
        year: 2000
    },
    {
        title : "book2",
        author: "author2",
        year: 2001
    },
    {
        title : "book3",
        author: "author3",
        year: 2002
    }
]

function logTitles(titles)
{
    titles.sort();
    console.log(titles.join(","))
}
function booksTitle(books,callback)
{
    const titles = books.map((book)=>
   book.title)
   callback(titles);
}

booksTitle(books,logTitles);