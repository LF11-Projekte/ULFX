@echo off
pip --proxy http://kjs-03.lan.dd-schulen.de:3128 install mkdocs mkdocs-material
python -m mkdocs serve
