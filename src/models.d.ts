interface User{
    USER_ID: int,
    EMAIL: string,
    PW_HASH: string,
    ROLE_ID: int
}

interface Admin{
    USER_ID: int,
    ROLE_ID: int,
    NAME: string
}

interface Recruiter{
    USER_ID: int,
    ROLE_ID: int,
    NAME: string,
    COMPANY_NAME: string
}

interface Alumni{
    USER_ID: int,
    ROLE_ID: int,
    STUDENT_UID: string,
    NAME: string
}

interface Student{
    USER_ID: int,
    ROLE_ID: int,
    STUDENT_UID: string,
    NAME: string
}

interface Role{
    ROLE_ID: int,
    PERMISSION: int
}

interface Application_Education{
    USER_ID: int,
    ROLE_ID: int,
    SCHOOL: string,
    COURSE: string,
    IS_FINISHED: string,
    YEAR_START: Date | string,
    YEAR_END: Date | string,
    LATIN_HONOR: string
}

interface Application_Experience{
    USER_ID: int,
    ROLE_ID: int,
    EXP_TITLE: string,
    EXP_TYPE: int,
    COMPANY_NAME: string,
    LOCATION: string,
    LOCATION_TYPE: string,
    START_DATE: Date | string,
    END_DATE: Date | string,
    INDUSTRY_TYPE: string
}

interface Job_Post{
    JOB_ID: int,
    RECRUITER_ID: int,
    DESC: string,
    LOCATION: string,
    LOC_TYPE: string,
    JOB_TITLE: string,
    EMPLOYMENT_TYPE: string,
    SALARY: float,
    INDUSTRY_TYPE: string
}

interface Job_Application{
    JOB_ID: int,
    USER_ID: int,
    STATUS: string
}

interface Application_Skills{
    USER_ID: int,
    SKILL_ID: int
}

interface Skills_Info{
    SKILL_ID: int,
    SKILL_TITLE: string
}