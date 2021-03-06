# 4Minitz!

*Simply the best free webapp for taking meeting minutes.*

* Create a meeting series and invite others
* Specify moderators, invited and informed users
* Create an agenda with multiple topics
* Attend a meeting via web with reactive live updates
* 1-button sending of agenda, minutes and action items by email 
* Use labels to tag items for later retrieval
* Upload binary attachments to minutes (e.g., presentations, photos)
* Track open action items and unfinished topics across meetings
* Full privacy: Host your own server - it's easy!

**Important: 4Minitz is currently WIP and not yet ready for mission critical usage. 
Nevertheless, quite a few features are working stable already and you can head over to our
[4Minitz Demo Server](https://www.4minitz.com) and and play around or install the current 
version on your own server (see below)** 

Documentation is "continously" not finished... Nevertheless these WIP docs may be of help:

* [FAQ - Frequently Asked Questions](doc/faq.md)
* [User Doc](doc/user/usermanual.md)
* [Admin Guide](doc/admin/adminguide.md)
* [Developer Doc](doc/developer/developermanual.md)

## Build status (by [TravisCI](https://travis-ci.org))
|Branch|  |
|---|---|
|master|[![Build Status](https://travis-ci.org/4minitz/4minitz.svg?branch=master)](https://travis-ci.org/4minitz/4minitz)|
|develop|[![Build Status](https://travis-ci.org/4minitz/4minitz.svg?branch=develop)](https://travis-ci.org/4minitz/4minitz)|

## Code Climate

4Minitz uses code climate to track its code quality.

[![Code Climate](https://codeclimate.com/github/4minitz/4minitz/badges/gpa.svg)](https://codeclimate.com/github/4minitz/4minitz)

## Backlog
You can see whats on our development roadmap and what stories are currently in work in the
 [4Minitz Backlog](https://github.com/4minitz/4minitz/projects/1)

## Quick Start
### Prerequisites
4minitz is realized with the [Meteor JS Framework](http://www.meteor.com). So, first install the current version of meteor:

    curl https://install.meteor.com/ | sh
    meteor --version

You'll need root rights for that. As a non-root user you may install
meteor by:

    git git clone --depth 1 --recursive https://github.com/meteor/meteor.git
    cd meteor
    meteor --version

On Windows? [Download the meteor installer](https://install.meteor.com/windows). 

### Quick Installation of 4Minitz (Linux & MacOS)    
**Attention:** This installation mode is for quick testing only.
It is intended for developers and so it has some security drawbacks (No
password protection for MongoDB) and also consumes some amount of extra RAM
(>700 MB)). Don't miss the [Admin Guide](doc/admin/adminguide.md)
with a more comprehensive coverage of the real production installation topic!

OK, here we go! For a quick test installation perform:

    git clone --depth 1 https://github.com/4minitz/4minitz.git --branch master --single-branch
    cd 4minitz
    ./runapp.sh

Wait some time for meteor to finish downloading and building. 
You can reach 4Minitz via the default port 3100 by opening [http://localhost:3100](http://localhost:3100) in your browser

**Hint:** There exists a settings_sample.json file that has quite a few configuration options
(like sending eMails etc.). Don't miss the [Admin Guide](doc/admin/adminguide.md) with more details
 on this topic.
 
