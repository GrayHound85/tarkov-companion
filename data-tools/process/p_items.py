import json
from pathlib import Path

RAW_PATH = Path("raw/items_raw.json")
OUTPUT_PATH = Path("processed/items.json")

def process_items():
    with open(RAW_PATH, "r", encoding="utf-8") as file:
        raw_data = json.load(file)

    raw_items = raw_data["data"]["items"]

    processed_items = []

    for item in raw_items:
        processed = {
            "id": item["id"],
            "name": item["name"],
            "shortName": item["shortName"],
            "types": item["types"],
            "description": item["description"],
            "size": {
                "width": item["width"],
                "height": item["height"]
            },
            "wikiLink": item["wikiLink"],
            "iconImage": item["image8xLink"],
            "bannerImage": item["inspectImageLink"]
        }

        processed_items.append(processed)

    with open(OUTPUT_PATH, "w", encoding="utf-8") as file:
        json.dump(processed_items, file, indent=2)

    print(f"Processed {len(processed_items)} items")

if __name__ == "__main__":
    process_items()