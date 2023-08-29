#!/bin/sh
curDir=$(pwd)
cd Sequelize || exit
find ../ -type f -name "development.sqlite" -exec rm {} \;
sequelize db:migrate
sequelize db:seed:all
cd "$curDir" || exit
