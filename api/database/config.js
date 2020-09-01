config = {
    database: {
        uri: "mongodb+srv://swyftxUser:BlueSheep1@mycluster.zpf10.mongodb.net/MyCluster?retryWrites=true&w=majority",
        db_name: "kanban",
        card_collection:"cards"
    }
};
exports.default = config;