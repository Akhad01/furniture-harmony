class UserContoller {
  async registration(req, res) {}
  async login(req, res) {}
  async check(req, res) {
    const query = req.query
    console.log('')
    res.json(query)
  }
}

module.exports = new UserContoller()
