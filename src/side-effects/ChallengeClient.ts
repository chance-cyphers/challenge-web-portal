import {Skill} from "../reducers/SkillsReducer";
import {Omit} from "react-redux";

const host = `http://35.229.68.50:80`;

type SkillRequest = Omit<Skill, "id">

export function createSkill(skill: SkillRequest): Promise<Skill> {
    return fetch(`${host}/v1/skill`, {
        method: "POST",
        body: JSON.stringify(skill)
    }).then((response) => response.json());
}