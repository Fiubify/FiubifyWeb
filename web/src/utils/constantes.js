export const BASE_URL = "https://fiubify-middleware-staging.herokuapp.com";

export const userMetricsUrl = `${BASE_URL}/metrics/users/events`;
export const loginUserAction = "Login";
export const signupUserAction = "Signup";
export const emailUserType = "Email";
export const federatedUserType = "Federated";

export const contentMetricsUrl = `${BASE_URL}/metrics/contents/events`;
export const creationContentAction = "Creation";
export const listenedContentAction = "Listened";
export const freeTier = "Free";

export const topSongsUrl = `${BASE_URL}/metrics/contents/events/agg_by_song`;
export const topAlbumsUrl = `${BASE_URL}/metrics/contents/events/agg_by_album`;
export const topGenresUrl = `${BASE_URL}/metrics/contents/events/agg_by_genre`;