import requests
import bs4 # BeautifulSoup web crawling library
import json
import trends



response = requests.get(
    url="https://en.wikipedia.org/wiki/List_of_hobbies",
)
soup = bs4.BeautifulSoup(response.content, "html.parser")

# all_h2 = soup.find_all("h2")
all_lists = soup.find_all("ul")

all_links = bs4.ResultSet(None)

for link_list in all_lists:
    all_links.extend(link_list.find_all("a"))


# with open("hobbies.txt", "w") as hobbies:
data = {
    "hobbies": []
}

for link in all_links:
    try:
        if link["href"].find("/wiki/") == -1 or link["title"] != link.text:
            continue

        link["href"] = "https://en.wikipedia.org" + link["href"]
        

        data["hobbies"].append({
            "title": link["title"],
            "wiki": link["href"],
            "popularity": trends.get_popularity_value(link["title"]),
            "resources": [],
        })
        # hobbies.write(str(link) + "\n")
    except KeyError:
        print("nope: " + str(link))

with open("hobbies.json", "w") as hobby_json:
    json.dump(data, hobby_json)
