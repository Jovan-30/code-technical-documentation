emotion = "v.v"

def main():
    global emotion
    say("hello world")
    emotion = ":)"
    say("Hi")

def say(phrase):
    print(phrase, emotion)

main()