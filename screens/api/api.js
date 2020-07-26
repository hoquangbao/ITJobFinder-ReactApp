var API_URL = "https://itjobfinder.herokuapp.com";
exports.LOGIN_URL = `${API_URL}/users/login`;
exports.REGISTER_URL = `${API_URL}/users/register`;
exports.GET_ALL_JOB_URL = `${API_URL}/jobs/`;
exports.GET_JOB_URL = id => `${API_URL}/jobs/getJob/${id}`;
exports.UPDATE_JOB_URL = id => `${API_URL}/jobs/${id}`;
exports.GET_ALL_COMPANY_URL = `${API_URL}/company/`;
exports.GET_COMPANY_URL = id => `${API_URL}/company/get_company/${id}`;
exports.SEARCH_JOB_URL = `${API_URL}/jobs/search_job`;
exports.SEARCH_COMPANY_JOB_URL = id => `${API_URL}/jobs/search_company_job/${id}`;
exports.CREATE_JOB_URL = `${API_URL}/jobs/create_job`;
exports.CREATE_COMPANY_URL = `${API_URL}/company/create_company`;
exports.GET_USER_PROFILE = id => `${API_URL}/users/${id}`;
