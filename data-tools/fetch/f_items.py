import json
import requests
from pathlib import Path

API_URL = "https://api.tarkov.dev/graphql"

QUERY = """
{
  items {
    id
    name
    shortName
    types
    description
    height
    width
    wikiLink
    image8xLink
    inspectImageLink
  }
}
"""

def fetch_items():
    response = requests.post(
        API_URL,
        json={"query": QUERY}
    )

    response.raise_for_status()

    data = response.json()

    raw_path = Path("raw/items_raw.json")

    with open(raw_path, "w", encoding="utf-8") as file:
        json.dump(data, file, indent=2)

    print("Saved raw item data")

if __name__ == "__main__":
    fetch_items()