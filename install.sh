#!/bin/bash

: '
read -p "Are you ready? this will set git username and email."
myusr=
myemail=
git config --global user.name $myusr
git config --global email.name $myemail
echo $myemail
echo $myusr
'
: '
Creating a script to do the following
1. fix dependency issues with version of boot cd
2. install git and brackets via a .deb file which will be uploaded to github healthy choices repository.  
3. ultimatly i can have my github cloned to pc and immediatly start working javascript and other code via brackets

the following will be a loose batch of commands I am creating a script from
'

sudo apt-get install git
git config --global user.name emykazza
git config --global email.name ddrury2000@gmail.com
cd /home/mint/Desktop
mkdir git
chmod 700 git
cd git
git init
git clone https://github.com/emykazza/HealthyChoices.git
git clone

