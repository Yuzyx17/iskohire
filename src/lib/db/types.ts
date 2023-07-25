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
          user_id: number
        }
        Insert: {
          name: string
          role_id: number
          user_id?: number
        }
        Update: {
          name?: string
          role_id?: number
          user_id?: number
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
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "admin_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          }
        ]
      }
      alumni_info: {
        Row: {
          name: string
          role_id: number
          student_uid: string
          user_id: number
        }
        Insert: {
          name: string
          role_id: number
          student_uid: string
          user_id?: number
        }
        Update: {
          name?: string
          role_id?: number
          student_uid?: string
          user_id?: number
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
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "alumni_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          }
        ]
      }
      applicant_education: {
        Row: {
          act_soc: string
          desc: string
          field_study: number
          grade: number
          is_finished: string
          role_id: number
          school: string
          user_id: number
          year_end: number
          year_start: number
        }
        Insert: {
          act_soc: string
          desc: string
          field_study: number
          grade: number
          is_finished: string
          role_id: number
          school: string
          user_id: number
          year_end: number
          year_start: number
        }
        Update: {
          act_soc?: string
          desc?: string
          field_study?: number
          grade?: number
          is_finished?: string
          role_id?: number
          school?: string
          user_id?: number
          year_end?: number
          year_start?: number
        }
        Relationships: [
          {
            foreignKeyName: "applicant_education_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_education_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_education_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
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
          start_date: string
          user_id: number
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
          start_date: string
          user_id: number
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
          start_date?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "applicant_experience_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          },
          {
            foreignKeyName: "applicant_experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_experience_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          }
        ]
      }
      applicant_skills: {
        Row: {
          skill_id: number
          user_id: number
        }
        Insert: {
          skill_id: number
          user_id: number
        }
        Update: {
          skill_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "applicant_skills_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "applicant_skills_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          }
        ]
      }
      job_application: {
        Row: {
          job_id: number
          status: string
          user_id: number
        }
        Insert: {
          job_id: number
          status: string
          user_id: number
        }
        Update: {
          job_id?: number
          status?: string
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "job_application_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "job_post"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_application_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "posts"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_application_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_application_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
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
          user_id: number
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
          status: string
          url: string
          user_id: number
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
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      recruiter_info: {
        Row: {
          company_name: string
          name: string
          role_id: number
          user_id: number
        }
        Insert: {
          company_name: string
          name: string
          role_id: number
          user_id?: number
        }
        Update: {
          company_name?: string
          name?: string
          role_id?: number
          user_id?: number
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
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "recruiter_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
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
          user_id: number
        }
        Insert: {
          name: string
          role_id: number
          student_uid: string
          user_id?: number
        }
        Update: {
          name?: string
          role_id?: number
          student_uid?: string
          user_id?: number
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
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "student_info_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
          }
        ]
      }
      users: {
        Row: {
          email: string
          pw_hash: string
          role_id: number
          user_id: number
        }
        Insert: {
          email: string
          pw_hash: string
          role_id: number
          user_id?: number
        }
        Update: {
          email?: string
          pw_hash?: string
          role_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "users_role_id_fkey"
            columns: ["role_id"]
            referencedRelation: "roles"
            referencedColumns: ["role_id"]
          }
        ]
      }
    }
    Views: {
      applicants: {
        Row: {
          applicant_name: string | null
          job_id: number | null
          skill_titles: string[] | null
          status: string | null
        }
        Relationships: [
          {
            foreignKeyName: "job_application_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "job_post"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_application_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "posts"
            referencedColumns: ["job_id"]
          }
        ]
      }
      applications: {
        Row: {
          company_name: string | null
          job_id: number | null
          job_title: string | null
          status: string | null
          user_id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "job_application_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "job_post"
            referencedColumns: ["job_id"]
          },
          {
            foreignKeyName: "job_application_job_id_fkey"
            columns: ["job_id"]
            referencedRelation: "posts"
            referencedColumns: ["job_id"]
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
          user_id: number | null
        }
        Relationships: [
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          },
          {
            foreignKeyName: "job_post_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "applications"
            referencedColumns: ["user_id"]
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
