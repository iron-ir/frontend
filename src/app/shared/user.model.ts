
export class User {
  constructor(public id?: number,public is_verify?: false,
  public is_email_verify?: true,
  public is_phone_number_verify?: true,
  public is_personal_information_verify?: false,
  public username?: string,
  public email?: string,
  public phone_number?: string,
  public avatar?: string,
  public first_name?: string,
  public last_name?: string,
  public gender?: string,
  public national_code?: string,
  public father_name?: string,
  public mother_name?: string,
  public birth_date?: string,
  public birth_place?: string,
  public nationality?: string,
  public religion?: string,
  public official_website?: string,
  public last_login?: string) {
      }

}
