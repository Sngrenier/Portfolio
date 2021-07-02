const express = require('express')

    const app = express()

    app.use(express.json())


    const port = 4001
    app.listen(port, () => console.log(`listening on port ${port}`))

    // const express = require('express');
    // const path = require('path');
    // const app = express();
    
    // app.use(express.static(path.join(__dirname, 'build')));
    
    // app.get('/', function (req, res) {
    //   res.sendFile(path.join(__dirname, 'build', 'index.html'));
    // });
    
    // app.listen(4001);
