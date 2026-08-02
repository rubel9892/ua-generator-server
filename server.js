const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

let uaDatabase = [
"Mozilla/5.0 (Linux; Android 16; SM-F731B) AppleWebKit/537.36 Chrome/146.0.3463.202 Mobile Safari/537.36",
"Mozilla/5.0 (Linux; Android 15; Pixel 9 Pro XL) AppleWebKit/537.36 Chrome/150.0.5967.151 Mobile Safari/537.36",
"Mozilla/5.0 (iPhone; CPU iPhone OS 18_0 like Mac OS X) AppleWebKit/605.1.15 Version/18.0 Mobile/15E148 Safari/604.1",
"Mozilla/5.0 (Linux; Android 14; SM-S938B) AppleWebKit/537.36 Chrome/147.0.7857.92 Mobile Safari/537.36 [FBAN/FB4A;FBAV/450.0.0.0.0;]"
];

app.get('/api/generate', (req,res)=>{
  let {device="Any", browser="Any", qty=50} = req.query;
  qty = parseInt(qty);
  let filtered = uaDatabase.sort(() => 0.5 - Math.random()).slice(0, qty);
  res.json({ua: filtered});
});

app.get('/api/status', (req,res)=>{
  res.json({lastUpdate: new Date(), totalUA: uaDatabase.length});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>console.log(`Server running on ${PORT}`));
