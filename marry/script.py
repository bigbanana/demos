#!/usr/bin/env python
# -*- encoding: utf-8 -*-
# Created on 2017-09-18 10:23:41
# Project: yaoyue

from pyspider.libs.base_handler import *
import re
import os
from pprint import pprint

DIR_PATH = "C:\\Users\\Administrator\\www\\demos\\marry"
class Handler(BaseHandler):
  crawl_config = {
    'headers': {
      'User-Agent': '"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/60.0.3112.113 Safari/537.36"'
    }
  }

  def __init__(self):
    self.tool = Tool()

  @every(minutes=24 * 60)
  def on_start(self):
    self.crawl('http://www.yaoyue365.com/v/CYAQVdL9QwW1', callback=self.detail_page)
    # self.crawl('http://www.yaoyue365.com/wedding.html?page=1', callback=self.index_page)
    # self.crawl('http://www.yaoyue365.com/business.html?page=1', callback=self.index_page)
    # self.crawl('http://www.yaoyue365.com/person.html?page=1', callback=self.index_page)

  @config(age=10)
  def index_page(self, response):
    for index, each in enumerate(response.doc('.cy-mouse').items()):
      # if index>0 :
      #   break
      self.crawl(each.attr('data-url'), callback=self.detail_page)

    for page in response.doc('.pagination li a').items():
      self.crawl(page.attr('href'), callback=self.index_page)

  def detail_page(self, response):
    # pprint (vars(response))
    pa = re.compile(r'((?<=["\']))http:.*?\.(?:jpg|png|gif|jpeg|mp3|svg)(?=\1)')

    img_res = pa.finditer(response.text)
    pid = re.search(re.compile('[^\/]+$'),response.url).group(0)
    for img_r in img_res:
      img = img_r.group()
      if img != '' and len(img) < 200:
        img = img.replace('\\','')
        self.crawl(img, callback=self.save_img)
    return {
      "pid": pid,
      "url": response.url,
      "content": response.text,
    }

  def save_img(self, response):
    file_name = response.url.replace('http://res.yaoyue365.com/','')
    content = response.content
    self.tool.save_img(content, file_name)

#工具类
class Tool:
  def __init__(self):
    self.dir = DIR_PATH + os.path.sep + 'assets'
    #创建文件夹（如果不存在）
    if not os.path.exists(self.dir):
      os.makedirs(self.dir)
  #保存图片
  def save_img(self,content,path):
    filename = self.dir + os.path.sep + path
    dirname = os.path.dirname(filename)
    if not os.path.exists(dirname):
      os.makedirs(dirname)
    f = open(filename,"wb" )
    f.write(content)
    f.close()

  #获取url后缀名
  def get_extension(self,url):
    extension = url.split(".")[-1]
    return extension