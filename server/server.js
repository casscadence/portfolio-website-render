const express = require("express");
const cors = require('cors')
const app = express();
const port = process.env.PORT || 3001;

app.get('/secret', (req, res) => { 
  res.type('html').send(htmltest);
}); 

app.get('/testing', (req, res) => { 
  res.json({ 
    id: 'k',
    title: 'k',
    date: 'k',
    desc: 'k',
    type: 'k',
    tools: 'k',
    contribution: 'k',
    number: 'k',
    length: 'k',
  })
}); 

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;

const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Render!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Render!
    </section>
  </body>
</html>
`

const htmltest = `
<!DOCTYPE html>
<html>
  <head>
    <title>Hello from Secret!</title>
    <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
    <script>
      setTimeout(() => {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          disableForReducedMotion: true
        });
      }, 500);
    </script>
    <style>
      @import url("https://p.typekit.net/p.css?s=1&k=vnd5zic&ht=tk&f=39475.39476.39477.39478.39479.39480.39481.39482&a=18673890&app=typekit&e=css");
      @font-face {
        font-family: "neo-sans";
        src: url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/l?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff2"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/d?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("woff"), url("https://use.typekit.net/af/00ac0a/00000000000000003b9b2033/27/a?primer=7cdcb44be4a7db8877ffa5c0007b8dd865b3bbc383831fe2ea177f62257a9191&fvd=n7&v=3") format("opentype");
        font-style: normal;
        font-weight: 700;
      }
      html {
        font-family: neo-sans;
        font-weight: 700;
        font-size: calc(62rem / 16);
      }
      body {
        background: white;
      }
      section {
        border-radius: 1em;
        padding: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
      }
    </style>
  </head>
  <body>
    <section>
      Hello from Secret!
    </section>
  </body>
</html>
`

//

//const express = require('express');
//const { createPool } = require('mysql');
//const app = express();
//const port = process.env.PORT || 3000;

/* app.use(cors({
  origin: 'https://ariellebartee.netlify.app'
})); */

/* app.get('/',(req, res) => { 
  res.json("welcome to our server") 
});  */

/* app.get('/testing', cors(corsOptions), (req, res) => {
  res.json({ 
    id: 'k',
    title: 'k',
    date: 'k',
    desc: 'k',
    type: 'k',
    tools: 'k',
    contribution: 'k',
    number: 'k',
    length: 'k',
  })
}) */

// (async () => {
// /*     const pool = createPool({
//       host: process.env.DB_HOST,
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_DATABASE,
//       connectionLimit: 10
//     })
  
//     const projectData = await new Promise((resolve) => {
//       pool.query("select * from project", (err, res) => {
//         resolve(res)
//       })
//     }) */

//     app.get('/testing', (req, res) => {
//       res.json({ 
//         id: 'k',
//         title: 'k',
//         date: 'k',
//         desc: 'k',
//         type: 'k',
//         tools: 'k',
//         contribution: 'k',
//         number: 'k',
//         length: 'k',
//       })
// /*       for(let i=0; i<=projectData.length-1; i++) {
//         if(projectData[i].project_title === req.params.projectId){
//           res.json({ 
//             id: projectData[i].project_id,
//             title: projectData[i].project_title,
//             date: projectData[i].project_date,
//             desc: projectData[i].project_desc,
//             type: projectData[i].project_type,
//             tools: projectData[i].project_tools,
//             contribution: projectData[i].project_contribution,
//             number: i,
//             length: projectData.length
//           })
//         }
//       } */
//     })
    
// })()

//app.listen(process.env.PORT || 3000, () => {console.log('Server started on port railway')});

//app.listen(port, () => {console.log('Server started on port 5000')});

/* if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} */