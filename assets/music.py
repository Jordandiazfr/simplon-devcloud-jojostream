from pytube import Playlist, YouTube


def playlist():
    pl = Playlist(
        'https://www.youtube.com/playlist?list=PLL3QAvMpmrM0CWzZhyYGdSKMRoOANx9xg')
    for video in pl.videos:
        yt = YouTube(video.watch_url)
        print("Starting download")
        yt.streams.filter(only_audio=True).first().download("./mp3")
        print("Download Finished")


def song(url):
    yt = YouTube(url)
    print("Starting download")
    yt.streams.filter(only_audio=True).first().download("./assets/mp3")
    print("Download Finished")


song("https://www.youtube.com/watch?v=TPE9uSFFxrI")
