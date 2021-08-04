import json
import pprint
pp = pprint.PrettyPrinter(indent=4)
import requests
from xml.etree import ElementTree
from lxml import etree
from bs4 import BeautifulSoup

output_path_decks = 'src/data/decks.json'
output_path_user = 'src/data/user.json'

sort_classes = {
  "creature": "sorted-by-creature clearfix element",
  "sorcery": "sorted-by-sorcery clearfix element",
  "instance": "sorted-by-instant clearfix element",
  "land": "sorted-by-land clearfix element",
  "enchantment": "sorted-by-enchantment clearfix element",
  "planeswalker": "sorted-by-planeswalker clearfix element",
  "artifact": "sorted-by-artifact clearfix element",
  "other":"sorted-by-Other clearfix element",
}

color_wheel = {
  'Plains': 'w', 
  'Island': 'u',
  'Forest': 'g',
  'Swamp': 'b',
  'Mountain': 'r'
}

return_decks = {}
duplicates = {}

response = requests.get('https://magic.wizards.com/en/articles/archive/feature/jumpstart-decklists-2020-06-18', stream=True)
soup = BeautifulSoup(response.content, 'html.parser')
results = soup.find_all("div", "page-width bean_block bean_block_deck_list bean--wiz-content-deck-list clearfix")

for result in results:
  deck = {
    'name': '',
    'deck': {}
  }
  deck['name'] =  result.select('div > a')[0]['name']
  deck_contents = result.find_all("div", "sorted-by-overview-container sortedContainer")
  
  #print("- - - - - - - - - - - - - - - - - - - - - - - - -")
  for category in sort_classes.keys():
    card_category = deck_contents[0].find("div", sort_classes[category])
    if card_category == None:
      continue
    else:
      cards = card_category.find_all("span", "row")
      data = {}
      for card in cards:
        card_name = card.find("span", "card-name").string
        card_count = int(card.find("span", "card-count").string)
        data[card_name] = card_count
      deck['deck'][category] = data

  if '_' in deck['name']:
    if deck['name'] in duplicates.keys():
      newstr = deck['name'] + str(duplicates[deck['name']] + 1)
      deck['code'] = "".join([deck['name'][:3], str(duplicates[deck['name']] + 1)])  
      return_decks[newstr] = deck
      duplicates[deck['name']] = duplicates[deck['name']] + 1
      return_decks[newstr]['name'] = return_decks[newstr]['name'] + str(duplicates[deck['name']])
    else:
      duplicates[deck['name']] = 1
      deck['code'] = "".join([deck['name'][:3], "1"])  
      return_decks[deck['name'] + "1"] = deck
      return_decks[deck['name'] + "1"]['name'] = deck['name'] + "1"
  else:
    deck['code'] = deck['name'][:4]
    return_decks[deck['name']] = deck
    
  
  #print("- - - - - - - - - - - - - - - - - - - - - - - - -")
for key, value in return_decks.items(): 
  if '_' in key:
    return_decks[key]['name'] = return_decks[key]['name'].replace('_', ' ')
  
  deck_colors = []
  for land, color in color_wheel.items(): 
    if land in value['deck']['land']:
      deck_colors.append(color)
  return_decks[key]['color'] = deck_colors

with open(output_path_decks, 'w') as outfile:
  json.dump(return_decks, outfile)
print(duplicates)
print("Exported decks to {}".format(output_path_decks))

user_decks = {}
for key in return_decks.keys():
  user_decks[key] = False
with open(output_path_user, 'w') as outfile:
  json.dump(user_decks, outfile, indent=2)
print("Exported user to {}".format(output_path_user))