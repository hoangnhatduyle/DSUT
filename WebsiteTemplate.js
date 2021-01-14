const fs = require('fs');

// fs.writeFileSync('index.html', 'testing data', (err) => {
//     if (err) throw err;
//     console.log('Template HTML File is created successfully.');
// });

// if (!fs.existsSync(cssFolder) && !fs.existsSync(jsFolder)) {
//     try {
//         fs.mkdirSync(cssFolder);
//         fs.mkdirSync(jsFolder);
//     } catch (e) {
//         console.log("An error occurred: " + e);
//     }
// }

// fs.writeFileSync('style.css', 'testing data', (err) => {
//     if (err) throw err;
//     console.log('Template CSS File is created successfully.');
// });

// fs.writeFileSync('app.js', 'testing data', (err) => {
//     if (err) throw err;
//     console.log('Template JS File is created successfully.');
// }); 

// const args = process.argv.slice(2);
const cssFolderPath = "./css";
const jsFolderPath = "./js";
const htmlFileContent = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">\n<title>Document</title>\n<link rel="stylesheet" href="reset.css">\n<link rel="stylesheet" href="style.css">\n</head>\n<body>\n<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>\n<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>\n</body>\n</html>'
const resetCssContent = '/* http://meyerweb.com/eric/tools/css/reset/\nv2.0 | 20110126\nLicense: none(public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {\n  display: block;\n}\nbody {\n  line-height: 1;\n}\nol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after, q:before, q:after {\n  content: "";\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}'

const createDir = (dirPath) => {
    if (!fs.existsSync(dirPath)) {
        try {
            fs.mkdirSync(dirPath);
            console.log("Succsesfully created the folder");
        } catch (e) {
            console.log("An error occurred: " + e);
        }
    } else {
        console.log("The folder has already existed. Please try again.")
    }
}

const createFile = (fileName, filePath = process.cwd(), fileContent = "") => {
    try {
        fs.writeFileSync(`${filePath}/${fileName}`, fileContent);
        console.log('Template File is created successfully.');
    } catch (e) {
        console.log("An error occurred: " + e);
    }
}

createFile("index.html", process.cwd(), htmlFileContent)
createDir(cssFolderPath)
createDir(jsFolderPath)
createFile("style.css", cssFolderPath)
createFile("reset.css", cssFolderPath, resetCssContent)
createFile("app.js", jsFolderPath)