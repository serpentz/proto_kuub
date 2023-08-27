#!/bin/sh
curDir=$(pwd)
cd Sequelize || exit
sequelize db:drop
sequelize db:create
sequelize db:migrate
sequelize db:seed:all
cd "$curDir" || exit
