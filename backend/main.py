from http import HTTPStatus

from aiohttp import ClientSession, ClientResponse
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

origins: list = [
    "http://localhost:3010",
    "http://localhost",
    "http://localhost:8010",
]

app: FastAPI = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

ENDPOINT: str = 'https://api.forum-auto.ru/v2/listGoods'


@app.get("/articles/{art_id}")
async def get_list_goods(art_id):
    params: dict = {
        'login': '493358_stroyzar', 'pass': 'sAVDkrEbqd', 'art': art_id
    }
    async with ClientSession() as session:
        response: ClientResponse = await session.get(ENDPOINT, params=params)

        if response.status != HTTPStatus.OK:
            return {
                'errors': 'Remote API not available. Status code - {0}'.format(
                    response.status
                )
            }
        response_json: dict = await response.json()

        return response_json
