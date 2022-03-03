let Parser = require('rss-parser');
let parser = new Parser();

(async() => {
    let feed= await parser.parseURL('http://ep00.epimg.net/rss/tags/ultimas_noticias.xml')
    console.log(feed.title);

    feed.items.forEach((item) => {
        console.log(item.title);
    });
})();