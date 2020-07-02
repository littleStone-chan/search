SELECT
	info.id,
	info.car_brand_id,
	info.car_brand_name,
	info.car_series_id,
	info.car_series_name,
	info.car_model_id,
	info.car_model_name,
	info.mileage,
	info.first_license_date,
	info.lables,
	image.img_path,
	info.owner_province_id,
	info.owner_city_id,
	info.putway_time,
	info.price,
concat(c.lng,',',c.lat) as location,
car_gearbox_type,
info.type,
car_body_type
FROM
	car_info info
LEFT JOIN (SELECT car_id,img_path from car_image where type = 1 limit 0,1 ) image ON image.car_id = info.id
LEFT JOIN car c ON c.id = info.id
where valid = 1 and `status` = 25

and info.update_time > :sql_last_value

