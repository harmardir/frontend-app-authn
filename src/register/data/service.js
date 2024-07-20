import { getConfig } from '@edx/frontend-platform';
import { getAuthenticatedHttpClient, getHttpClient } from '@edx/frontend-platform/auth';
import * as QueryString from 'query-string';

export async function registerRequest(registrationInformation) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    isPublic: true,
  };

  try {
    const { data } = await getAuthenticatedHttpClient()
      .post(
        `${getConfig().LMS_BASE_URL}/api/user/v2/account/registration/`,
        QueryString.stringify(registrationInformation),
        requestConfig,
      );
    return {
      redirectUrl: data.redirect_url || `${getConfig().LMS_BASE_URL}/dashboard`,
      success: data.success || false,
    };
  } catch (e) {
    if (e.response && e.response.data) {
      const formattedErrors = Object.keys(e.response.data).reduce((acc, key) => {
        acc[key] = e.response.data[key].join(); // Join all errors into a single string per field
        return acc;
      }, {});
      throw new Error(JSON.stringify(formattedErrors));
    } else {
      throw (e); // re-throw the error if it's not in the expected format
    }
  }
}

export async function getFieldsValidations(formPayload) {
  const requestConfig = {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  };

  try {
    const { data } = await getHttpClient()
      .post(
        `${getConfig().LMS_BASE_URL}/api/user/v1/validation/registration`,
        QueryString.stringify(formPayload),
        requestConfig,
      );
    return {
      fieldValidations: data,
    };
  } catch (e) {
    if (e.response && e.response.data) {
      const formattedErrors = Object.keys(e.response.data).reduce((acc, key) => {
        acc[key] = e.response.data[key].join(); // Join all errors into a single string per field
        return acc;
      }, {});
      throw new Error(JSON.stringify(formattedErrors));
    } else {
      throw (e); // re-throw the error if it's not in the expected format
    }
  }
}
