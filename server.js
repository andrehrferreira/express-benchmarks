const express = require("express");
const { Inspector } = require("@cmmv/inspector");

process.on('SIGINT', async () => {
    await Inspector.stop();
    await Inspector.saveProfile('./profiles');
    process.exit(0);
});


(async () => {
    await Inspector.start();

    const app = express();

    app.get("/", (req, res) => {
        res.send("Hello World");
    });
    
    app.listen(3000);
})();
