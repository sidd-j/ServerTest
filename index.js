const app = require("./app");
const db = require("./config/db")

const port = process.env.PORT;



app.listen(port, () => {
    console.log(`Port ${port} Running`);
});