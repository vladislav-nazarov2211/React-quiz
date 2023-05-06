import './App.css';
import React, { useEffect, useState } from 'react';
import { Router } from './router/Router';
import { db}  from "./firebase";
import { ref, onValue } from "firebase/database"
import { setQuestions, setTotalCards, setPercent } from './redux-toolkit/slices/questionsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from './redux-toolkit/store/store';

function App() {
	const currentCardQuestion = useSelector((state: RootState) => state.questions.currentCardQuestion)
	const dispatch = useDispatch<AppDispatch>()

	useEffect(() => {
		const questions = ref(db, "questions");
		console.log(questions)
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
