## elastcsearch+kibana+logstach 的实战使用

1. 安装包快速下载地址
    * [elasticsearch-7.5.2 WINDOWS版本](https://chendownload.oss-cn-shenzhen.aliyuncs.com/software/elasticsearch-7.5.2-windows-x86_64.zip)
    * [kibana-7.5.2 WINDOWS版本](https://chendownload.oss-cn-shenzhen.aliyuncs.com/software/kibana-7.5.2-windows-x86_64.zip)
    * [kibana-7.5.2 MAC版本](https://chendownload.oss-cn-shenzhen.aliyuncs.com/software/kibana-7.5.2-darwin-x86_64.tar.gz)
    * [ik 分词器](https://chendownload.oss-cn-shenzhen.aliyuncs.com/software/elasticsearch-analysis-ik-7.5.2.zip)
    * [logstash-7.5.2.zip](https://chendownload.oss-cn-shenzhen.aliyuncs.com/software/logstash-7.5.2.zip)
    * [官网下载地址](https://www.elastic.co/cn/downloads/)
2. 启动elasticsearch和kibana
    - 解压  elasticsearch和kibana 压缩包
    - windows
        * 切换路径到elasticsearch-7.5.2的bin目录，双击elasticsearch.bat
        * 切换路径到kibana-7.5.2的bin目录，双击kibana.bat
    - mac,linux
        * 切换到elasticsearch-7.5.2的bin目录，运行 
        ```./elasticsearch``` 命令
        * 切换到kibana-7.5.2的bin目录，运行  ```./kibana``` 命令
    - 打开 ```http://127.0.0.1:9200``` 查看elasticsearch是否启动成功
    - 打开 ```http://127.0.0.1:5601``` 查看kibana是否启动成功
    
3. 安装ik分词器插件
    - mac,linux
        - 切换路径到elasticsearch-7.5.2的bin目录,运行
        ```./elasticsearch-plugin install https://chendownload.oss-cn-shenzhen.aliyuncs.com/software/elasticsearch-analysis-ik-7.5.2.zip```
    - windows
        - 切换路径到elasticsearch-7.5.2的plugins目录，在当先目录创建新的文件夹，文件夹名为：```analysis-ik```。
        - 下载ik分词器到analysis-ik目录，并且解压文件至当前目录。如图:
        ![analysis-ik目录截图](./src/main/resources/static/mk/analysis-ik-screenshot.jpg)    
    - 重启elasticsearch。
        