import './App.css';
import React, { useEffect } from 'react';
import { Router } from './router/Router';
import { ref, onValue} from "firebase/database";
import { setQuestions, setTotalCards, setPercent } from './redux-toolkit/slices/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux-toolkit/store/store';
import { db } from './firebase';


function App() {
	const currentCardQuestion = useSelector((state: RootState) => state.questions.currentCardQuestion)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
	const questions = ref(db, "questions");
		onValue(questions, (snapshot) => {
			const data = snapshot.val()
			dispatch(setQuestions(data))
			dispatch(setTotalCards())
			dispatch(setPercent(currentCardQuestion))
		});
	}, [])

  	return (
		<Router />
	);
}

export default App;

