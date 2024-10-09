import csv
import json
from geojson import Feature, Point, FeatureCollection

input_file = './src/Contenidos Locales.csv'
output_file = './src/contenidos-locales.json'

features = []

with open(input_file, newline='', encoding='utf-8-sig') as csvfile:
    reader = csv.DictReader(csvfile)
    for row in reader:
        # Remove BOM from keys if present
        row = {key.lstrip('\ufeff'): value for key, value in row.items()}
        
        latitude, longitude = map(float, row["Latitude and Longitude"].strip().split(','))
        point = Point((longitude, latitude))
        feature = Feature(geometry=point, properties={
            "titulo": row["titulo"].strip(),
            "descripcion": row["descripcion"].strip(),
            "imagen": row["imagen"].strip(),
            "nombre-biblioteca": row["nombre-biblioteca"].strip(),
            "autores": row["autores"].strip(),
            "etiquetas": row["etiquetas"].strip(),
            "formato": row["formato"].strip(),
            "Lugar (de la experiencia)": row["Lugar (de la experiencia)"].strip()
        })
        features.append(feature)

feature_collection = FeatureCollection(features)

with open(output_file, 'w', encoding='utf-8') as jsonfile:
    json.dump(feature_collection, jsonfile, ensure_ascii=False, indent=4)