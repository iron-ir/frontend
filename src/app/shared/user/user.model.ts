export class User {
  constructor(public id?: number,
              public username?: string,
              public email?: string,
              public phone_number?: string,
              public first_name?: string,
              public last_name?: string,
              public avatar?: string,
              public gender?: string,
              public national_code?: string,
              public father_name?: string,
              public mother_name?: string,
              public birth_date?: string,
              public birth_place?: string,
              public nationality?: string,
              public religion?: string,
              public official_website?: string,
              public is_verify?: boolean,
              public is_email_verify?: boolean,
              public is_phone_number_verify?: boolean,
              public is_personal_information_verify?: boolean,
              public last_login?: string) {
  }

}
