const sequelize = require("../utils/connection");
require("../models");

const main = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Me ejecute');
        process.exit();
    } catch (error) {
        console.log(error);
    }
};

main();
