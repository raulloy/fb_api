import axios from 'axios';

export const getAccountInsights = async (
  accessToken,
  since = '2023-02-01',
  until = '2023-02-28'
) => {
  try {
    const url = `https://graph.facebook.com/v17.0/me?fields=adaccounts.limit(30){id,name,insights.time_range({"since":"${since}","until":"${until}"}){spend}}&access_token=${accessToken}`;

    const response = await axios({
      url: url,
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return { error: error.message };
  }
};
