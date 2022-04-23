import requests
import bs4 # BeautifulSoup web crawling library

# class LinksGroup:
#     def __init__(self, title: str, children=None) -> None:
#         self.title = str(title)
#         self.children = []
#         if children is not None:
#             for i in children:
#                 self.children.append(i)

#     def __str__(self) -> str:
#         result = ""
#         result += self.title + "\n"
#         for i in self.children:
#             if isinstance(i, bs4.PageElement) or isinstance(i, LinksGroup):
#                 result += "\t" + str(i) + "\n"
#         return result


response = requests.get(
    url="https://en.wikipedia.org/wiki/List_of_hobbies",
)
soup = bs4.BeautifulSoup(response.content, 'html.parser')

# all_h2 = soup.find_all("h2")
all_lists = soup.find_all("ul")

all_links = bs4.ResultSet(None)

for link_list in all_lists:
    all_links.extend(link_list.find_all("a"))

# for group in all_links.children:
#     print(group)

with open("hobbies.html", "w") as hobbies:
    for link in all_links:
        try:
            if link["href"].find("/wiki/") == -1 or link["title"] != link.text:
                continue
            link["href"] = "https://en.wikipedia.org" + link["href"]
            hobbies.write(str(link) + "\n")
        except KeyError:
            print("nope: " + str(link))
