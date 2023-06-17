import './App.css';
import React, { useEffect } from 'react';
import { Router } from './router/Router';
import { ref, onValue} from "firebase/database";
import { setQuestions, setTotalCards, setPercent } from './redux-toolkit/slices/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux-toolkit/store/store';
import { db } from './firebase';
import { data } from './redux-toolkit/store/data';





function App() {
	const currentCardQuestion = useSelector((state: RootState) => state.questions.currentCardQuestion)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		dispatch(setQuestions(data))
		dispatch(setTotalCards())
		dispatch(setPercent(currentCardQuestion))
	}, [])


	// useEffect(() => {
	// const questions = ref(db, "questions");
	// console.log(questions)
	// 	onValue(questions, (snapshot) => {
	// 		const data = snapshot.val()
	// 		console.log(data)
	// 		dispatch(setQuestions(data))
	// 		dispatch(setTotalCards())
	// 		dispatch(setPercent(currentCardQuestion))
	// 	});
	// }, [])

  	return (
		<Router />
	);
}

export default App;

