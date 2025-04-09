from fastapi import FastAPI 
from fastapi.middleware.cors import CORSMiddleware 
 
app = FastAPI() 
 
# Permite que o frontend consiga acessar o backend sem bloqueios 
app.add_middleware( 
    CORSMiddleware, 
    allow_origins=["*"],  # Aceita requisições de qualquer lugar 
    allow_credentials=True, 
    allow_methods=["*"], 
    allow_headers=["*"], 
) 
 
# Rota que retorna os dados 
@app.get("/dados") 
def obter_dados(): 
    print("Enviando dados para o frontend...")  # Só pra ver se está chamando a API 
    return ["Dado 1", "Dado 2", "Dado 3", "Dado 4"]
