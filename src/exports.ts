import * as cfg from "./config/index.json";

export const API_BASEURL = cfg.baseURL;

export const initFilterState = {
  limit: 5,
  page: 0,
  start_date: "22/05/2021",
  end_date: new Date().toLocaleDateString(),
};

export const initPaginationState = {
  rows: 0,
  current_page: 0,
  next_page: 0,
  previous_page: 0,
  rows_per_page: 0,
  total_pages: 0,
};
