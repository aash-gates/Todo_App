export default function(req, res) {
    const { email, password } = req.body
  
    // TODO: Check email and password against database
  
    if (email === 'user@example.com' && password === 'password') {
      res.json({ token: 'secret-token' })
    } else {
      res.status(401).json({ message: 'Invalid email or password' })
    }
  }
  