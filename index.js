const jsonfile = require("jsonfile")
const  moment = require('moment');
const simpleGit = require('simple-git');



const FILE_PATH = "./data.json";

const makecommit = (x,y) => {

    const DATE = moment().subtract(1,'y').add(1,'d').add(x,'w').add(y,'d').format();

const data = {
    data : DATE
}

jsonfile.writeFile(FILE_PATH,data, ()=> {

    simpleGit().add([FILE_PATH]).commit(DATE,{"--date" : DATE}).push();

})


}

