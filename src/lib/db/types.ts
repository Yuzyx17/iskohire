export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      admin_info: {
        Row: {
          name: string
          role_id: number
          user_id: string
        }
        Insert: {
          name: string
          role_id: number
          user_id: string
        }
        Update: {
          name?: string
          role_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "admin_info_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "admin_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      alumni_info: {
        Row: {
          name: string
          role_id: number
          student_uid: string
          user_id: string
        }
        Insert: {
          name: string
          role_id: number
          student_uid: string
          user_id: string
        }
        Update: {
          name?: string
          role_id?: number
          student_uid?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "alumni_info_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "alumni_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "alumni_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "alumni_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "alumni_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "alumni_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      applicant_education: {
        Row: {
          act_soc: string
          course: string
          desc: string
          field_study: number
          grade: number
          is_finished: string
          role_id: number
          school: string
          user_id: string
          year_end: number
          year_start: number
        }
        Insert: {
          act_soc: string
          course: string
          desc: string
          field_study: number
          grade: number
          is_finished: string
          role_id: number
          school: string
          user_id: string
          year_end: number
          year_start: number
        }
        Update: {
          act_soc?: string
          course?: string
          desc?: string
          field_study?: number
          grade?: number
          is_finished?: string
          role_id?: number
          school?: string
          user_id?: string
          year_end?: number
          year_start?: number
        }
        Relationships: [
          {
            foreignKeyName: "applicant_education_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "applicant_education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      applicant_experience: {
        Row: {
          company_name: string
          desc: string
          end_date: string
          exp_title: string
          exp_type: string
          industry_type: number
          location: string
          location_type: string
          role_id: number
          skill_id: number
          start_date: string
          user_id: string
        }
        Insert: {
          company_name: string
          desc: string
          end_date: string
          exp_title: string
          exp_type: string
          industry_type: number
          location: string
          location_type: string
          role_id: number
          skill_id: number
          start_date: string
          user_id: string
        }
        Update: {
          company_name?: string
          desc?: string
          end_date?: string
          exp_title?: string
          exp_type?: string
          industry_type?: number
          location?: string
          location_type?: string
          role_id?: number
          skill_id?: number
          start_date?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "applicant_experience_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "applicant_experience_skill_id_fkey"
            columns: ["skill_id"]
            referencedRelation: "skills_info"
            referencedColumns: ["skill_id"]
          },
          {
            foreignKeyName: "applicant_experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      applicant_skills: {
        Row: {
          skill_id: number
          user_id: string
        }
        Insert: {
          skill_id: number
          user_id: string
        }
        Update: {
          skill_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "applicant_skills_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_skills_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_skills_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_skills_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_skills_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      job_application: {
        Row: {
          job_id: number
          status: string
          user_id: string
        }
        Insert: {
          job_id: number
          status: string
          user_id: string
        }
        Update: {
          job_id?: number
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_application_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_application_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_application_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_application_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_application_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      job_post: {
        Row: {
          desc: string
          employment_type: string
          industry_type: number
          job_id: number
          job_title: string
          loc_type: string
          location: string
          salary: number
          status: string
          url: string
          user_id: string
        }
        Insert: {
          desc: string
          employment_type: string
          industry_type: number
          job_id?: number
          job_title: string
          loc_type: string
          location: string
          salary: number
          status?: string
          url: string
          user_id: string
        }
        Update: {
          desc?: string
          employment_type?: string
          industry_type?: number
          job_id?: number
          job_title?: string
          loc_type?: string
          location?: string
          salary?: number
          status?: string
          url?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "job_post_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "job_post"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_post_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "posts"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      profiles: {
        Row: {
          company_id: string | null
          company_name: string | null
          first_name: string | null
          id: string
          last_name: string | null
          student_id: string | null
        }
        Insert: {
          company_id?: string | null
          company_name?: string | null
          first_name?: string | null
          id: string
          last_name?: string | null
          student_id?: string | null
        }
        Update: {
          company_id?: string | null
          company_name?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          student_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "authenticate"
            referencedColumns: ["id"]
          }
        ]
      }
      recruiter_info: {
        Row: {
          company_name: string
          name: string
          role_id: number
          user_id: string
        }
        Insert: {
          company_name: string
          name: string
          role_id: number
          user_id: string
        }
        Update: {
          company_name?: string
          name?: string
          role_id?: number
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "recruiter_info_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "recruiter_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      roles: {
        Row: {
          permission: string
          role_id: number
        }
        Insert: {
          permission: string
          role_id?: number
        }
        Update: {
          permission?: string
          role_id?: number
        }
        Relationships: []
      }
      skills_info: {
        Row: {
          skill_id: number
          skill_title: string
        }
        Insert: {
          skill_id?: number
          skill_title: string
        }
        Update: {
          skill_id?: number
          skill_title?: string
        }
        Relationships: []
      }
      student_info: {
        Row: {
          name: string
          role_id: number
          student_uid: string
          user_id: string
        }
        Insert: {
          name: string
          role_id: number
          student_uid: string
          user_id: string
        }
        Update: {
          name?: string
          role_id?: number
          student_uid?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "student_info_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "student_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "student_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "student_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "student_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "student_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      user_login: {
        Row: {
          role_id: number | null
          status: string
          user_id: string
        }
        Insert: {
          role_id?: number | null
          status?: string
          user_id: string
        }
        Update: {
          role_id?: number | null
          status?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "user_login_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      applicants: {
        Row: {
          applicant_name: string | null
          course: string | null
          industry_type: number | null
          job_id: number | null
          skill_titles: string[] | null
          status: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["id"]
          }
        ]
      }
      applications: {
        Row: {
          company_name: string | null
          course: string | null
          industry_type: number | null
          job_id: number | null
          job_title: string | null
          post_status: string | null
          status: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["id"]
          }
        ]
      }
      authenticate: {
        Row: {
          confirmed_at: string | null
          id: string | null
          status: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["id"]
          }
        ]
      }
      posts: {
        Row: {
          company_name: string | null
          desc: string | null
          employment_type: string | null
          industry_type: number | null
          job_id: number | null
          job_title: string | null
          loc_type: string | null
          location: string | null
          salary: number | null
          status: string | null
          url: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_post_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "job_post"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_post_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "posts"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "user_login"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applicants"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "profile"
            referencedColumns: ["user_id"]
          }
        ]
      }
      profile: {
        Row: {
          company_name: string | null
          course: string | null
          exp_title: string | null
          name: string | null
          school: string | null
          skill_titles: string[] | null
          student_uid: string | null
          user_id: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_login_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "authenticate"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
