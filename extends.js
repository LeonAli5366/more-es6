class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    feedback() {
        console.log(`${this.name} thank you for your feedback`)
    }

}
class Instructor extends TeamMember {
    designation = 'web course instructor'
    team = 'web team'
    constructor(name, location) {
        super(name, location);
    }
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}
class Developer extends TeamMember {
    designation = 'web course instructor'
    team = 'web team'
    tech;
    constructor(name, location, tech) {
        super(name, location);
        this.tech = tech;
    }
    developFeature(feature) {
        console.log(`Please develop the ${feature}`)
    }
    release(version) {
        console.log(`please release the ${version}`)
    }
}
class JobPlacement extends TeamMember {
    designation = 'job placement commandos'
    team = 'job placement'
    region;
    constructor(name, location, region) {
        super(name, location)
        this.region = region;
    }
    provideResume(feature) {
        console.log(`Please develop the ${feature}`)
    }
    prepareStudent(version) {
        console.log(`please release the ${version}`)
    }
}
const alia = new Developer('alia bhat', 'dhaka', 'react');
console.log(alia);
alia.feedback();
const bipasa = new JobPlacement('bipasa', 'shylet', 'USA');
console.log(bipasa);
bipasa.feedback();