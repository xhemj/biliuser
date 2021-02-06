const axios = require("axios");

module.exports = async (req, res) => {
    let { name = "啥也没有23333333333333333333333333333" } = req.query;
    let response = await axios({
        url: "https://api.bilibili.com/x/web-interface/search/type",
        method: "GET",
        params: {
            "search_type": "bili_user",
            "keyword": name
        }
    });
    console.log("==========================");
    console.log(response.data.data);
    console.log("==========================");
    let userData = response.data.data;
    if (!userData.result) {
        res.send("找不到你呢！");
        res.end()
    };
    if (userData.result && userData.result[0].type == "bili_user") {
        res.writeHead(302, {
            Location: "https://space.bilibili.com/" + userData.result[0].mid
        });
        res.end();
    };
    res.end();
}