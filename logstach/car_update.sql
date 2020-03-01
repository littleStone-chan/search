SELECT
	c.id,
	car_brand_name,
	car_series_name,
	car_model_name,
	mileage,
	new_car_price,
	c.create_time,
	c.update_time,
	price,
	purchase_price,
	predict_price,
	lat,
	lng
FROM
	car c
WHERE c.update_time > :sql_last_value