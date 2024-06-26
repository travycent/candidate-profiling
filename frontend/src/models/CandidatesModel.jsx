import ApiCalls from "../api/ApiCalls";
class CandidatesModel {
    constructor(data) {
      this.candidate_id = data.candidate_id;
      this.candidate_firstname = data.candidate_firstname;
      this.candidate_lastname = data.candidate_lastname;
      this.candidate_phone_number = data.candidate_phone_number;
      this.candidate_email = data.candidate_email;
      this.time_interval = data.time_interval;
      this.linkedin_profile = data.linkedin_profile;
      this.github_profile = data.github_profile;
      this.text_comment = data.text_comment;
      this.create_date = data.create_date;
      this.update_date = data.update_date;
    }

    static async fetchAllCandidates() {
      try {
        const url = "/candidates"
        const response = await ApiCalls.fetchData(url);
        console.log(response)
        return response.map(candidate_data => new CandidatesModel(candidate_data));
      } catch (error) {
        throw new Error(error.response ? error.response.data.error : error.message);
      }
    }

}
export default CandidatesModel;