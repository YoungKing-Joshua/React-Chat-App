const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(express.json());
app.use(cors({origin: true}));

const CHAT_ENGINE_PROJECT_ID = "f40226ca-c415-4799-89f9-99206b6c6667";
const CHAT_ENGINE_PRIVATE_KEY = "26e67981-d8e9-4c06-90b3-122ee25567eb";

app.post("/authenticate", async (req, res) => {
    const { username  } = req.body
    
    try { 
        const r = await axios.put (
            "https://api.chatengine.io/users/",
            { username: username, secret : username , first_name: username },
            { headers: { "Private-Key": CHAT_ENGINE_PRIVATE_KEY } }
        );
        return res.status(r.status).json(r.data);
    } catch (e) {
        return res.status(e.response.status).json(e.response.data);
    }
});


app.listen(3001);