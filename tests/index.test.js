const farx = require('../index');

const expectedxml = `<?xml version="1.0"?>
<AutoResponder>
  <State>
    <ResponseRule Match="a" Action="b" Enabled="true"/>
  </State>
</AutoResponder>`

const rule = [
    {
        match : "a",
        action: "b"
    }
]

//const desktopPath = require('path').join(require('os').homedir(), 'Desktop');

test( "xml generated matches expectation" , () =>{
    expect(farx.generate(rule)).toBe(expectedxml)
} )

/*
test( "generates farx file at specified directory with dynamic filename" , (done) =>{
    const farxxml = farx.generate(rule, desktopPath, (path)=>{
        expect(path.slice(-4)).toBe("farx")
        done();
    })
} )
*/