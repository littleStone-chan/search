package com.o2osys.lianlianche.search.service;

import com.o2osys.lianlianche.search.model.CarInfo;

import java.util.List;

/**
 * @Author chen
 * @Description 车辆信息
 * @Date 2020/5/28 14:45
 **/
public interface CarInfoService {

    List<CarInfo> searchList(String modelName);

}
