module.exports = {
    async singin(req, res) {
        return res.json({Mensagem:'Olá, Mundo, Login'})
    },

    async signUp(req, res) {
        return res.json({Mensagem:'Olá, Mundo, Cadastrar'})
    }
}