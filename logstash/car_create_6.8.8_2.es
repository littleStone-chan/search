
PUT car
{
    "mappings": {

    "_doc":{

        "properties": {

            "id":{"type":"integer"},
            "car_brand_id":{"type":"integer"},
            "car_brand_name":{
                "type": "text",
                        "analyzer":"ik_max_word",
                        "search_analyzer":"ik_smart"
            },
            "car_series_id":{"type":"integer"},
            "car_series_name":{
                "type": "text",
                        "analyzer":"ik_max_word",
                        "search_analyzer":"ik_smart"
            },
            "car_model_id":{"type":"integer"},
            "car_model_name":{
                "type": "text",
                        "analyzer":"ik_max_word",
                        "search_analyzer":"ik_smart"

            },

            "mileage":{"type": "double"},

            "first_license_date":{"type": "date"},
            "putway_time":{"type": "date"},
            "price":{"type": "double"},

            "lables":{
                "type": "text",
                        "analyzer":"ik_max_word",
                        "search_analyzer":"ik_smart"

            },

            "img_path":{"type": "text"},
            "owner_province_id":{"type": "integer"},
            "owner_city_id":{"type": "integer"},
            "location":{
                "type": "geo_point"
            },
            "car_gearbox_type":{"type": "integer"},
            "car_type":{"type": "integer"},
            "car_body_type":{"type": "integer"},
            "status":{"type":"integer"}
        }

    }
}


}
