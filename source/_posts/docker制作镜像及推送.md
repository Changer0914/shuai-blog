---
title: docker制作镜像及推送
date: 2022-10-19 09:46:23
tags:
  - docker
  - 运维
---

自从用了docker

<!-- more -->



### 登录

docker login -u jingting666

### 命名 Dockerfile2

FROM tomcat:8.5.83-jre8
RUN apt-get -y update && apt-get -y install zip && apt-get -y install vim

### 制作镜像

docker build -t jingting666/tomcat8-jre8 -f Dockerfile2 .

### 推送镜像

docker push jingting666/tomcat8-jre8


### 查看推送上来的镜像

登录 https://hub.docker.com/