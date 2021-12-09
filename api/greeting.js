export default function greeting(req, res) {
    const { name } = req.body.input;
    
    res.statusCode = 200;
    res.json({ greeting: `Hiya, ${name}!` });
  }