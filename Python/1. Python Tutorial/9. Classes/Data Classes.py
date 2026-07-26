class ManualComment:
    def __init__(self, id, text) -> None:
        self.id = id
        self.text = text

    def __repr__(self) -> str:
        return f"id = {self.id} text = {self.text}"

comment = ManualComment(1, 'my comment')
print(comment)

# Now here comes data classes
# Saves you from wriiting all the special/dunder methods
from dataclasses import dataclass, astuple, asdict

@dataclass(frozen=True, order=True) # frozen makes it private and immutable
class Comment:
    id: int
    text: str

comment = Comment(1, 'my comment')
print(comment)
print(astuple(comment))
print(asdict(comment))
print(dir(Comment))