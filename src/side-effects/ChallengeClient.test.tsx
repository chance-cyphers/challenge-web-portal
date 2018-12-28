import {createSkill} from "./ChallengeClient";


it('should get a 200 response', (done) => {
    createSkill({name: "testing"})
        .then((skill) => {
            expect(skill.name).toBe("testing");
            expect(skill.id).toBe(7);
        });
});