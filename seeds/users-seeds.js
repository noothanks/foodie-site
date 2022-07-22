const sequelize = require("../config/connection");
const { User, Post } = require("../models");

const userdata = [
  {
    first_name: "Ned",
    last_name: "Newst",
    email: "nwestnedge0@cbc.ca",
    pword: "password123",
    username: "alesmonde0",
    birthday: "1998-12-03",
  },
  {
    first_name: "Ryan",
    last_name: "Mebes",
    email: "rmebes1@sogou.com",
    pword: "password123",
    username: "jwilloughway1",
    birthday: "1998-07-03",
  },
  {
    first_name: "Chrissa",
    last_name: "Stoneman",
    email: "cstoneman2@last.fm",
    pword: "password123",
    username: "iboddam2",
    birthday: "1998-12-14",
  },
  {
    first_name: "Ionna",
    last_name: "Hellier",
    email: "ihellier3@goo.ne.jp",
    pword: "password123",
    username: "dstanmer3",
    birthday: "1998-10-03",
  },
  {
    first_name: "Gary",
    last_name: "Midgley",
    email: "gmidgley4@weather.com",
    pword: "password123",
    username: "djiri4",
    birthday: "1991-12-05",
  },
  {
    first_name: "Louise",
    last_name: "Arnout",
    email: "larnout5@imdb.com",
    pword: "password123",
    username: "msprague5",
    birthday: "1988-11-09",
  },
  {
    first_name: "Helen",
    last_name: "Napleton",
    email: "hnapleton6@feedburner.com",
    pword: "password123",
    username: "mpergens6",
    birthday: "1990-03-01",
  },
  {
    first_name: "Kris",
    last_name: "Pergio",
    email: "kperigo7@china.com.cn",
    pword: "password123",
    username: "tpenniell7",
    birthday: "1975-03-14",
  },
  {
    first_name: "Luis",
    last_name: "Mongain",
    email: "lmongain8@google.ru",
    pword: "password123",
    username: "msabbins8",
    birthday: "2000-06-20",
  },
  {
    first_name: "Brian",
    last_name: "Steen",
    email: "bsteen9@epa.gov",
    pword: "password123",
    username: "jmacarthur9",
    birthday: "1991-02-14",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
