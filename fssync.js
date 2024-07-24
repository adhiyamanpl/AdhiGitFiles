const { readFile, writeFile } = require('fs');

readFile('./content/first.txt', 'utf-8', (err, firstResult) => {
    if (err) {
        console.log(err);
        return;
    }
    
    readFile('./content/second.txt', 'utf-8', (err, secondResult) => {
        if (err) {
            console.log(err);
            return;
        }
        
        writeFile('./content/writefirsttest2.txt', `Hello Append this: ${firstResult}, ${secondResult}`, (err,result) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(result);
        });
    });
});
