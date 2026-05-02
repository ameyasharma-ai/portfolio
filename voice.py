import requests
import asyncio
import edge_tts
import os

LM_API = "http://localhost:1234/v1/chat/completions"

async def speak(text):
    communicate = edge_tts.Communicate(text, "en-US-GuyNeural")
    await communicate.save("voice.mp3")
    os.system("start voice.mp3")  # Windows

def chat(prompt):
    res = requests.post(LM_API, json={
        "model": "local-model",
        "messages": [{"role": "user", "content": prompt}]
    })
    return res.json()["choices"][0]["message"]["content"]

while True:
    user = input("You: ")
    reply = chat(user)
    print("AI:", reply)
    asyncio.run(speak(reply))