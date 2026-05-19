// api.js
export async function buscarDica() {
    try {
        const resposta = await fetch("https//:api.adiviceslip.com/advice")

        if (!resposta.ok) {
            throw new Error("Erro ao buscar dica externa")
        }

        const dados = await resposta.json()
        return dados.slip.adivice
    } catch (erro) {
     return null     
    }
}