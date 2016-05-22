exports.saveData = function (req, res, con, body) {
    body.photo = body.photo.replace(/\"/g,"");                
    con.query('UPDATE vodichCV SET ' +
            'name = "' + body.name +
            '", photo = "' + body.photo +
            '", generalInformation = "' + body.generalInformation +
            '", education = "' + body.education +
            '", wantedProfession = "' + body.desiredPosition +
            '", expirience = "' + body.expirience +
            '", mainSkills = "' + body.mainSkills +
            '", additionalSkills = "' + body.additionalSkills +
            '", languages = "' + body.languages +
            '", aboutMyself = "' + body.aboutMyself +
                '" WHERE email = "' + body.email + '"',

        function selectCb(err, results, fields) {
            if (err) console.log('Error insert' + err);
            res.statusCode = 200;
            res.end("success save data");
        }
    );
};
