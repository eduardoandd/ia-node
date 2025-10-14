import dotenv from 'dotenv'
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config()

const genAI = new GoogleGenerativeAI(process.env.KEY)

const obterReceita = async (pergunta) => {
    try {
        const systemInstruction = {
            role: 'user',
            parts: [{
                text:"Você é um assistente de IA amigável que vai responder perguntas genéricas"
            }]
        }

        const modelResponse = {
            role:"model",
            parts:[{
                text:"olá!"
            }]
        }

        const model = genAI.getGenerativeModel({model: "gemini-pro"})
        const chat = model.startChat({
            history: [systemInstruction,modelResponse],
        })

    } catch (error) {
        
    }
}
