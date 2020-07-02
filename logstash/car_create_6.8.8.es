
PUT /car?include_type_name=false

        {

            "settings" : {

                "number_of_shards" : 1,

                "number_of_replicas" : 1,

                "analysis": {

                    "analyzer": {

                        "ik_syno":{

                            "type":"custom",

                            "tokenizer":"ik_smart"

                        },

                        "ik_syno_max":{

                            "type":"custom",

                            "tokenizer":"ik_max_word"
                        }

                    }  }

            },

            "mappings": {

                "properties": {

                    "id":{"type":"integer"},
                    "car_brand_id":{"type":"integer"},
                    "car_brand_name":{

                        "type": "text",

                        "analyzer": "ik_syno_max",

                        "search_analyzer": "ik_syno"

                    },
                    "car_series_id":{"type":"integer"},
                    "car_series_name":{

                        "type": "text",

                        "analyzer": "ik_syno_max",

                        "search_analyzer": "ik_syno"

                    },
                    "car_model_id":{"type":"integer"},
                    "car_model_name":{

                        "type": "text",

                        "analyzer": "ik_syno_max",

                        "search_analyzer": "ik_syno"

                    },

                    "mileage":{"type": "double"},

                    "first_license_date":{"type": "date"},
                    "putway_time":{"type": "date"},
                    "price":{"type": "double"},

                    "lables":{

                        "type": "text",

                        "analyzer": "ik_syno_max",

                        "search_analyzer": "ik_syno"

                    },

                    "img_path":{"type": "text"},
                    "owner_province_id":{"type": "integer"},
                    "owner_city_id":{"type": "integer"},
                    "location":{"type": "geo_point"},
                    "car_gearbox_type":{"type": "integer"},
                    "car_type":{"type": "integer"},
                    "car_body_type":{"type": "integer"}
                }

            }

        }