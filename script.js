const apiKeyInput = document.getElementById('apiKey');
const gameSelect = document.getElementById('gameSelect');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const aiResponse = document.getElementById('aiResponse');
const form = document.getElementById('form');

const perguntarAI = async (question, game, apiKey) => {
    const model = "gemini-2.5-flash"
    const geminiURL = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`
    const pergunta = `
        olha, tenho esse jogo ${game} e queria saber ${question}
    `

    const contents = [{
        parts: [{
            text: pergunta
        }]
    }]

    // Chamada API
    const response = await fetch(geminiURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'aplication/json'
        },
        body: JSON.stringify({
            contents
        })
    })

    const data = await response.json()
    return data.candidates[0].content.parts[0].text
}

const enviarFormulario = async (event) => {
    event.preventDefault()
    console.log(event)
}

form.addEventListener('submit', enviarFormulario)