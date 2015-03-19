/**
 * Created by userart on 18.03.15.
 */
    var http = require('http');
    var url = require('url');
    var counter = 0;
    var server = new http.Server(function(req,res){
        var urlParsed = url.parse(req.url, true);

            if (urlParsed.pathname == '/index.html'){
                res.end('Hello World');
                ++counter;

            }
            if (urlParsed.pathname == '/count.html'){
                res.end("Page index.html ->  " + counter + " visited ");


            }
            else {
                res.statusCode = 404;
                res.end('Page not Found');
            }
    });

    server.listen(1337,'localhost');

