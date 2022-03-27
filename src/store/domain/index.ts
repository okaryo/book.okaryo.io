import { createSlice } from "@reduxjs/toolkit";
import { BookRecords } from "../../model/BookRecords";
import { BookRecordsRepository } from "../../repository/BookRecordsRepository";

type State = {
  bookRecords: BookRecords,
}

const initialState: State = {
  bookRecords: BookRecordsRepository.getBookRecords()
}

const bookRecordSlice = createSlice({
  name: 'bookRecord',
  initialState,
  reducers: {},
})

export const domainReducer = bookRecordSlice.reducer
