
const {Campus} = require('./models')
const {Student} = require('./models');
const {db} = require('./models');

db.sync({force: true})
    .then(() => {
        return Promise.all([
            Campus.create({
                name: 'COMTRAN',
                description: "This moderately-sized private high school has a space-age look to it.  Overall the school has a bad reputation.  Recently, the school's math club organized a fundraising event for the school and a member of the basketball team pulled a humiliating prank on a teacher.'",
                imageUrl: 'https://qph.ec.quoracdn.net/main-qimg-19b383e1f9a6416479d536e58391ab3a-c'
            }),
            Campus.create({
                name: 'SNOBOL',
                description: "This small private senior high school has a quaint atmosphere.  Overall the school has an average reputation, which is starting to change thanks to a new teacher.  Recently, a coach was arrested for theft.",
                imageUrl: 'https://media.architecturaldigest.com/photos/56aac8d75cd8c4e42b99e298/4:3/w_740/brutalist-architecture-masterpieces01.jpg'
            }),
            Campus.create({
                name: 'FLOW-MATIC',
                description: "This tiny public elementary school looks very modern.  Overall the school has a bad reputation, which is starting to change thanks to a new principal.  Also, it was built over the remains of a school that was destroyed in an earthquake.  Recently, the school's basketball team won a championship.",
                imageUrl: 'https://i1.wp.com/theverybesttop10.com/wp-content/uploads/2015/10/Top-10-Best-Examples-of-Brutalist-Architecture-1.jpg?resize=510%2C405'
            }),
            Campus.create({
                name: 'Smalltalk',
                description: "This moderately-sized private middle school has a quaint atmosphere.  Overall the school has an average reputation.  Also, it's rumored that a coach died horribly.  Recently, the school's cooking club organized a community project and a new student transferred in.",
                imageUrl: 'https://d2jv9003bew7ag.cloudfront.net/uploads/Kolasin-Monument.jpg'
            }),
            Campus.create({
                name: 'Erlang',
                description: "This small public middle school looks a bit old-fashioned.  Overall the school has a bad reputation.  Also, it's rumored that a member of the debate team died under tragic circumstances.  Recently, the school's math club organized a charity event.",
                imageUrl: 'http://www.phaidon.com/resource/ins-filip-dujardin-3.jpg'
            })
        ])
    })
    .then((arrayOfCampuses) => {
        return Promise.all([
            Student.create({
                firstName: 'Jordan',
                lastName:'Walke',
                email: 'jw@react.com',
                gpa: 3.5,
                campusId: 2
            }),
            Student.create({
                firstName: 'Dan',
                lastName:'Abramov',
                email: 'da@react.com',
                gpa: 2.5,
                campusId: 2
            }),
            Student.create({
                firstName: 'James',
                lastName:'Dean',
                email: 'jd@eastofeden.com',
                gpa: 3.0,
                campusId: 3
            }),
            Student.create({
                firstName:'John',
                lastName:'Wayne',
                email: 'jw@truegrit.com',
                gpa: 2.1,
                campusId: 4
            }),
            Student.create({
                firstName: 'Cary',
                lastName: 'Grant',
                email: 'cg@ithappened1nite.com',
                gpa: 1.2,
                campusId: 5
            }),
            Student.create({
                firstName: 'Grace',
                lastName: 'Kelly',
                email: 'gk@rearwindow.com',
                gpa: 2.3,
                campusId: 1
            }),
            Student.create({
                firstName: 'Eva Marie',
                lastName:'Saint',
                email: 'ems@rebelWOcause.com',
                gpa: 2.0,
                campusId: 2
            }),
            Student.create({
                firstName: 'Kim',
                lastName:'Novak',
                email: 'kn@vertigo.com',
                gpa: 3.0,
                campusId: 3
            }),
            Student.create({
                firstName: 'Faye',
                lastName:'Dunaway',
                email: 'fd@classics.com',
                gpa: 2.1,
                campusId: 4
            }),
            Student.create({
                firstName: 'Clint',
                lastName:'Eastwood',
                email: 'ce@grantor.com',
                gpa: 1.2,
                campusId: 5
            }),
            Student.create({
                firstName: 'Paul',
                lastName:'Newman',
                email: 'pn@hustler.com',
                gpa: 0.5,
                campusId: 1
            }),
            Student.create({
                firstName: 'Jane',
                lastName:'Fonda',
                email: 'jf@9to5.com',
                gpa: 3.9,
                campusId: 2
            }),
            Student.create({
                firstName: 'Sissy',
                lastName:'Spacek',
                email: 'ss@carrie.com',
                gpa: 3.2,
                campusId: 3
            }),
            Student.create({
                firstName: 'Sally',
                lastName:'Field',
                email: 'sf@forrestg.com',
                gpa: 2.2,
                campusId: 4
            }),
            Student.create({
                firstName: 'Jessica',
                lastName:'Lange',
                email: 'jl@bigfish.com',
                gpa: 4.0,
                campusId: 5
            }),
            Student.create({
                firstName: 'Shirley',
                lastName:'MacLaine',
                email: 'sm@apartment.com',
                gpa: 2.7,
                campusId: 1
            })
        ])
    })
    .then(()=> {
        console.log('yay we did it!')
        db.close();
    })
    .catch((err) => {
        console.log('an error ack')
        console.log(err.stack)
        db.close()
    })

