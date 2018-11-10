const url = require('url')
const qs = require('querystring')


module.exports = {

  serverHandle: function (req, res) {
    const page = url.parse(req.url);
    const params = qs.parse(page.query);

    console.log(page.pathname)

    if(page.pathname === "/hello" && 'name' in params && params['name']=="Maximilien"){
      res.writeHead(200)
      res.write("My name is " + params['name'] + ", I'm currently a 5th year student at ECE PARIS. ")
    } else if (page.pathname ==="/hello" && 'name' in params ){
      res.writeHead(200)
      res.write("Hello " + params['name'])
    } else if (page.pathname === '/'){
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(`<h1> Welcome to my first lab!</h1> <p> If you want this page to say hello go to <a href="/hello?name=">/hello?name=</a><b>[your name]</b></p> <p> If you want a short description of me go to <a href="/hello?name=Maximilien">/hello?name=Maximilien</a></p>`);
    } else {
      res.writeHead(404)
      res.write('PAGE NOT FOUND')
    }

    res.end();
  }
}
