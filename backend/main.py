from http import HTTPStatus

from aiohttp import ClientSession, ClientResponse
from fastapi import FastAPI

app: FastAPI = FastAPI()
ENDPOINT: str = 'https://api.forum-auto.ru/v2/listGoods'


@app.get("/articles/{art_id}")
async def get_list_goods(art_id: str) -> dict:
    params: dict = {
        'login': '493358_stroyzar', 'pass': 'sAVDkrEbqd', 'art': art_id
    }
    async with ClientSession() as session:
        response: ClientResponse = await session.get(ENDPOINT, params=params)

        if response.status != HTTPStatus.OK:
            return {
                'result': 'Remote API not available. Status code - {0}'.format(
                    response.status
                )
            }
        response_json: dict = await response.json()
        if 'errors' in response_json:
            return response_json.get('errors').get('FaultString')

        return response_json