type User = {
    USER_ID: number,
    EMAIL: string,
    PW_HASH: string,
    ROLE_ID: number
}

type Admin = {
    USER_ID: number,
    ROLE_ID: number,
    NAME: string
}

type Recruiter = {
    USER_ID: number,
    ROLE_ID: number,
    NAME: string,
    COMPANY_NAME: string
}

type Alumni = {
    USER_ID: number,
    ROLE_ID: number,
    STUDENT_UID: string,
    NAME: string
}

type Student = {
    USER_ID: number,
    ROLE_ID: number,
    STUDENT_UID: string,
    NAME: string
}

type Role = {
    ROLE_ID: number,
    PERMISSION: number
}

type Application_Education = {
    USER_ID: number,
    ROLE_ID: number,
    SCHOOL: string,
    COURSE: string,
    IS_FINISHED: string,
    YEAR_START: Date | string,
    YEAR_END: Date | string,
    LATIN_HONOR: string
}

type Application_Experience = {
    USER_ID: number,
    ROLE_ID: number,
    EXP_TITLE: string,
    EXP_TYPE: number,
    COMPANY_NAME: string,
    LOCATION: string,
    LOCATION_TYPE: string,
    START_DATE: Date | string,
    END_DATE: Date | string,
    INDUSTRY_TYPE: string
}

type Job_Post = {
    JOB_ID: number,
    RECRUITER_ID: number,
    DESC: string,
    LOCATION: string,
    LOC_TYPE: string,
    JOB_TITLE: string,
    EMPLOYMENT_TYPE: string,
    SALARY: number,
    INDUSTRY_TYPE: string
}

type Job_Application = {
    JOB_ID: number,
    USER_ID: number,
    STATUS: string
}

type Application_Skills = {
    USER_ID: number,
    SKILL_ID: number
}

type Skills_Info = {
    SKILL_ID: number,
    SKILL_TITLE: string
}