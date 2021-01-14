from bs4 import BeautifulSoup
import requests
import json
req = requests.get('https://www.billboard.com/charts/hot-100')
soup = BeautifulSoup(req.text, 'html.parser')
soup.prettify()

Top_100 = soup.find_all('span', 'chart-element__information')

# Top SONGS
top_songs = [song.get_text() for song in soup.find_all(
    'span', class_='chart-element__information__song')]
# print(top_songs)
with open("scrap.js", mode="a") as f:
    f.write("[")
    for t in top_songs:
        f.write(f'"{t}", ')
    f.write("]")


# TOP ARTISTS
top_artist = [artist.get_text() for artist in soup.find_all(
    'span', class_='chart-element__information__artist')]

with open("scrap.js", mode="a") as f:
    f.write("[")
    for t in top_artist:
        f.write(f'"{t}", ')
    f.write("]")
