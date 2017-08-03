import { combineReducers } from 'redux';
import homepageData from './homepageReducer';
import faqsPageData from './faqReducer';
import loginData from './loginReducer';
import zipsData from './zipsReducer';

const rootReducer = combineReducers({
	homepageData,
	faqsPageData,
	loginData,
	zipsData
})

export default rootReducer;