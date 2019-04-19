var builder = require('xmlbuilder');
const fs = require('fs');

const CONST = {
    AS: 'AutoResponder',
    STATE: 'State',
    RR: 'ResponseRule'
}

const xmlState = builder.create(CONST.AS).ele(CONST.STATE)
const savePath = (filepath,xmlstr,onSave) => {
    if(filepath){
        fs.stat(filepath, function (err, stats) {
            if(stats && stats.isDirectory()){
                const dynamic_filename = "\\fiddler_"+Date.now()+".farx";
                filepath+=dynamic_filename
            }
            fs.writeFile(filepath, xmlstr, function(err) {
                if(err) {
                    return console.log(err);
                }else{
                    if(onSave){
                        onSave(filepath,xmlstr)
                    }
                }
            });
        });
    }
}

const generate = (matchactions, savepath, onSave) => {
    matchactions.forEach( (ma) => {
        xmlState.ele(CONST.RR, {
            'Match': ma.match,
            'Action': ma.action,
            'Enabled': true
        });
    } );
    const xmlstr = xmlState.end({ pretty: true})
    savePath(savepath,xmlstr,onSave)
    return xmlstr
}

module.exports.generate=generate;