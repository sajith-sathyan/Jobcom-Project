// store.ts
import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface User {
  userId: any;
  userName: any;
  email: any;
 
  
}

interface UserState {
  currentUser: User | null;
}

const initialState: UserState = {
  currentUser: null,
};
interface NaukriDataType {
  title: string;
  companyName: string;
  experience: string;
  salary: string;
  location: string;
  link: string;
  postedDate: string;
}


interface LinkedinDataType {
  title: string;
  jobStatus: string;
  companyName: string;
  companyLink: string;
  time: string;
  location: string;
  logoImage: string;
}


interface NaukriState {
  naukriData: NaukriDataType[];
}

interface LinkedinState {
  linkedinData: LinkedinDataType[];
}

const initialNaukriState: NaukriState = {
  naukriData: [],
};

const initialLinkedinState: LinkedinState = {
  linkedinData: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.currentUser = action.payload;
    },
  },
});



const naukriSlice = createSlice({
  name: 'naukri',
  initialState: initialNaukriState,
  reducers: {
    setNaukriData: (state, action: PayloadAction<NaukriDataType[]>) => {
      state.naukriData = action.payload;
    },
  },
});

const linkedinSlice = createSlice({
  name: 'linkedin',
  initialState: initialLinkedinState,
  reducers: {
    setLinkedinData: (state, action: PayloadAction<LinkedinDataType[]>) => {
      state.linkedinData = action.payload;
    },
  },
});


export const { setNaukriData } = naukriSlice.actions;
export const { setLinkedinData } = linkedinSlice.actions;
export const { setUser } = userSlice.actions;

const store = configureStore({
  reducer: {
    naukri: naukriSlice.reducer,
    linkedin: linkedinSlice.reducer,
    userSlice:userSlice.reducer
  },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;

